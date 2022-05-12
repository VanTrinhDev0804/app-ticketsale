import React from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './styles.scss'
const { Search } = Input;

const SearchControll = () => {
    const onSearch = (value: string) => console.log(value);
  return (
    <Search
    // addonBefore="https://"
    placeholder="Search"
    allowClear
    onSearch={onSearch}
    bordered={false}
    style={{ width: 437, height:48 }}
  />
  )
}

export default SearchControll