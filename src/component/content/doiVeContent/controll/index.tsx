import React, { useState } from 'react'
import { Input, Button, Modal, DatePicker, Radio, Checkbox, Row, Col } from 'antd'

import './styles.scss'
import SearchControll from 'component/header/search'
import moment from 'moment'


const ControllDoiVe = () => {

    const onSearch = (value: string) => {
        console.log(value)
    }
    return (
        <div className="Content-control">
            {/* Từ khóa*/}
            <div className="Content-control-search">
                <SearchControll placeholder='Tìm bằng số vé' width={446} height={48} />
            </div>
            <div className="Content-control-GroupButton">
              
                <Button
                    type="primary">
                        Chốt đổi soát
                </Button>
            </div>

            
        </div>

    )
}

export default ControllDoiVe