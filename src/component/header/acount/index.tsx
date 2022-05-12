import React from 'react'
import { Anchor ,Avatar} from 'antd';
import './styles.scss'
const AcountNotify = () => {
 
  return (
      <div className="Acount">
        <Anchor>
            <img src={require('../../../assets/icon/icon_mail.png')}/>
        </Anchor>
        <Anchor>
            <img src={require('../../../assets/icon/notyfiAc.png')}/>
        </Anchor>

        <Avatar size={48} icon={  <img src={require('../../../assets/img/avatarAc.png')}/>} />
      </div>
  )
}

export default AcountNotify