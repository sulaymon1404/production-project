import { classNames } from 'shared/lib/helpers/classNames';
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/theme';

import LightIcon from 'shared/assets/light.svg'
import DarkIcon from 'shared/assets/dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface IProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<IProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>{theme === Theme.DARK ? <LightIcon width={20} height={20} /> : <DarkIcon width={20} height={20} color='#023480b7' />} </Button>
    );
};
