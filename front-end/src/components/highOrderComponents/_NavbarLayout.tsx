import React, { ReactNode } from 'react'
import Navbar from './Navbar'
type Props = {
    children: ReactNode
}

const _NavbarLayout :React.FC<Props> = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default _NavbarLayout