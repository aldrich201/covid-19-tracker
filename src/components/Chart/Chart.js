import React, {useState, useEffect} from 'react'
import {fetchDaily} from '../api'
import  {Line, Doughnut} from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setDailyData(await fetchDaily());
        }


        fetch();

    }, [])

    //line chart for global because only global has daily data
    const lineChart = (
        dailyData.length ?
        <Line 
            data= {{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor:'#0A2472',
                    pointRadius:"1",
                    pointHoverBorderColor:"rgba(0,0,0)",
                    pointHoverBackgroundColor:"rgb(255,255,255)",
                    pointHoverRadius: "6",
                    fill:true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor:'rgba(255, 0,0 ,0.5)',
                    pointHoverBorderColor:"rgba(0,0,0)",
                    pointRadius:"1",
                    pointHoverBackgroundColor:"rgb(255,255,255)",
                    pointHoverRadius: "6",
                    fill:true
                }]
            }}
        /> : null
    )

    const doughnut = (
        confirmed ?
        (
            <Doughnut
                data={{
                    labels: [`Infected`, `Recovered`, `Deaths`],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                        borderColor: "white",
                        hoverBorderColor: "#00072D",
                        hoverBorderWidth:"5",  
                        borderWidth: 1.3,
                        data:[confirmed.value, recovered.value, deaths.value],
                        
                    }]

                }}
                options = {{
                    legend: {display: true},
                    title: {display: true, text: `Current COVID-19 situation in ${country}`},
                    animation: {
                        animateScale: true
                    }
                }}
            />
        )
        : null
    )
    return (
        <div className={styles.container}>
            {country ? doughnut: lineChart}
        </div>
    )
}

export default Chart
