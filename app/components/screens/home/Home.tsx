'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { useEffect, useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import translations from '@/messages/en.json'

// images for main slider
import mainBlockOne from '@/app/assets/images/bar/main-block-one.jpg'
import mainBlockTwo from '@/app/assets/images/bar/main-block-two.jpg'
import mainBlockThree from '@/app/assets/images/bar/main-block-three.jpeg'
import mainBlockFour from '@/app/assets/images/bar/main-block-four.jpeg'

// images for information slider one
import infoBlockOne from '@/app/assets/images/bar/info-block-one.jpg'
import infoBlockTwo from '@/app/assets/images/bar/info-block-two.jpg'
import infoBlockFive from '@/app/assets/images/bar/info-block-five.jpg'
import infoBlockSix from '@/app/assets/images/bar/info-block-six.jpg'

// images for information slider two
import infoBlockThree from '@/app/assets/images/bar/info-block-three.jpeg'
import infoBlockFour from '@/app/assets/images/bar/info-block-four.jpg'
import infoBlockSeven from '@/app/assets/images/bar/info-block-seven.jpg'

// images from slider cooks
import cookOne from '@/app/assets/images/bar/cook-one.jpg'
import cookTwo from '@/app/assets/images/bar/cook-two.jpg'

import Layout from '../../layout/Layout'
import { Container } from '../../container/Container'
import { Link } from 'react-scroll'

export const Home = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  const navigationMiniPrevRef = useRef<HTMLDivElement>(null)
  const navigationMiniNextRef = useRef<HTMLDivElement>(null)

  const navigationMenuBarPrevRef = useRef<HTMLDivElement>(null)
  const navigationMenuBarNextRef = useRef<HTMLDivElement>(null)

  const t = useTranslations('Home')

  const itemsMenuBarBtn = useRef<(HTMLButtonElement | null)[]>([])
  const itemsMenuBar = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    itemsMenuBarBtn.current = itemsMenuBarBtn.current.slice(
      0,
      translations.Home.itemsMenuBar.length + 1
    )
    itemsMenuBar.current = itemsMenuBar.current.slice(
      0,
      translations.Home.itemsMenuBar.length + 1
    )
  }, [translations.Home.itemsMenuBar])

  const handleClickMenuBar = (i: number) => {
    itemsMenuBar.current.map((item, index) => {
      if (item) {
        item.classList.remove('grid')
        item.classList.add('hidden')
        itemsMenuBarBtn.current[index]?.classList.add('before:w-[0]')
        itemsMenuBarBtn.current[index]?.classList.remove('before:w-[102%]')
        if (index === i) {
          item.classList.add('grid')
          item.classList.remove('hidden')
          itemsMenuBarBtn.current[index]?.classList.remove('before:w-[0]')
          itemsMenuBarBtn.current[index]?.classList.add('before:w-[102%]')
        }
      }
    })
  }

  return (
    <Layout title="" description="Главная">
      <div className="flex-col md:flex-row  max-w-[1545px] ml-auto flex gap-[50px] lg:gap-[100px] items-center px-[15px] 3xl:px-[0] xl:px-[15px] lg:px-[15px] md:px-[39px] md:pr-[0px] sm:px-[15px]">
        <div>
          <h5 className="text-secondaryColor text-base font-sans tracking-[5px] mb-[14px] leading-4">
            {t('mainBlockTitle')}
          </h5>
          <h1 className="max-w-[500px] text-secondaryColor font-body font-semibold text-[60px] leading-tight mb-[25px] lg:leading-[110px] lg:text-[100px]">
            {t('mainBlockSubTitle')}
          </h1>
          <div className="ml-0 lg:ml-[25px]">
            <p className="text-typeographyColor text-base max-w-[400px] mb-[60px]">
              {t('mainBlockDescription')}
            </p>
            <Link
              to={'сontacts'}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              type="button"
              className="py-[20px] px-[30px] bg-mainColor text-sm uppercase hover:bg-blueColor hover:text-mainColor ease-in-out duration-300 cursor-pointer"
            >
              {t('mainBtnReservation')}
            </Link>
          </div>
        </div>
        <div className="aspect-square max-w-[800px] w-[100%] overflow-hidden ml-auto relative max-h-[calc(100vh-130px)]">
          <Swiper
            className="h-[100%]"
            modules={[Autoplay, Navigation] as any}
            loop={true}
            autoplay={{
              delay: 2200,
            }}
            onInit={(swiper) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = navigationPrevRef.current
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = navigationNextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
          >
            <SwiperSlide>
              <Image
                src={mainBlockOne}
                alt="bar"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={mainBlockTwo}
                alt="bar"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={mainBlockThree}
                alt="bar"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={mainBlockFour}
                alt="bar"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <div
              ref={navigationPrevRef}
              className="group/edit cursor-pointer absolute w-[100px] h-[100px] bottom-0 left-0 hover:bg-whiteColor z-10 grid place-items-center ease-in-out duration-300"
            >
              <BsChevronLeft
                className="fill-whiteColor group-hover/edit:fill-mainColor"
                size={24}
              />
            </div>
            <div
              ref={navigationNextRef}
              className="group/edit cursor-pointer absolute w-[100px] h-[100px] bottom-0 left-[100px] hover:bg-whiteColor z-10 grid place-items-center ease-in-out duration-300"
            >
              <BsChevronRight
                className="fill-whiteColor group-hover/edit:fill-mainColor"
                size={24}
              />
            </div>
          </Swiper>
        </div>
      </div>

      <div className="bg-complementaryColor lg:py-[130px]  md:py-[100px] py-[80px]">
        <Container>
          <div className="grid gap-[30px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[1170px] m-auto">
            {translations.Home.advantages.map((item, i) => (
              <div
                key={t(`advantages.${i}.title`)}
                className="flex md:flex-row flex-col  md:items-start items-center text-center gap-[20px]"
              >
                <Image
                  src={`.${t(`advantages.${i}.img`)}`}
                  width="100"
                  height="100"
                  alt={t(`advantages.${i}.title`)}
                />
                <div className="center">
                  <h3 className="text-secondaryColor font-semibold mb-[10px] text-4xl">
                    {t(`advantages.${i}.title`)}
                  </h3>
                  <p className="text-typeographyColor font-normal text-base">
                    {t(`advantages.${i}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div
        className="lg:py-[130px] max-w-[1170px] m-auto md:py-[100px] py-[80px]"
        id="our-menu"
      >
        <Container>
          <h4 className="text-center text-base text-mainColor mb-[10px] tracking-[5px] leading-4 font-sans">
            {t('titleMenuBar')}
          </h4>
          <h5 className="text-center text-5xl text-mainColor mb-[20px] font-semibold">
            {t('sub_titleMenuBar')}
          </h5>
          <p className="max-w-[750px] text-typeographyColor text-center font-sans text-base m-auto mb-[60px]">
            {t('descriptionMenuBar')}
          </p>

          <div className="max-w-[952px] m-auto flex gap-[30px] justify-between mb-[40px] relative">
            <Swiper
              className="h-[100%] gap-x-2 !px-[15px] !-mx-[15px] lg:!-mx-[0] lg:!px-[0] !static"
              modules={[Navigation] as any}
              slidesPerView={'auto'}
              freeMode={true}
              spaceBetween={30}
              onInit={(swiperMenuBar) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiperMenuBar.params.navigation.prevEl =
                  navigationMenuBarPrevRef.current
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiperMenuBar.params.navigation.nextEl =
                  navigationMenuBarNextRef.current

                swiperMenuBar.navigation.init()
                swiperMenuBar.navigation.update()
              }}
              navigation={{
                prevEl: navigationMenuBarPrevRef.current,
                nextEl: navigationMenuBarNextRef.current,
              }}
            >
              {translations.Home.itemsMenuBar.map((item, i) => (
                <SwiperSlide
                  key={t(`itemsMenuBar.${i}.category`)}
                  className="!w-max"
                >
                  <button
                    ref={(el) => (itemsMenuBarBtn.current[i] = el)}
                    onClick={() => handleClickMenuBar(i)}
                    className={`text-secondaryColor flex-shrink-0 text-lg font-semibold relative before:block before:absolute before:h-[4px]  hover:before:w-[102%] before:ease-in-out before:duration-300 ${
                      item.classActive ? 'before:w-[102%]' : 'before:w-[0]'
                    } before:top-[40%] before:bg-typeographyColor`}
                  >
                    {t(`itemsMenuBar.${i}.category`)}
                  </button>
                </SwiperSlide>
              ))}

              <div
                ref={navigationMenuBarPrevRef}
                className="group/edit hidden lg:grid cursor-pointer absolute w-[50px] h-[50px] -bottom-[10px] -left-[55px] bg-mainColor hover:bg-blueColor z-10  place-items-center ease-in-out duration-300"
              >
                <BsChevronLeft
                  className="fill-whiteColor group-hover/edit:fill-whiteColor"
                  size={24}
                />
              </div>
              <div
                ref={navigationMenuBarNextRef}
                className="group/edit hidden lg:grid cursor-pointer absolute w-[50px] h-[50px] -bottom-[10px] -right-[55px] bg-mainColor hover:bg-blueColor z-10 place-items-center ease-in-out duration-300"
              >
                <BsChevronRight
                  className="fill-whiteColor group-hover/edit:fill-whiteColor"
                  size={24}
                />
              </div>
            </Swiper>
          </div>
          <div>
            {translations.Home.itemsMenuBar.map((item, i) => (
              <div
                key={t(`itemsMenuBar.${i}.category`)}
                ref={(el) => (itemsMenuBar.current[i] = el)}
                className={`${
                  item.classActive ? 'grid' : 'hidden'
                } lg:grid-cols-2 gap-x-[50px] gap-y-[40px] ease-in-out duration-300`}
              >
                {item.product.map((product, index) => (
                  <div
                    key={t(`itemsMenuBar.${i}.product.${index}.item_title`)}
                    className="flex justify-between pb-[40px] border-b-[1px]"
                  >
                    <div className="grid gap-[15px]">
                      <h5 className="text-secondaryColor text-lg">
                        {product.item_type ? (
                          <span className={product.item_type}></span>
                        ) : (
                          ''
                        )}
                        {t(`itemsMenuBar.${i}.product.${index}.item_title`)}
                      </h5>

                      <p className="text-typeographyColor font-sans text-lg italic">
                        {t(
                          `itemsMenuBar.${i}.product.${index}.item_description`
                        )}
                      </p>
                    </div>
                    <div className="text-secondaryColor text-lg ">
                      {t(`itemsMenuBar.${i}.product.${index}.item_price`)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div
        className="max-w-[1920px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        id="about-us"
      >
        <div className="aspect-square">
          <Swiper
            className="h-[100%] bg-secondaryColor"
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 2300,
            }}
            onInit={(swiperMini) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiperMini.params.navigation.prevEl =
                navigationMiniPrevRef.current
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiperMini.params.navigation.nextEl =
                navigationMiniNextRef.current
              swiperMini.navigation.init()
              swiperMini.navigation.update()
            }}
            navigation={{
              prevEl: navigationMiniPrevRef.current,
              nextEl: navigationMiniNextRef.current,
            }}
          >
            {translations.Home.reviews.map((item, i) => (
              <SwiperSlide key={item.review}>
                <div className="flex flex-col justify-center h-[100%] px-3">
                  <div className="text-base mb-2">
                    {`«${t(`reviews.${i}.review`)}».`}
                  </div>
                  <div className="text-2xl">{t(`reviews.${i}.name`)}</div>
                </div>
              </SwiperSlide>
            ))}
            <div
              ref={navigationMiniPrevRef}
              className="group/edit cursor-pointer absolute w-[100px] h-[100px] bottom-0 right-[100px] hover:bg-whiteColor z-10 grid place-items-center ease-in-out duration-300"
            >
              <BsChevronLeft
                className="fill-whiteColor group-hover/edit:fill-mainColor"
                size={24}
              />
            </div>
            <div
              ref={navigationMiniNextRef}
              className="group/edit cursor-pointer absolute w-[100px] h-[100px] bottom-0 right-[0px] hover:bg-whiteColor z-10 grid place-items-center ease-in-out duration-300"
            >
              <BsChevronRight
                className="fill-whiteColor group-hover/edit:fill-mainColor"
                size={24}
              />
            </div>
          </Swiper>
        </div>
        <div className="aspect-square">
          <Swiper
            className="h-[100%]"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1800,
            }}
          >
            <SwiperSlide>
              <Image
                src={infoBlockOne}
                alt="one"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={infoBlockSix}
                alt="two"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={infoBlockTwo}
                alt="two"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={infoBlockFive}
                alt="two"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="aspect-square">
          <Swiper
            className="h-[100%]"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
            <SwiperSlide>
              <Image
                src={infoBlockThree}
                alt="one"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={infoBlockFour}
                alt="two"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={infoBlockSeven}
                alt="two"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="aspect-square bg-complementaryColor">
          <Swiper
            className="h-[100%]"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1700,
            }}
          >
            {translations.Home.topFoods.map((item, i) => (
              <SwiperSlide>
                <div className="px-[60px] flex flex-col justify-center h-[100%]">
                  <h4 className="text-secondaryColor font-semibold text-2xl mb-1">
                    {t(`topFoods.${i}.item_title`)}
                  </h4>
                  <p className="text-typeographyColor mb-5 font-medium">
                    {t(`topFoods.${i}.item_description`)}
                  </p>
                  <div className="text-secondaryColor mb-2 text-5xl font-semibold font-sans">
                    {t(`topFoods.${i}.item_price`)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="max-w-[1920px] m-auto grid  grid-cols-1 md:grid-cols-1  lg:grid-cols-2">
        <div className="aspect-[4/2.5]">
          <Swiper
            className="h-[100%]"
            modules={[Autoplay]}
            loop={true}
            allowTouchMove={false}
            autoplay={{
              delay: 2700,
            }}
          >
            <SwiperSlide>
              <Image
                src={cookOne}
                alt="cook one"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={cookTwo}
                alt="cook one"
                className="h-[100%] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="md:aspect-[4/2.5]">
          <Swiper
            className="h-[100%]"
            modules={[Autoplay]}
            loop={true}
            allowTouchMove={false}
            autoplay={{
              delay: 2700,
            }}
          >
            <SwiperSlide>
              <div className="py-[25px] lg:py-[0] px-3 lg:px-[60px] flex flex-col justify-center h-[100%] relative">
                <h4 className='text-secondaryColor font-semibold text-2xl mb-1 before:content-["RAS"] before:absolute before:-left-[10px] before:top-[20px] before:text-[200px] before:text-complementaryColor before:font-black before:font-sans before:-z-10'>
                  {t(`cooks.${0}.cookName`)}
                </h4>
                <p className="text-typeographyColor mb-5 font-medium relative">
                  {t(`cooks.${0}.cookInfo`)}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[25px] lg:py-[0] px-3 lg:px-[60px] flex flex-col justify-center h-[100%] relative">
                <h4 className='text-secondaryColor font-semibold text-2xl mb-1 before:content-["KIRIL"] before:absolute before:-left-[10px] before:top-[20px] before:text-[200px] before:text-complementaryColor before:font-black before:font-sans before:-z-10'>
                  {t(`cooks.${1}.cookName`)}
                </h4>
                <p className="text-typeographyColor mb-5 font-medium relative">
                  {t(`cooks.${1}.cookInfo`)}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  )
}
