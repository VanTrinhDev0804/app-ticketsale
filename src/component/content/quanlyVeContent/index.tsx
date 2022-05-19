import React from 'react'
import ControllQuanLyVe from './controll'
import TableDSVe from './table'
import './styles.scss'


const ContentQLVePage = () => {
  return (
    <div className='Content'>
      <h2>Danh sách vé</h2>
     <ControllQuanLyVe/>
     <TableDSVe/>
    </div>

  )
}

export default ContentQLVePage