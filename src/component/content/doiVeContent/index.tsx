import React from 'react'
import './styles.scss'
import ControlRightDoiVe from './siderdoivecontrol'
import ControllDoiVe from './controll'
import TableDSDoiVe from './table'



const ContentDoiVePage = () => {
  return (
    <div className="PageDoive">
      <div className='Content'>
        <h2>Đổi soát  vé</h2>
        <ControllDoiVe />
        <TableDSDoiVe/>
      </div>
      <div className="SiderRight-DoiVe">
        <ControlRightDoiVe />
      </div>
    </div>


  )
}

export default ContentDoiVePage