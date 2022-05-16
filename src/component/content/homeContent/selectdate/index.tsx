import React from 'react'
import { Select } from 'antd'
import { useHistory } from 'react-router-dom'
import './styles.scss'

const SelectDate = () => {


    const history = useHistory();
    const handleChange = (value: string) => {
        const path = `/dasboard/${value}`
        history.push(path)
    } 
    return (
        <div className='Content-DoanhThu_header-selectdate'>
           <div className="Content-DoanhThu_header-selectdate-value">
               <p className='value'>Tháng 4, 2022</p>
               <img src={require('../../../../assets/icon/calendar.png')}/>
           </div>
        </div>
    )
}

export default SelectDate