import React from 'react'
import MenuSider from '../../component/menubar'
import { Layout } from 'antd'
import './styles.scss'
import HeaderPage from 'component/header'

const DoivePageController = () => {
  return (

    <Layout className='DoivePage'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPage/>

        {/* content */}
         <h1>Đổi vé</h1>
      </Layout>
    </Layout>
  )
}

export default DoivePageController