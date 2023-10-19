import { useState } from "react";
import './LoginPage.scss'
import { StringIsEmpty, ValidationResult } from "../../helpers/validators";
import ButtonComponent, { Button, ButtonVariant } from "../../components/design-system-components/button/ButtonComponent";
import { ApiResult, Login } from "../../mocklogin/auth";
import LabelInputComponent, { InputType, LabelInput, LabelVariant } from "../../components/design-system-components/labelInput/LabelInputComponent";
import image from '../../assets/pawel-czerwinski-LyZLaA5jtiY-unsplash.jpg';

import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<ValidationResult>();
  const [passwordError, setPasswordError] = useState<ValidationResult>();

  const [saveAttempt, setSaveAttempt] = useState<boolean>();

  const [loginError, setLoginError] = useState<string>('');

  const loginButtonProperties: Button = {
    variant: ButtonVariant.PRIMARY,
    text: 'Login',
    handleClick: () => handleLogin(),
    fitContent: true,
    additionalClassName: "additional"
  }

  const labelInputPropertiesList: LabelInput[] = [{
    labelText: 'Email',
    labelVariant: LabelVariant.LIGHT,
    inputType: InputType.EMAIL,
    inputPlaceholder: "Your Email",
    onInputChange: (value: string) => {
      setEmail(value);
      const emailValidation = StringIsEmpty(email);
      setEmailError(emailValidation);
    },
    onEnterPressed: (enterPressed: boolean) => {
      if (enterPressed) {
        handleLogin();
      }
    },
    saveAttempt: saveAttempt,
    inputValidator: emailError,
  },
  {
    labelText: 'Password',
    labelVariant: LabelVariant.LIGHT,
    inputType: InputType.PASSWORD,
    inputPlaceholder: "Your Password",
    onInputChange: (value: string) => {
      setPassword(value);
      const emailValidation = StringIsEmpty(email);
      setPasswordError(emailValidation);
    },
    onEnterPressed: (enterPressed: boolean) => {
      if (enterPressed) {
        handleLogin();
      }
    },
    saveAttempt: saveAttempt,
    inputValidator: passwordError,
  },
  ]

  function handleLogin() {
    setSaveAttempt(true);
    const emailValidation = StringIsEmpty(email);
    setEmailError(emailValidation);

    const passwordValidation = StringIsEmpty(password);
    setPasswordError(passwordValidation);

    const result: ApiResult = Login(email ?? '', password ?? '');
    if (result.success) {
      setLoginError('You have successfully logged in!')
      navigate('/login-react/dashboard');
    } else {
      const message = result.message ?? '';
      setLoginError(message)
    }
  }

  return (
    <div className='temper'>
      <img src={image} />
      <div className='temp'>
        <h1 className='font-style2 font-regular-color7'>Login</h1>
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '8px' }}>
          {labelInputPropertiesList.map((labelInput) => (<LabelInputComponent properties={labelInput} />))}
          {loginError && <div className='font-regular-color1'>{loginError}</div>}
        </div>
        <ButtonComponent properties={loginButtonProperties}></ButtonComponent>
      </div>
    </div>
  );

}

export default LoginPage;