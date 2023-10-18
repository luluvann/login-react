import { useState } from "react";
import './LoginPage.scss'
import { StringIsEmpty, ValidationResult } from "../helpers/validators";
import ButtonComponent, { Button, ButtonVariant } from "../components/design-system-components/button/ButtonComponent";
import { ApiResult, Login } from "../mocklogin/auth";
import LabelInputComponent, { InputType, LabelInput, LabelVariant } from "../components/design-system-components/labelInput/LabelInputComponent";
import image from '../assets/national-cancer-institute-L7en7Lb-Ovc-unsplash.jpg';

function LoginPage() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const [emailError, setEmailError] = useState<ValidationResult>();
    const [passwordError, setPasswordError] = useState<ValidationResult>();
  
    const [saveAttempt, setSaveAttempt] = useState<boolean>();
  
    const [loginError, setLoginError] = useState<string>('');
    
    const loginButtonProperties: Button = {
        variant: ButtonVariant.PRIMARY,
        text: 'Login',
        handleClick: () => {
          setSaveAttempt(true);
          const emailValidation = StringIsEmpty(email);
          setEmailError(emailValidation);
    
          const passwordValidation = StringIsEmpty(password);
          setPasswordError(passwordValidation);
    
          const result: ApiResult = Login(email ?? '', password ?? '');
          if (result.success) {
            setLoginError('You have successfully logged in!')
          } else {
            const message = result.message ?? '';
            setLoginError(message)
          }
        },
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
        saveAttempt: saveAttempt,
        inputValidator: passwordError,
      },
      ]

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