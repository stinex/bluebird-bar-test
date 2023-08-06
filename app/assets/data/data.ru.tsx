import {
  IAdvantages,
  IContactInfo,
  IMenu,
  IMenuBar,
  IOpeningHours,
} from './data.ru.interface'

import iconAdvantagesOne from '../images/icon-advantages-one.svg'
import iconAdvantagesTwo from '../images/icon-advantages-two.svg'
import iconAdvantagesThree from '../images/icon-advantages-three.svg'


export const mainBlock_EN = {
  title: 'Taste and style.',
  subTitie: 'Welcome to Bar!',
  description:
    'We’re located in the heart of Riga Old Town in one of the most beautiful and historic townhouses.',
  btnReservation: 'Booking',
}

export const footerInformation_EN = {
  policeText: 'Bluebird © All rights reserved.',
  followText: 'Follow us',
  socialText: 'We are on social media',
}

export const menu_EN: IMenu[] = [
  {
    name: 'Линка 1',
    href: 'Ссылка 1',
  },
  {
    name: 'Линка 2',
    href: 'Ссылка 2',
  },
  {
    name: 'Линка 3',
    href: 'Ссылка 3',
  },
  {
    name: 'Линка 4',
    href: 'Ссылка 4',
  },
]

export const advantages_EN: IAdvantages[] = [
  {
    img: iconAdvantagesOne,
    title: 'Our Story',
    description:
      'We continue a rich tradition of quality beverages and a welcoming atmosphere.',
  },
  {
    img: iconAdvantagesTwo,
    title: 'Our Mission',
    description:
      'To create unforgettable evenings by offering exquisite drinks and excellent service.',
  },
  {
    img: iconAdvantagesThree,
    title: 'Menu',
    description:
      'A wide selection of refined beverages and cocktails for the most discerning connoisseurs.',
  },
]

export const menuBar_EN: IMenuBar = {
  title: 'OUR MENU',
  sub_title: 'Exclusive Selection',
  description:
    'You can indulge in delightful cocktails or local beers and enjoy delicious snacks, juicy burgers, hot dogs, and much more!',
  items: [
    {
      category: 'Starters',
      classActive: true,
      product: [
        {
          item_title: 'Pate with Mushrooms',
          item_description: 'Mushrooms, Toast, Garlic Sause',
          item_price: '$15',
          item_type: '',
        },
        {
          item_title: 'Chicken Wings',
          item_description: 'Chicken Wings, Sesame Seeds, Spicy Sauce',
          item_price: '$30',
          item_type: '',
        },
        {
          item_title: 'Сold Сuts',
          item_description: 'Balyk, Prosciutto, Boiled Pork',
          item_price: '$32',
          item_type: '',
        },
        {
          item_title: 'Cheese Slices',
          item_description: 'Parmesan, Mascarpone, Mozzarella',
          item_price: '$25',
          item_type: '',
        },
        {
          item_title: 'Shrimps in Batter',
          item_description: 'Shrimps, Sauce, Herbs',
          item_price: '$18',
          item_type: '',
        },
        {
          item_title: 'Pita Bread with Vegetables',
          item_description: 'Lavash, Greens, Tomato, Cabbage, Cucumber, Sauce',
          item_price: '$28',
          item_type: '',
        },
      ],
    },
    {
      category: 'Breakfasts',
      classActive: false,
      product: [
        {
          item_title: 'Pate with Mushrooms',
          item_description: 'Mushrooms, Toast, Garlic Sause',
          item_price: '$15',
          item_type: '',
        },
        {
          item_title: 'Chicken Wings',
          item_description: 'Chicken Wings, Sesame Seeds, Spicy Sauce',
          item_price: '$30',
          item_type: '',
        },
        {
          item_title: 'Сold Сuts',
          item_description: 'Balyk, Prosciutto, Boiled Pork',
          item_price: '$32',
          item_type: '',
        },
        {
          item_title: 'Cheese Slices',
          item_description: 'Parmesan, Mascarpone, Mozzarella',
          item_price: '$25',
          item_type: '',
        },
        {
          item_title: 'Shrimps in Batter',
          item_description: 'Shrimps, Sauce, Herbs',
          item_price: '$18',
          item_type: '',
        },
        {
          item_title: 'Pita Bread with Vegetables',
          item_description: 'Lavash, Greens, Tomato, Cabbage, Cucumber, Sauce',
          item_price: '$28',
          item_type: '',
        },
      ],
    },
    {
      category: 'Desserts',
      classActive: false,
      product: [
        {
          item_title: 'Pate with Mushrooms',
          item_description: 'Mushrooms, Toast, Garlic Sause',
          item_price: '$15',
          item_type: '',
        },
        {
          item_title: 'Chicken Wings',
          item_description: 'Chicken Wings, Sesame Seeds, Spicy Sauce',
          item_price: '$30',
          item_type: '',
        },
        {
          item_title: 'Сold Сuts',
          item_description: 'Balyk, Prosciutto, Boiled Pork',
          item_price: '$32',
          item_type: '',
        },
        {
          item_title: 'Cheese Slices',
          item_description: 'Parmesan, Mascarpone, Mozzarella',
          item_price: '$25',
          item_type: '',
        },
        {
          item_title: 'Shrimps in Batter',
          item_description: 'Shrimps, Sauce, Herbs',
          item_price: '$18',
          item_type: '',
        },
        {
          item_title: 'Pita Bread with Vegetables',
          item_description: 'Lavash, Greens, Tomato, Cabbage, Cucumber, Sauce',
          item_price: '$28',
          item_type: '',
        },
      ],
    },
    {
      category: 'Beverages',
      classActive: false,
      product: [
        {
          item_title: 'Pate with Mushrooms',
          item_description: 'Mushrooms, Toast, Garlic Sause',
          item_price: '$15',
          item_type: '',
        },
        {
          item_title: 'Chicken Wings',
          item_description: 'Chicken Wings, Sesame Seeds, Spicy Sauce',
          item_price: '$30',
          item_type: '',
        },
        {
          item_title: 'Сold Сuts',
          item_description: 'Balyk, Prosciutto, Boiled Pork',
          item_price: '$32',
          item_type: '',
        },
        {
          item_title: 'Cheese Slices',
          item_description: 'Parmesan, Mascarpone, Mozzarella',
          item_price: '$25',
          item_type: '',
        },
        {
          item_title: 'Shrimps in Batter',
          item_description: 'Shrimps, Sauce, Herbs',
          item_price: '$18',
          item_type: '',
        },
        {
          item_title: 'Pita Bread with Vegetables',
          item_description: 'Lavash, Greens, Tomato, Cabbage, Cucumber, Sauce',
          item_price: '$28',
          item_type: '',
        },
      ],
    },
  ],
}

export const contactInfo_EN: IContactInfo = {
  title: 'Contacts',
  phones: ['+371 203 83 074'],
  emails: ['rigabirdbar@gmail.com'],
}

export const openingHours_EN: IOpeningHours = {
  title: 'Working hours',
  days: [
    'Mon – Wed from 13:00 to 23:00',
    'Thursday from 13:00 to 24:00',
    'Friday from 13:00 to 1:00',
    'Saturday from 12:00 to 1:00',
    'Sunday from 12:00 to 23:00',
  ],
}
