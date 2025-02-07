import { useTheme } from './theme/useTheme'
import './styles/index.scss'
import { classNames } from './helpers/classNames'
const App = () => { 
  const {theme,toggleTheme}=useTheme()

  return (
    <div className={classNames('app',{},[theme])}>
      <button onClick={toggleTheme}>{theme}</button>
      <h1>asd</h1>
    </div>
  )
}

export default App