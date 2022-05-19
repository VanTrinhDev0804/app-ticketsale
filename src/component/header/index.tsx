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
      <SearchControll placeholder='Search' width={446} height={48}/>
      </div>
      <div className="headerAcount">
        <AcountNotify/>
      </div>
    </Header>
  )
}

export default HeaderPage