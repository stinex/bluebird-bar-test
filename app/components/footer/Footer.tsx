import { FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import translations from '@/messages/en.json'

import { Container } from '../container/Container'
import Social from '../social/Social'

import Logo from '@/app/assets/images/logo.svg'
import IconPhone from '@/app/assets/images/icon-phone.svg'
import IconEmail from '@/app/assets/images/icon-email.svg'

const Footer: FC = () => {
  const t = useTranslations('Home')

  return (
    <footer
      className="text-center md:text-left py-[80px] md:py-[100px] lg:py-[130px] max-w-[1270px] m-auto w-[100%]"
      id="сontacts"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[40px] lg:gap-y-[0px] lg:grid-cols-4">
          <div>
            <Image
              src={Logo}
              alt="Bluebird"
              className="mx-auto md:mx-0 h-[43px] w-[154px] mb-[20px]"
            ></Image>
            <p className="font-sans text-[12px] text-typeographyColor">
              {t('policeText')} {new Date().getFullYear()}
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-mainColor mb-[30px]">
              {t('titleContacts')}
            </h3>
            {translations.Home.phonesContacts.map((phone, i) => (
              <a
                key={t(`phonesContacts.${i}`)}
                href={`tel:${t(`phonesContacts.${i}`)}`}
                className="justify-center md:justify-normal flex gap-x-[10px] text-base font-normal text-typeographyColor mb-[10px]"
              >
                <Image src={IconPhone} alt="phone" /> {t(`phonesContacts.${i}`)}
              </a>
            ))}
            {translations.Home.emailsContacts.map((email, i) => (
              <a
                key={t(`emailsContacts.${i}`)}
                href={`mailto:${t(`emailsContacts.${i}`)}`}
                className="justify-center md:justify-normal flex gap-x-[10px] text-base font-normal text-typeographyColor"
              >
                <Image src={IconEmail} alt="email" />
                {t(`emailsContacts.${i}`)}
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-2xl text-mainColor mb-[30px]">
              {t('titleOpeningHours')}
            </h3>
            {translations.Home.daysOpeningHours.map((day, i) => (
              <div
                key={t(`daysOpeningHours.${i}`)}
                className="justify-center md:justify-normal flex gap-x-[10px] text-base font-normal text-typeographyColor mb-[10px]"
              >
                {t(`daysOpeningHours.${i}`)}
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-center md:text-left text-2xl text-mainColor mb-[30px]">
              {t('followText')}
            </h3>
            <div className="text-center md:text-left text-base font-normal text-typeographyColor mb-[20px]">
              {t('socialText')}
            </div>
            <Social location="footer" />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
