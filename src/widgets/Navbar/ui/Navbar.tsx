import { FC } from 'react'
import { AppRoutes } from 'shared/config/routes'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface IProps {
  className?: string
}

export const Navbar: FC<IProps> = ({ className }) => {

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={AppRoutes.MAIN} theme='inverted'>Главная</AppLink>
        <AppLink to={AppRoutes.ABOUT} theme='inverted'>О сайте</AppLink>
      </div>
    </div>
  )
}


