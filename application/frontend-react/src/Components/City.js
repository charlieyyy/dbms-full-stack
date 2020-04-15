import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(five_year_PM_value, location) {
  return { five_year_PM_value, location };
}



export default function SimpleTable() {
  const classes = useStyles();
  const [rows, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const arr = []
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/demo/view")
      .then(res => res.text())
      .then(
        (result) => {
          setIsLoaded(true);

          
          var test = result.split(",");
          console.log(test)
          for (let step = 0; step < test.length; step+=2) {
            var s1 = test[step].replace(/[\[\]'"]+/g,'');
            var s2 = test[step+1].replace(/[\[\]'"]+/g,'');
                        // console.log(test[0]);
            const a = createData(s1,s2);
            arr.push(a)
          }
          setItems(arr);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>five_year_PM_value</TableCell>
            <TableCell align="right">location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.five_year_PM_value}>
              <TableCell component="th" scope="row">
                {row.five_year_PM_value}
              </TableCell>
              <TableCell align="right">{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
