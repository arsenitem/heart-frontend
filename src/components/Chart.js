import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
  datasets: [
    {
      label: 'Кол-во ударов',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 70, 60]
    }
  ]
};

export default class Chart extends React.Component{
  render() {
    return (
      <div>
        <h2>Средняя ЧСС</h2>
        <Bar
          data={data}
          width={800}
          height={400}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
};