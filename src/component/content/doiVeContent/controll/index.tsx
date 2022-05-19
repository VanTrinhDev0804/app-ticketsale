import React, { useState } from 'react'
import { Input, Button, Modal, DatePicker, Radio, Checkbox, Row, Col } from 'antd'

import './styles.scss'
import SearchControll from 'component/header/search'
import moment from 'moment'


const ControllQuanLyVe = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const { Search } = Input

    const dfcheckList : string [] = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5']
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [status, setStatus] = useState(-1);
    const [checkedList, setCheckedList] = useState(dfcheckList);
    const [checkAll, setCheckAll] = useState(true);

    const onChangeStatus = (e: any) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };
    const handelCancel = () => {
        setIsModalVisible(false)

    }
    const handleShowLocVe = () => {
        setIsModalVisible(true)
    }

    const onChangeCheckin = (checkedValues: any) => {
        let checkAction = checkedValues.includes("All")  
        setCheckAll(checkAction) 

        if(checkAction){
            setCheckedList(dfcheckList)
        }
        else{
            setCheckedList(checkedValues)
            // setCheckAll(checkedValues)
        }

    };





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
                    onClick={handleShowLocVe}
                    type="primary"
                    icon={<img src={require('../../../../assets/icon/filter.png')} />}
                >
                    Lọc vé
                </Button>
                <Button
                    type="primary">
                    Xuất file (.csv)
                </Button>
            </div>

            <Modal
                title=""
                visible={isModalVisible}
                onCancel={handelCancel}
                footer={null}
            >
                <div className="modelLocVe">
                    <h2>Lọc vé</h2>
                    <div className="modelLocVe-day">
                        <div className="modelLocVe-dayfrom">
                            <p>Từ ngày</p>
                            <DatePicker  
            defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} 
                            suffixIcon={<img src={require('../../../../assets/icon/calendar.png')}/>}
                            />
                        </div>
                        <div className="modelLocVe-dayto">
                            <p>Đến ngày</p>
                            <DatePicker 
               defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} 
                                suffixIcon={<img src={require('../../../../assets/icon/calendar.png')}/>}
                            />
                        </div>
                    </div>


                    <div className="modelLocVe-Status">
                        <h3>Tình trạng sử dụng</h3>
                        <Radio.Group 
                        defaultValue={-1}
                        onChange={onChangeStatus} 
                        value={status}
                        
                        >
                            <Radio value={-1}>Tất cả</Radio>
                            <Radio value={0}>Đã sử dụng</Radio>
                            <Radio value={1}>Chưa sử dụng</Radio>
                            <Radio value={2}>Hết hạn</Radio>
                        </Radio.Group>
                    </div>

                    <div className="modelLocVe-Checkin">
                        <h3>Cổng Check - in</h3>
                        <Checkbox.Group
                            style={{ width: '100%' }}
                            onChange={onChangeCheckin}
                            defaultValue ={['All']}
                            value={checkAll ? ["All"] :checkedList } 
                            >

                            <Row>
                                <Col span={8}>
                                    <Checkbox
                                    value="All"
                                    >Tất cả</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Cổng 1">Cổng 1</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Cổng 2">Cổng 2</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Cổng 3">Cổng 3</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Cổng 4">Cổng 4</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Cổng 5">Cổng 5</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>


                    </div>
                    <div className="modelLocVe-btn">
                        <Button

                            type="primary"
                        >
                            Lọc
                        </Button>
                    </div>

                </div>
            </Modal>
        </div>

    )
}

export default ControllQuanLyVe