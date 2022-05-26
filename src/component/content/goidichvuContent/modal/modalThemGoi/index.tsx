import React, { useState } from 'react'
import { DatePicker, Button, Input, TimePicker, Checkbox, Select } from 'antd';
import moment from 'moment';
import './styles.scss'


const ModalThemGoiVe = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const format = 'HH:mm:ss';
    const { Option } = Select;
    const [focusSimple, setFocusSimple] = useState(false)
    const [focusCombo, setFocusCombo] = useState(false)
    return (
        <div className="modelThemgoive">
            <h2>Thêm gói vé</h2>
            <div className="modelThemgoive-main">
                <div className="modelThemgoive-main-Name">

                    <h3>Tên gói vé <span className='role'>*</span></h3>
                    <Input 
                    width={367}
                    placeholder="Nhập tên gói vé" />
                </div>
                <div className="modelThemgoive-main-Day">
                    <div className="modelThemgoive-main-Day_Used">
                        <h3>
                            Ngày áp dụng
                        </h3>
                        <div className="modelThemgoive-Day_Used-select">
                            <DatePicker
                                placeholder='dd/mm/yy'
                                suffixIcon={<img src={require('../../../../../assets/icon/calendar.png')} />}
                            />
                            <TimePicker
                                suffixIcon={<img src={require('../../../../../assets/icon/clock.png')} />}
                                placeholder="hh/mm/ss"
                            />
                        </div>

                    </div>
                    <div className="modelThemgoive-main-Day-EXP">
                        <h3>
                            Ngày hết hạn
                        </h3>
                        <div className="modelThemgoive-Day_Used-select">
                            <DatePicker
                                placeholder='dd/mm/yy'
                                suffixIcon={<img src={require('../../../../../assets/icon/calendar.png')} />}
                            />
                            <TimePicker
                                suffixIcon={<img src={require('../../../../../assets/icon/clock.png')} />}
                                placeholder='hh/mm/ss'
                            />
                        </div>

                    </div>
                </div>
                <div className="modelThemgoive-main-Price">
                    <div className="modelThemgoive-main-Price_simple">
                        <Checkbox
                            checked={focusSimple}
                        >
                            Vé lẻ (vnđ/vé) với giá
                            <Input
                                placeholder='Giá vé'
                              
                            />
                            / vé
                        </Checkbox>
                    </div>
                    <div className="modelThemgoive-main-Price_combo">
                        <Checkbox
                            checked={focusCombo}
                        >
                            Combo vé với giá
                            <Input
                                placeholder='Giá combo'
                             
                            />
                            /
                            <Input
                                placeholder='Giá vé'
                             
                            />
                            vé
                        </Checkbox>
                    </div>
                </div>
                <div className="modelThemgoive-main-Status">
                    <h3>Tình trạng</h3>
                    <Select defaultValue={1}
                    bordered ={false}
                    style={{ width: 176 }}
                    // onChange={handleChange}
                    >
                        <Option value={0}>Đang áp dụng</Option>
                        <Option value={1}>Tắt</Option>
                    </Select>
                </div>
            </div>


            <div className="modelThemgoive-btn">
                <div className="modelThemgoive-btn-Huy">
                    <Button
                        type="primary"
                    >
                        Hủy
                    </Button>
                </div>
                <div className="modelThemgoive-btn-Luu">
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

export default ModalThemGoiVe