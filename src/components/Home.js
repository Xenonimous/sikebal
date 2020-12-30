import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import GetPenduduk from './GetPenduduk';
import GetKasus from './GetKasus'
import Zona from './Zona'

const Home = () => {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                        <GetPenduduk />
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                        <GetKasus />
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                        <Zona />
                    </Typography>
                </Grid>
            </Grid>

        </div >
    )
}

export default Home