import { social } from '../../assets/data/common'
import Image from 'next/image'
import { FC } from 'react'

interface Ilocation {
  location?: string
}

const Social: FC<Ilocation> = ({ location }) => {
  return (
    <div
      className={`${
        location == 'footer' ? 'justify-center  md:justify-normal ' : ''
      } flex items-center gap-[15px]`}
    >
      {social.map((item) => (
        <a
          href={item.href}
          key={item.name}
          className="h-[50px] w-[50px] bg-complementaryColor hover:bg-blueColor ease-in-out duration-300 rounded-full grid place-items-center"
        >
          <Image src={item.icon} alt={item.name} />
        </a>
      ))}
    </div>
  )
}

export default Social
