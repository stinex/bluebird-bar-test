import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MdMenu } from 'react-icons/md/index'

import Logo from '@/app/assets/images/logo.svg'
import Menu from './menu/Menu'
import Social from '../social/Social'
import { useLocale } from 'next-intl'

const Header: FC = () => {
  const [openMneu, setOpenMenu] = useState(false)

  const locale = useLocale()

  const toggleMenu = () => {
    setOpenMenu(!openMneu)
    !openMneu
      ? document.querySelector('body')?.classList.add('overflow-hidden')
      : document.querySelector('body')?.classList.remove('overflow-hidden')
  }

  return (
    <header className="md:max-w-[1750px] flex items-center w-[100%] h-[90px] lg:h-[130px] px-[15px] lg:m-auto lg:px-[15px] md:px-[39px] sm:px-[15px] justify-between lg:justify-normal">
      <Link href="/">
        <Image src={Logo} alt="Bluebird" className="h-[53px] w-[194px]"></Image>
      </Link>

      <div
        className={`bg-whiteColor absolute max-w-[65vw] h-screen left-0 top-0 py-16 shadow-lg  flex-col ${
          !openMneu ? 'translate-x-[-100%]' : 'translate-x-[0%]'
        } overflow-auto lg:translate-x-0 z-20 ease-in-out duration-300 lg:h-auto lg:p-0 lg:max-w-[100%] lg:flex-row lg:shadow-none lg:relative items-center w-[100%] flex`}
      >
        <Menu menuShow={openMneu} onRequestCloseMenu={toggleMenu} />
        <Social />

        <Link
          href={locale === 'lv' ? '/en' : '/lv'}
          locale={locale === 'lv' ? '/en' : '/lv'}
          className="text-lg text-mainColor uppercase p-5 font-medium"
        >
          {locale === 'lv' ? 'en' : 'lv'}
        </Link>
      </div>
      <button className="block lg:hidden">
        <MdMenu className="fill-mainColor" size={40} onClick={toggleMenu} />
      </button>
    </header>
  )
}

export default Header
