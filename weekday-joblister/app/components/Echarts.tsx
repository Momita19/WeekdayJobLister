import React from 'react'
import ReactECharts from 'echarts-for-react'; 
const option = {
    title: {
      text: 'Basic Bar Chart'
    },
    tooltip: {},
    xAxis: {
      data: ['Category A', 'Category B', 'Category C', 'Category D']
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [5, 20, 36, 10]
    }]
  };

const Echarts = () => {
    return <ReactECharts option={option} />;
}

export default Echarts