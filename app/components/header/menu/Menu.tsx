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

  const henblerClicLink = () => {
    if (window.innerWidth <= 1024) {
      onRequestCloseMenu()
      document.body.classList.remove('overflow-hidden')
    }
  }

  return (
    <nav className="flex-1 md:pl-0 lg:pl-[100px]">
      <ul className="flex-col lg:flex-row flex items-center gap-[30px]">
        {translations.Home.pageLinks.map((item, i) => (
          <li key={item.name}>
            <Link
              key={t(`pageLinks.${i}.href`)}
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
