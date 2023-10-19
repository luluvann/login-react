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
        <div className={`label-input ${!props.properties.inputValidator?.valid && props.properties.saveAttempt && 'error'}`}>
            {
                props.properties.labelText && (
                    <label className={`label-input__label--${props.properties.labelVariant}`}>{props.properties.labelText}</label>
                )
            }
            <input
                className='label-input__input'
                type={props.properties.inputType}
                placeholder={props.properties.inputPlaceholder}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <div className='label-input__error-message font-error-color1'>{!props.properties.inputValidator?.valid && props.properties.saveAttempt && props.properties.inputValidator?.message}</div>

        </div>
    );
}

export default LabelInputComponent;