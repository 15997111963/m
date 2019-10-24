import { i18n } from '@/i18n'

const Header = () => {
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }
  return (
    <button onClick={changeLanguage}>切换语言</button>
  )
}

export default Header