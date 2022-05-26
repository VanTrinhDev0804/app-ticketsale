import React from 'react'
import { Table } from 'antd';
import './styles.scss'
function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const TableGoiVe = () => {
    const data: any = []
    for (var i = 0; i <= 200; i++) {
        data.push({
            stt: i,
            code: `ALT2021050${i}`,
            tenGoi: "Gói gia đình",
            dayActive: "14/04/2021",
            gioActive: "08:00:00",
            EXPdate: "14/04/2021",
            EXPTime: "23:00:00",
            price: 90000,
            CbPrice: {
                idCombo:i,
                soLuong: 4,
                pricecb: 360000
            },
            status: randomIntFromInterval(0, 1),
            action: "Cập nhật"
        })
    }
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Mã gói',
            dataIndex: 'code',
            key: 'code',
        },

        {
            title: 'Tên gói',
            dataIndex: 'tenGoi',
            key: 'tenGoi',
        },
        // ngày áp dung
        {
            title: 'Ngày áp dụng',
            dataIndex: 'dayActive',
            key: 'dayActive',
            render : ( value: string , record : any)=>(
                <div key={value} className="day-item">
                    <p>{value}</p>
                    <p>{record.gioActive}</p>
                </div>
            )
        },
//  ngày hết hạn
        {
            title: 'Ngày hết hạn',
            dataIndex:  'EXPdate',
            key: 'EXPdate',
            render : ( value: string , record : any)=>(
                <div key={value} className='day-item'>
                    <p>{value}</p>
                    <p>{record.EXPTime}</p>
                </div>
            )
        },

        //  giá vé

        {
            title: 'Giá vé (VNĐ/Vé)',
            dataIndex: `price`,
            key: 'price',
            render : ( value: number)=>(
                <div key={value}>
                    <p>{`${value} VNĐ`}</p>
                </div>
            )
        },
         //  giá vé combo

         {
            title: 'Giá Combo (VNĐ/Combo)',
            dataIndex: "CbPrice",
            key: 'CbPrice',
            render : ( value: any)=>(
                <div key={value.idCombo}>
                    <p>{`${value.pricecb} VNĐ/${value.soLuong} Vé`}</p>
                </div>
            )
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            //  0  tắt
            // 1 đang áp dụng

            render: (checkSatus: number) => (
                <   >
                    {
                        checkSatus === 0 ?
                            <div key={checkSatus}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    width: '60px',
                                    height: '32px',
                                    padding: '8px',
                                    border: '1px solid #FD5959',
                                    borderRadius: '4px',
                                    backgroundColor: '#F8EBE8',
                                    color: '#FD5959',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: ' 12px',
                                    lineHeight: '15px',
                                    cursor: 'pointer'
                                }}
                            >
                                <img src={require('../../../../assets/icon/Ellipse2.png')} />
                                <span style={{ marginLeft: '8px' }}>
                                    Tắt
                                </span>
                            </div>
                            :

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
                                    backgroundColor: '#DEF7E0',
                                    color: '#03AC00',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: ' 12px',
                                    lineHeight: '15px',
                                    cursor: 'pointer'
                                }}
                            >
                                <img src={require('../../../../assets/icon/Ellipse1.png')} />
                                <span style={{ marginLeft: '8px' }}>
                                    Đang áp dụng
                                </span>
                            </div>



                    }
                </>
            )
        },
        {
            title: "",
            dataIndex: 'action',
            key: 'action',
            render :( value : string)=>(
                <div className='Actions_Update'
                    onClick={handleCapNhat}
                >
                    <img src={require("../../../../assets/icon/edit.png")}/>
                    <span>Cập nhật</span>
                </div>
            )
        },
    ];

    const handleCapNhat =()=>{
        console.log(123)
    }   
    return (
        <div className="Content-Table tableGoiVe">

            <Table
                dataSource={data}
                columns={columns} />
        </div>
    )
}

export default TableGoiVe
