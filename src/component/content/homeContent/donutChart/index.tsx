import React from 'react'
import { Pie } from '@ant-design/plots';
import './styles.scss'
import SelectDate from '../selectdate';




const DonutChartPackage = () => {

  console.log({});
  const dataGD = [
    {
      type: "Vé đã sử dụng",
      value: 13568,

    },
    {
      type: "Vé chưa sử dụng",
      value: 56024,
    },

  ];
  const dataSK = [
    {
      type: "Vé đã sử dụng",
      value: 28302,

    },
    {
      type: "Vé chưa sử dụng",
      value: 30256,
    },

  ];
  const configGD = {
    data: dataGD,
    width: 346,
    height: 246,
    angleField: 'value',
    colorField: 'type',
    color: ['#4F75FF', '#FF8A48'],
    radius: 1,
    innerRadius: 0.6,

    label: {
      type: 'outer',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    legend: false,
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
  };
  const configSK = {

    data: dataSK,
    width: 346,
    height: 246,
    angleField: 'value',
    colorField: 'type',
    color: ['#4F75FF', '#FF8A48'],
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    
    label: {
      type: 'outer',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    
    statistic: {
      title: false ,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
         
        },
        content: '',
      },
    },
  };
  return (
    <div className='Content-DoanhThu_ChartPackage'>
      <div className="Content-DoanhThu_ChartPackage-selectdate">
          <SelectDate/>
      </div>
      
      <div className="Content-DoanhThu_ChartPackage-GD">
        <h3> Gói Gia Đình</h3>
        <Pie {...configGD} />
      </div>
      <div className="Content-DoanhThu_ChartPackage-SK">
        <h3> Gói Sự kiện</h3>
        <Pie {...configSK}/>
      </div>
      <div className="Content-DoanhThu_ChartPackage-legend">
          <div className="Content-DoanhThu_ChartPackage-legend_item">
              <p>Vé đã sử dụng</p>
          </div>
          <div className="Content-DoanhThu_ChartPackage-legend_item2">
              <p>Vé chưa sử dụng</p>
          </div>
      </div>
    </div>
  )
}

export default DonutChartPackage