import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface IProps {
    className?: string
}

export const Sidebar: React.FC<IProps> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onToggle = () => setIsCollapsed((prev) => !prev)
    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* LangSwithcer */}
            </div>
        </div>
    );
};
