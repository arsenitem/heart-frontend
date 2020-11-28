import React from 'react'
import { Line } from 'react-chartjs-2'
const data = {
    labels: ['00', '01', '02', '03', '04', '05','06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24'],
    datasets: [
      {
        label: 'Пульс',
        data: [75, 80, 90, 65, 80, 65, 74,75,60, 70, 100, 110, 90, 80, 110, 123, 80, 67, 65, 78, 80, 110, 80, 90],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  
  const HeartRateChart = () => (
    <>
      <div className='header'>
        <h1 className='title'>Сердечный ритм</h1>
      </div>
      <Line data={data} options={options} />
    </>
  )
  
  export default HeartRateChart;