import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'
import './styles.scss'
import HeaderPage from 'component/header'

const CaidatPageController = () => {
  return (

    <Layout className='CaidatPage'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPage/>

        {/* content */}
        <h2> Cài đặt dịch vụ</h2>
      </Layout>
    </Layout>
  )
}

export default CaidatPageController