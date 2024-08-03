import React from 'react'
import {Line, Doughnut} from 'react-chartjs-2'
import {CategoryScale, Chart as ChartJS, Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend, plugins, scales} from 'chart.js'
import { getLast7Days } from '../../lib/featues';

ChartJS.register(CategoryScale, Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend);

const labels = getLast7Days();

const lineChartOptions = {
    responsive: true,
    plugins:{
        legend:{
            display: false,
        },
        title:{
            display: false,
        },
    },
    scales: {
        x: {
            grid:{
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid:{
                display: false,
            },
        }
    }
}

const LineChart = ({value = []}) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Revenue",
                fill: true,
                backgroundColor: "rgba(75, 192, 192, 0.3)",
                borderColor: "rgba(75,192,192,1)",
            },
         /*   {
                data: [11,3,1,30,14,9,10,17,27],
                label: "Revenue 2",
                fill: true,
                backgroundColor: "rgba(175, 112, 192, 0.5)",
                borderColor: "rgba(75,92,92,1)",
            },
          */  
        ] 
    };
  return <Line data = {data} options={lineChartOptions}/>  
}

const doughnutChartOptions = {
    responsive: true,
    plugins:{
        legend:{
            display: false,
        },
    },
    cutout: 120
}

const DoughnutChart = ({value = [], labels = []}) => {
  const data={
    labels,
    datasets: [
        {
            data: value,
            backgroundColor: ["rgba(255, 201, 0, 0.8)", "rgba(138, 170, 238, 0.8)"],
            borderColor: ["rgba(255, 201, 0, 1)", "rgba(138, 170, 238, 1)"],
            offset: 10,
        },
    ] 
};
  return <Doughnut style={{zIndex: 10}} data={data} options={doughnutChartOptions}/> 
}

export {LineChart, DoughnutChart}
