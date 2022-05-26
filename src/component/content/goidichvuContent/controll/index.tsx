import React, { useState } from 'react'
import { Input, Button, Modal, DatePicker, Radio, Checkbox, Row, Col } from 'antd'

import SearchControll from 'component/header/search'
import moment from 'moment'
import ModalThemGoiVe from '../modal/modalThemGoi'
import './styles.scss'



const ControllGoiVe = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const { Search } = Input

    const dfcheckList: string[] = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5']
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
    const showThemGoiVe = () => {
        setIsModalVisible(true)
    }

    const onChangeCheckin = (checkedValues: any) => {
        let checkAction = checkedValues.includes("All")
        setCheckAll(checkAction)

        if (checkAction) {
            setCheckedList(dfcheckList)
        }
        else {
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
                <div className="Content-control-GroupButton-savefile">
                    <Button

                        type="primary"
                    >
                        Xuất file (.csv)
                    </Button>
                </div>

                <div className="Content-control-GroupButton-them">
                    <Button
                        onClick={showThemGoiVe}
                        type="primary">
                        Thêm gói vé
                    </Button>
                </div>

            </div>

            <Modal  
                className='modalGoiVe'
                visible={isModalVisible}
                onCancel={handelCancel}
                footer={null}
            >
                <ModalThemGoiVe />
            </Modal>
        </div>

    )
}

export default ControllGoiVe