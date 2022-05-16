import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'

import './styles.scss'
import HeaderPage from 'component/header'
import ContentThongke from 'component/content/homeContent'
import ContentHomePage from 'component/content/homeContent'

const HomePageController = () => {
  return (

    <Layout className='HomePage' >
      <MenuSider />
      <Layout> 
        {/* Header */}
        <HeaderPage/>

        {/* content */}
          <ContentHomePage/>
       </Layout>
    </Layout>
  )
}

export default HomePageController