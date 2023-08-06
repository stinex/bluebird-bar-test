import { FC, useEffect } from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-scroll'

import translations from '@/messages/en.json'
import { useTranslations } from 'next-intl'

type MenuProps = {
  menuShow: boolean
  onRequestCloseMenu: () => void
}

const Menu: FC<MenuProps> = ({ menuShow, onRequestCloseMenu }) => {
  const t = useTranslations('Home')

  useEffect(() => {
    menuShow
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  }, [menuShow])


  const henblerClicLink = () =>{
    if (window.innerWidth <= 1024) onRequestCloseMenu
  }

  return (
    <nav className="flex-1 md:pl-0 lg:pl-[100px]">
      <ul className="flex-col lg:flex-row flex items-center gap-[30px]">
        {translations.Home.pageLinks.map((item, i) => (
          <li key={item.name}>
            <Link
              to={t(`pageLinks.${i}.href`)}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={henblerClicLink}
              className="text-secondaryColor text-base font-sans cursor-pointer"
            >
              {t(`pageLinks.${i}.name`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Menu
