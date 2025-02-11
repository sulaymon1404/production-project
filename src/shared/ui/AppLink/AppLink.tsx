import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames";
import cls from './AppLink.module.scss'


type AppLinkTheme = "primary" | "inverted"


interface IProps extends LinkProps {
    theme? :AppLinkTheme
}

export const AppLink: React.FC<IProps> = ({to, className,children, theme="primary" , ...props}) => {
  return (
    <Link to={to} className={classNames(cls.appLink,{},[className,cls[theme]])} {...props}>
        {children}
    </Link>
  );
};
