'use client';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const attendanceData = {
  labels: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
  datasets: [
    {
      label: 'Attendance %',
      data: [82, 88, 91, 85],
      backgroundColor: '#6366f1',
      hoverBackgroundColor: '#4f46e5',
      borderRadius: 12,
      borderSkipped: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Year-wise Attendance',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

export default function AttendanceChart() {
  return <Bar data={attendanceData} options={options} />;
}
