import React from 'react'
import { Layout, Menu } from 'antd';
import { Link, useHistory, useParams } from 'react-router-dom';
import { IParams } from '../../types';
import type { MenuProps } from 'antd';
import './styles.scss'

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Trang chủ', '/', <img src={require('../../assets/icon/ic_home.png')} />),
    getItem(' Quản lý vé', '/quanlyve', <img src={require('../../assets/icon/ic_qlyDoiVe.png')} />),
    getItem(' Đổi soát vé', '/doive', <img src={require('../../assets/icon/ic_doive.png')} />),
    getItem('Cài đặt', '/caidat', <img src={require('../../assets/icon/ic_CaiDat.png')} />, [
        getItem('Gói dịch vụ', '/caidat')]),


];
const MenuSider = () => {

    const { Sider } = Layout

    const history = useHistory()
    const { page }: IParams = useParams()

    const keydf = page === undefined ? "/" : `/${page}`

    const onClick: MenuProps['onClick'] = e => {
        history.push(e.key)
    };



    return (
        <Sider className='sider'>
            <div className='Menubar'>
                <div className="Menubar-Logo">
                    <Link to={'/'}>
                        <img src={require('../../assets/img/logoApp.png')} />
                    </Link>
                </div>
                <div>
                    <Menu
                        defaultSelectedKeys={[keydf]}
                        defaultOpenKeys={['/caidat']}
                        mode="inline"
                        items={items}
                        onClick={onClick}
                    />

                </div>
                <div className='symbol_alta'>
                    <p>
                        Copyright &#169; 2020 Alta Software
                    </p>

                </div>
            </div>

        </Sider>
    )
}

export default MenuSider