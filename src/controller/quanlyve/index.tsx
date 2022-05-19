import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'
import './styles.scss'
import HeaderPage from 'component/header'
import ContentQLVePage from 'component/content/quanlyVeContent'

const QLVePageController = () => {
  return (

    <Layout className='QLvePage'>
      <MenuSider />
      <Layout> 
        {/* Header */}
        <HeaderPage/>

        {/* content */}
        <ContentQLVePage/>
       </Layout>
    </Layout>
  )
}

export default QLVePageController