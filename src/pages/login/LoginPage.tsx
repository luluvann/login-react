import { useState } from "react";
import './LoginPage.scss'
import { StringIsEmpty, ValidationResult } from "../../helpers/validators";
import ButtonComponent, { Button, ButtonVariant } from "../../components/design-system-components/button/ButtonComponent";
import { ApiResult, login } from "../../mocklogin/auth";
import LabelInputComponent, { InputType, LabelInput, LabelVariant } from "../../components/design-system-components/labelInput/LabelInputComponent";
import image from '../../assets/pawel-czerwinski-LyZLaA5jtiY-unsplash.jpg';

import { useNavigate } from 'react-router-dom';

/* Centralizes the form states */
function useFormState() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<ValidationResult>();
  const [passwordError, setPasswordError] = useState<ValidationResult>();
  const [saveAttempt, setSaveAttempt] = useState<boolean>();
  const [loginError, setLoginError] = useState<string>('');

  return {
    values: {
      email,
      password,
      emailError,
      passwordError,
      saveAttempt,
      loginError
    },
    actions: {
      setEmail,
      setPassword,
      setEmailError,
      setPasswordError,
      setSaveAttempt,
      setLoginError
    }
  };
}


function LoginPage() {

  const navigate = useNavigate();

  const states = useFormState();

  const [test, setTest] = useState<string>('');

  /* Set Login Button component properties */
  const loginButtonProperties: Button = {
    variant: ButtonVariant.PRIMARY,
    text: 'Login',
    handleClick: () => handleLogin(),
    fitContent: true,
    additionalClassName: "additional",
    type: 'submit',
  }

  /* Set labelInput components properties */
  const labelInputPropertiesList: LabelInput[] = [{
    labelText: 'Email',
    labelVariant: LabelVariant.LIGHT,
    inputType: InputType.EMAIL,
    inputPlaceholder: "Your Email",
    onInputChange: (value: string) => {
      states.actions.setEmail(value);
      const emailValidation = StringIsEmpty(value);
      states.actions.setEmailError(emailValidation);

    },
    onEnterPressed: (enterPressed: boolean) => {
      if (enterPressed) {
        handleLogin();
      }
    },
    saveAttempt: states.values.saveAttempt,
    inputValidator: states.values.emailError,
  },
  {
    labelText: 'Password',
    labelVariant: LabelVariant.LIGHT,
    inputType: InputType.PASSWORD,
    inputPlaceholder: "Your Password",
    onInputChange: (value: string) => {
      states.actions.setPassword(value);
      const passwordValidation = StringIsEmpty(value);
      states.actions.setPasswordError(passwordValidation);

    },
    onEnterPressed: (enterPressed: boolean) => {
      if (enterPressed) {
        handleLogin();
      }
    },
    saveAttempt: states.values.saveAttempt,
    inputValidator: states.values.passwordError,
  },
  ]

  /* Function that checks and calls the Login API, performs actions depending on the response from the API */
  function handleLogin() {
    /* performs checks on each field if empty */
    const emailValidation = StringIsEmpty(states.values.email);
    const passwordValidation = StringIsEmpty(states.values.password);

    /* if errors, will set the errors on each field*/
    states.actions.setSaveAttempt(true);
    states.actions.setEmailError(emailValidation);
    states.actions.setPasswordError(passwordValidation);

    /* calls API and performs login check, will set the login error if any */
    const result: ApiResult = login(states.values.email ?? '', states.values.password ?? '');
    if (result.success) {
      navigate('/login-react/dashboard');
    } else {
      states.actions.setLoginError(result.message || '');
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    handleLogin();
    event.preventDefault();
  };

  return (
    <div className='login'>
      <img className='login__img' src={image} />
      <form className='login__form' onSubmit={handleSubmit} >
        <h1 className='font-style2 font-regular-color7'>Login</h1>
        <div className='login__form__label-inputs-container'>
          {labelInputPropertiesList.map((labelInput, index) => (<LabelInputComponent key={index} properties={labelInput} />))}
          {states.values.loginError && <div className='font-regular-color1'>{states.values.loginError}</div>}
        </div>
        <ButtonComponent properties={loginButtonProperties}></ButtonComponent>
      </form>
    </div>
  );

}

export default LoginPage;