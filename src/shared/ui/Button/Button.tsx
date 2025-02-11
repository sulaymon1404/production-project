import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from './Button.module.scss'


export enum ButtonTheme  {
    CLEAR = "clear"
}



interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string
    theme?: ButtonTheme
}

export const Button: React.FC<IProps> = ({ className,children,theme, ...props}) => {
    return <button className={classNames(cls.button, {}, [className,cls[theme]])} {...props}>{children}</button>
};
