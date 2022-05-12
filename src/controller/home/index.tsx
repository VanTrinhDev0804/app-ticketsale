import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'

import './styles.scss'
import HeaderPage from 'component/header'

const HomePageController = () => {
  return (

    <Layout className='HomePage' >
      <MenuSider />
      <Layout> 
        {/* Header */}
        <HeaderPage/>

        {/* content */}

       </Layout>
    </Layout>
  )
}

export default HomePageController