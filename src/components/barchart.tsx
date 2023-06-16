import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '上课次数统计',
    },
  },
};

const labels = ['高等数学', '线性代数', '大学英语'];

export const data = {
  labels,
  datasets: [
    {
      label: '上课次数',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'rgba(177, 188, 132, 0.5)',
    }
  ],
};
export function Barchart() {
  return <Bar options={options} data={data} />;
}
