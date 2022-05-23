import React, { useState } from 'react'
import { Radio, DatePicker, Button, Space } from 'antd'
import './styles.scss'
import moment from 'moment'

const ControlRightDoiVe = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [status, setStatus] = useState(-1);
    const onChangeStatus = (e: any) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };

    return (
        <div className="ControlRightDoiVe">
            <h2>Lọc vé</h2>

            <div className="ControlRightDoiVe-Status">
                <h3>Tình trạng đổi soát</h3>
                <Radio.Group
                    defaultValue={-1}
                    onChange={onChangeStatus}
                    value={status}

                >
                    <Space direction='vertical'>
                        <Radio value={-1}>Tất cả</Radio>
                        <Radio value={1}>Đã đổi soát</Radio>
                        <Radio value={0}>Chưa đổi soát</Radio>
                    </Space>


                </Radio.Group>
            </div>
            <div className="ControlRightDoiVe-LoaiVe">
                <h3>Loại vé</h3>
                <p>Vé cổng</p>
            </div>

            <div className="ControlRightDoiVe-day">
                <div className="ControlRightDoiVe-dayfrom">
                    <p>Từ ngày</p>
                    <DatePicker
                        defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList}
                        suffixIcon={<img src={require('../../../../assets/icon/calendar.png')} />}
                        placeholder ="dd/mm/yyyy"
                    />

                </div>
                <div className="ControlRightDoiVe-dayto">
                    <p>Đến ngày</p>
                    <DatePicker
                        defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList}
                        suffixIcon={<img src={require('../../../../assets/icon/calendar.png')} />}
                        placeholder ="dd/mm/yyyy"
                    />
                </div>

            </div>
            <div className="ControlRightDoiVe-btn">
                <Button

                    type="primary"
                >
                    Lọc
                </Button>
            </div>
        </div>
    )
}

export default ControlRightDoiVe