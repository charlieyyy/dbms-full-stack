import React , { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Parameter from './Parameter';
import Location from './Location';
import Measure from './Measure';
import Metric from './Metric';
import Observation from './Observation';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);


  
  return (
    <div className={classes.root}>
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={() => setClicked(!clicked)}>Parameter Table</Button>
        <Button onClick={() => setClicked2(!clicked2)}>Location Table</Button>
        <Button onClick={() => setClicked3(!clicked3)}>Measure Table</Button>
        <Button onClick={() => setClicked4(!clicked4)}>Metric Table</Button>
        <Button onClick={() => setClicked5(!clicked5)}>Observation Table</Button>
    </ButtonGroup>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        {clicked ? <Parameter /> : null}
        {clicked2 ? <Location /> : null}
        {clicked3 ? <Measure /> : null}
        {clicked4 ? <Metric /> : null}
        {clicked5 ? <Observation /> : null}
      </Container>
    </React.Fragment>
    </div>
  );
}
