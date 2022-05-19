import React from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './styles.scss'
import { Isearch } from 'types';
const { Search } = Input;

const SearchControll  : React.FC<Isearch>= ( props) => {
  const {placeholder, width, height} = props;
    const onSearch = (value: string) => console.log(value);
  return (
    <Search
    placeholder={placeholder}
    allowClear
    onSearch={onSearch}
    bordered={false}
    style={{ width: width, height:height }}
  />
  )
}

export default SearchControll