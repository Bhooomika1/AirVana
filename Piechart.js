import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data, width, height }) {
  return (
    <div className="chart-section">
      <Pie data={data} width={width} height={height} />
    </div>
  );
}

export default PieChart;
