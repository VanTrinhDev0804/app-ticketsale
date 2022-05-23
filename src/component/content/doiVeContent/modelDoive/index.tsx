import React from 'react'
import { DatePicker, Button } from 'antd';
import moment from 'moment';
import './styles.scss'


const ModelDoiVe = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return (
        <div className="modelDoiVe">
            <h2>Đổi ngày sử dụng vé</h2>
            <div className="modelDoiVe-main">
                <div className="modelDoiVe-main-item">
                    <h3>Số vé</h3>
                    <p>PKG20210502</p>
                </div>
                <div className="modelDoiVe-main-item">
                    <h3>Loại vé</h3>
                    <p>Vé cổng - Gói sự kiện</p>
                </div>
                <div className="modelDoiVe-main-item">
                    <h3>Tên sự kiện</h3>
                    <p>Hội trợ triển lãm hàng tiêu dùng 2021</p>
                </div>
                <div className="modelDoiVe-main-date">
                    <h3>Hạn sử dụng</h3>
                    <DatePicker
                        defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList}
                        suffixIcon={<img src={require('../../../../assets/icon/calendar.png')} />}
                    />
                </div>
            </div>

            <div className="modelDoiVe-btn">
                <div className="modelDoiVe-btn-Huy">
                    <Button
                        type="primary"
                    >
                        Hủy
                    </Button>
                </div>
                <div className="modelDoiVe-btn-Luu">
                    <Button

                        type="primary"
                    >
                        Lưu
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default ModelDoiVe