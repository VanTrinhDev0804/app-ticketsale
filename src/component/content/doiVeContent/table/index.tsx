import React, { useState } from 'react'
import { Modal, Table } from 'antd';

import ModelDoiVe from '../modelDoive';


import './styles.scss'
function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const TableDSDoiVe = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
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
            title: 'Số vé',
            dataIndex: 'soVe',
            key: 'soVe',
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'dayUse',
            key: 'dayUse'
        },
        {
            title: 'Tên loại vé',
            dataIndex: 'tenLoaive',
            key: 'tenLoaive'
        },
        {
            title: 'Cổng check - in',
            dataIndex: 'checkin',
            key: 'checkin'
        },

        {
            title: 'Trạng thái sử dụng',
            dataIndex: 'statusDS',
            key: 'statusDS',
            //  -1 tất cả
            // 0 chưa đổi soát
            // 1 đã đổi soát
            render: (checkSatus: number) => (
                <   >
                    {
                        checkSatus === 0 ?
                            <div key={checkSatus}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    color: ' #A5A8B1',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'italic',
                                    fontWeight: '500',
                                    fontSize: ' 14px',
                                    lineHeight: '22px',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{ marginLeft: '8px' }}>
                                    Chưa đổi soát
                                </span>
                            </div>
                            :

                            <div key={checkSatus}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    color: '#FD5959',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'italic',
                                    fontWeight: '500',
                                    fontSize: ' 14px',
                                    lineHeight: '22px',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{ marginLeft: '8px' }}>
                                    Đã đổi soát
                                </span>
                            </div>



                    }
                </>
            )
        },

    ];
    const onHandleChange = (dataParams: any) => {
        setIsModalVisible(true)
    }


    const handelCancel = () => {
        setIsModalVisible(false)

    }
    return (
        <div className="Content-Table">

            <Table
                rowKey={data.stt}
                dataSource={data}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onDoubleClick: event => { onHandleChange(record) }, // click row
                    };
                }}

            />
            <Modal
                className='model'
                title=""
                visible={isModalVisible}
                onCancel={handelCancel}
                footer={null}

            >
                <ModelDoiVe />


            </Modal>
        </div>

    )
}

export default TableDSDoiVe
