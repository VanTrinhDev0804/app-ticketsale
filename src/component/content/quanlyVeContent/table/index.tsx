import React from 'react'
import { Table } from 'antd';
import './styles.scss'
function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const TableDSVe = () => {
    const data: any = []
    for (var i = 0; i <= 200; i++) {
        data.push({
            stt: i,
            code: `ALT2021050${i}`,
            tenLoaive: "Vé cổng",
            soVe: randomIntFromInterval(100000, 900000),
            tenSK: "Hội chợ triển lãm tiêu dùng 2021",
            status: randomIntFromInterval(0, 2),
            dayUse: "14/04/2021",
            dayIn: "14/04/2021",
            checkin: "Cổng 1",
            statusDS: randomIntFromInterval(-1, 1),
        })
    }
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Booking code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Số vé',
            dataIndex: 'soVe',
            key: 'soVe',
        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'tenSK',
            key: 'tenSK',
        },

        {
            title: 'Trạng thái sử dụng',
            dataIndex: 'status',
            key: 'status',
            //  0 đã sử dụng
            // 1 chưa sử dung
            //  else hết hạn
            render: (checkSatus: number) => (
                <   >
                    {
                        checkSatus === 0 ?
                            <div key={checkSatus}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    width: '102px',
                                    height: '32px',
                                    padding: '8px',
                                    border: '1px solid #919DBA',
                                    borderRadius: '4px',
                                    backgroundColor: '#EAF1F8',
                                    color: ' #919DBA',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: ' 12px',
                                    lineHeight: '15px',
                                    cursor:'pointer'
                                }}
                            >
                                <img src={require('../../../../assets/icon/Ellipse0.png')} />
                                <span style={{ marginLeft: '8px' }}>
                                    Đã sử dụng
                                </span>
                            </div>
                            :
                            checkSatus === 1 ?
                                <div key={checkSatus}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        width: '124px',
                                        height: '32px',
                                        padding: '8px',
                                        border: '1px solid #919DBA',
                                        borderRadius: '4px',
                                        backgroundColor: '#EAF1F8',
                                        color: '#03AC00',
                                        fontFamily: 'Montserrat',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: ' 12px',
                                        lineHeight: '15px',
                                        cursor:'pointer'
                                    }}
                                >
                                    <img src={require('../../../../assets/icon/Ellipse1.png')} />
                                    <span style={{ marginLeft: '8px' }}>
                                        Chưa sử dụng
                                    </span>
                                </div>
                                :
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        width: '100px',
                                        height: '32px',
                                        padding: '8px',
                                        border: '1px solid #919DBA',
                                        borderRadius: '4px',
                                        backgroundColor: '#EAF1F8',
                                        color: '#FD5959',
                                        fontFamily: 'Montserrat',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: ' 12px',
                                        lineHeight: '15px',
                                        cursor:'pointer'
                                    }}
                                >
                                    <img src={require('../../../../assets/icon/Ellipse2.png')} />
                                    <span style={{ marginLeft: '8px' }}>
                                        Hết hạn
                                    </span>
                                </div>

                    }
                </>
            )
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'dayUse',
            key: 'dayUse'
        },
        {
            title: 'Ngày xuất vé',
            dataIndex: 'dayIn',
            key: 'dayIn'

        },

        {
            title: 'Cổng check - in',
            dataIndex: 'checkin',
            key: 'checkin'
        },
    ];

    return (
        <div className="Content-Table">

            <Table
                dataSource={data}
                columns={columns} />
        </div>
    )
}

export default TableDSVe
