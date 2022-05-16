import React from 'react'
import ChartDoanhThu from './chartArea'
import DonutChartPackage from './donutChart'
import SelectDate from './selectdate'
import './styles.scss'
import TotalDoanhThuWeek from './totalweek'

const ContentHomePage = () => {
  return (
    <div className='Content'>
      <h2>Thống kê</h2>
      <div className="Content-DoanhThu">
        <div className="Content-DoanhThu_header">
          <p>Doanh Thu</p>
          <SelectDate />
        </div>

        <ChartDoanhThu />
        <TotalDoanhThuWeek/>
        <DonutChartPackage/>
      </div>
    </div>

  )
}

export default ContentHomePage