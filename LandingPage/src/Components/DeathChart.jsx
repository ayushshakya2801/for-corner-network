import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DeathChart = () => {
  // Sample death data
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024' ,'2025', '2026', '2027', '2028', '2029', '2030','2031','2032'],
    datasets: [
      {
        label: 'Death Data',
        data: [3.5, 4.0, 4.5, 5.5, 6.89, 7.5, 8.0, 8.5, 9.5,10.5, 11.5, 12.5, 13.5, 62.86], // Replace this with actual death data
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'India Mental Health Market Size, 2019-2032(USD Billion)',
      },
    },
  };

  return (
    <div className="max-w-2xl   mx-auto  shadow-[#19575B] p-5 shadow-2xl rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DeathChart;  