import { FC, PropsWithChildren } from 'react'

import styles from './Container.module.scss'

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className=" container">{children}</div>
}
