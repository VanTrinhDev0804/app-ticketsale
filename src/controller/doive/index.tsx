import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'
import './styles.scss'
import HeaderPage from 'component/header'
import ContentDoiVePage from 'component/content/doiVeContent'

const DoivePageController = () => {
  return (

    <Layout className='DoivePage'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPage/>

        {/* content */}
        <ContentDoiVePage/>
      </Layout>
    </Layout>
  )
}

export default DoivePageController