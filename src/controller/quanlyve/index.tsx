import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'
import './styles.scss'
import HeaderPage from 'component/header'

const QLVePageController = () => {
  return (

    <Layout className='QLvePage'>
      <MenuSider />
      <Layout> 
        {/* Header */}
        <HeaderPage/>

        {/* content */}
        <h1>Quản lý vé</h1>
       </Layout>
    </Layout>
  )
}

export default QLVePageController