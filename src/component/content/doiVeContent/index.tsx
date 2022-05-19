import React from 'react'
import ControllQuanLyVe from './controll'
import TableDSVe from './table'
import './styles.scss'


const ContentDoiVePage = () => {
  return (
    <div className="PageDoive">
   <div className='Content'>
      <h2>Đổi soát  vé</h2>
     <ControllQuanLyVe/>
     <TableDSVe/>
    </div>
    <div className="SiderRight-DoiVe">

    </div>
    </div>
 

  )
}

export default ContentDoiVePage