import React from 'react'
import { Layout, Input } from 'antd';
import SearchControll from './search';
import './styles.scss'
import AcountNotify from './acount';

const { Header } = Layout;
const HeaderPage = () => {


  return (
    <Header>
      <div className="search">
        <SearchControll/>
      </div>
      <div className="headerAcount">
        <AcountNotify/>
      </div>
    </Header>
  )
}

export default HeaderPage