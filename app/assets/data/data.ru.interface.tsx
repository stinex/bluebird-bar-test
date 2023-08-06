import { StaticImageData } from 'next/image'

export interface IMainBlock {
  title: string
  subTitie: string
  description: string
  btnReservation: string
}

export interface IFooterInformation {
  policeText: string
  followText: string
  socialText: string
}

export interface IMenu {
  name: string
  href: string
}

export interface IAdvantages {
  img: StaticImageData
  title: string
  description: string
}

export interface IMenuBarItemsProducts {
  item_title: string
  item_description: string
  item_price: string
  item_type: string
}

export interface IMenuBarItems {
  category: string
  classActive: boolean
  product: IMenuBarItemsProducts[]
}

export interface IMenuBar {
  title: string
  sub_title: string
  description: string
  items: IMenuBarItems[]
}


export interface IContactInfo {
  title: string
  phones: string[]
  emails: string[]
}


export interface IOpeningHours{
  title: string
  days: string[]
}