import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Сахарный диабет', 'Артериальная Гипертензия', 'Гипотония', 'ОНМК', 'Сердечная недостаточность', 'Стенокардия, ибс', 'Прочее'],
  datasets: [
    {
      label: 'Вероятность(%)',
      backgroundColor: 'rgba(38, 118, 255,0.2)',
      borderColor: 'rgba(38, 118, 255,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [3, 15, 10, 4, 1, 2, 5]
    }
  ]
};

let PrognozChart =  class Chart extends React.Component{
  render() {
    return (
      <div>
        <h2>Вероятность развития болезней (На основе данных анкеты)</h2>
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
export default PrognozChart;