import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'

import '../../App.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        //make this as a spinner
        return 'Loading...'
    }
    return (
        <div className="card-container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card infected">
                    <CardContent>
                        <Typography color="inherit" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            ></CountUp>
                         </Typography>
                        <Typography color="inherit">{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of COVID-19 Active Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    <CardContent>
                        <Typography color="inherit" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            ></CountUp>
                         </Typography>
                        <Typography color="inherit">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of COVID-19 recoveries</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card death">
                    <CardContent>
                        <Typography color="inherit" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            ></CountUp>
                         </Typography>
                        <Typography color="inherit">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of COVID-19 casualties</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
