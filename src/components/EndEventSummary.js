import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ALL_EVENTS } from '../data/events';

const EndEventSummary = (props) => (
    <Grid
        container
        justify="center"
        alignContent="center"
        style={{ height: '100%' }}
    >
        <Paper style={{ padding: 20 }} className="grid-aligned">
            <Typography variant="title" gutterBottom style={{ padding: 5 }}>
                Fim! Você acabou de passar pela simulação de um evento histórico:
            </Typography>

            <Typography variant="title">
                {ALL_EVENTS[props.event].name} de {ALL_EVENTS[props.event].year}
            </Typography>

            <Typography variant="subheading">
                {ALL_EVENTS[props.event].description}
            </Typography>

            <Grid item xs={12} style={{ marginTop: 10, textAlign: 'center' }}>
                <Button
                    type="button"
                    color="primary"
                    variant="raised"
                    onClick={props.close}
                >
                    Fechar
                </Button>
            </Grid>
        </Paper>
    </Grid>
);

export default EndEventSummary;
