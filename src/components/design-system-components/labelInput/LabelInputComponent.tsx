import { useState } from 'react';
import './LabelInputComponent.scss'
import { ValidationResult } from '../../../helpers/validators';

export enum LabelVariant {
    LIGHT = "light",
    DARK = "dark",
}

export enum InputType {
    EMAIL = "email",
    PASSWORD = "password",
    DATE = "date",
}


export interface LabelInput {
    inputType: InputType,
    onInputChange: (value: string) => void;
    onEnterPressed?: (enterPressed: boolean) => void;
    id?: number,
    labelText?: string,
    labelVariant?: LabelVariant,
    fitContent?: boolean,
    inputPlaceholder?: string,
    inputValidator?: ValidationResult,
    saveAttempt?: boolean,
}

type Props = {
    properties: LabelInput,
}

function LabelInputComponent(props: Props) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        props.properties.onInputChange(newValue); // Pass the input value to the parent component
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.properties.onEnterPressed && event.key === 'Enter') {
            props.properties.onEnterPressed(true); // Pass the input value to the parent component
        }

    };

    return (
        <div className={`label-input__wrapper ${props.properties.inputValidator?.valid === false && props.properties.saveAttempt ? 'error' : ''}`}>
            {
                props.properties.labelText && (
                    <label className={`${props.properties.labelVariant}`}>{props.properties.labelText} {props.properties.saveAttempt}</label>
                )
            }
            <input
                type={props.properties.inputType}
                placeholder={props.properties.inputPlaceholder}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <div className='font-error-color1'>{props.properties.inputValidator?.message}</div>

        </div>
    );
}

export default LabelInputComponent;