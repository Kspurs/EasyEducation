import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
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
      text: '选课情况统计',
    },
  },
};

const labels = ['必修课', '通识选修课', '专业选修课', '体育课'];

export const data = {
  labels,
  datasets: [
    {
      label: '选课情况',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: ['rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)']
    }
  ],
};
export function Piechart() {
  return <Pie options={options} data={data} />;
}
