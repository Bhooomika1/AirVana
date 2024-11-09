import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ airConcentrationData }) => {
  // Define the data for the Pie chart
  const data = {
    labels: ['CO2', 'PM2.5', 'PM10', 'O3', 'NO2', 'SO2'], // Pollutant labels
    datasets: [
      {
        label: 'Air Concentration (µg/m³)',
        data: airConcentrationData, // Use the data passed as props
        backgroundColor: [
          '#FF6384', // Color for CO2
          '#36A2EB', // Color for PM2.5
          '#FFCE56', // Color for PM10
          '#4BC0C0', // Color for O3
          '#9966FF', // Color for NO2
          '#FF9F40', // Color for SO2
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
