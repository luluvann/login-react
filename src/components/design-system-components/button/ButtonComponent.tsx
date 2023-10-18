import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ButtonComponent.scss'

export enum ButtonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    DELETE = "delete"
}

export interface Button {
    /**
    * The variant or style of the button.
    */
    variant: ButtonVariant,
    /**
    * The function to execute when the button is clicked.
    * It can be a function that takes a MouseEvent or a function with no parameters.
    */
    handleClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void),
    /**
    * An optional icon to display on the button.
    */
    icon?: IconProp,
    /**
    * An optional text to display on the button.
    */
    text?: string,
    /**
    * An optional flag indicating whether the button should adjust its size to fit its content.
    */
    fitContent?: boolean,
    /**
    * An optional additional className to style the button component.
    */
    additionalClassName?: string,
}

type Props = {
    properties: Button,
}

function ButtonComponent(props: Props) {

    const genericHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (typeof props.properties.handleClick === 'function') {
            props.properties.handleClick(event);
        }
    };

    return (
        <button className={`${props.properties.variant} ${props.properties.fitContent ? 'fit-content' : ''} ${props.properties.additionalClassName}`} onClick={genericHandleClick}>
            {props.properties.icon != null ? (<FontAwesomeIcon icon={props.properties.icon} />) : null}
            {props.properties.text}
        </button>
    );

}

export default ButtonComponent;