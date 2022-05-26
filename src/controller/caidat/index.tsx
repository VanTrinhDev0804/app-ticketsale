import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'
import './styles.scss'
import HeaderPage from 'component/header'
import ContentGoiDVPage from 'component/content/goidichvuContent'

const CaidatPageController = () => {
  return (

    <Layout className='CaidatPage'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPage/>

        {/* content */}
        <ContentGoiDVPage/>
      </Layout>
    </Layout>
  )
}

export default CaidatPageController