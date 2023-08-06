import Link from 'next/link'
import { FC } from 'react'


import { IMenu } from '../../../assets/data/data.ru.interface'

interface IMenuItemLink {
  item: IMenu
}

const MenuItem: FC<IMenuItemLink> = ({ item }) => {
  return (
    <Link
      href={item.href}
      className="text-secondaryColor text-base font-sans"
    >
      {item.name}
    </Link>
  )
}
export default MenuItem
