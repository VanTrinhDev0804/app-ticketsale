import React from 'react'
import TableDSVe from './table'
import './styles.scss'
import ControllGoiVe from './controll'


const ContentGoiDVPage = () => {
  return (
    <div className='Content'>
      <h2>Danh sách vé</h2>
     <ControllGoiVe/>
     <TableDSVe/>
    </div>

  )
}

export default ContentGoiDVPage