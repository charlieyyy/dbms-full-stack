import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch'




function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'pullutant_measure_standard', numeric: false, disablePadding: false, label: 'pullutant_measure_standard' },
  { id: 'location', numeric: false, disablePadding: false, label: 'location' },
  { id: 'year', numeric: false, disablePadding: false, label: 'year' },
  { id: 'parameter_name', numeric: false, disablePadding: false, label: 'parameter_name' },
  { id: 'event_type', numeric: false, disablePadding: false, label: 'event_type' },
  { id: 'first_max_value', numeric: false, disablePadding: false, label: 'first_max_value' },
  { id: 'first_max_datetime', numeric: false, disablePadding: false, label: 'first_max_datetime' },
  { id: 'second_max_value', numeric: false, disablePadding: false, label: 'second_max_value' },
  { id: 'second_max_datetime', numeric: false, disablePadding: false, label: 'second_max_datetime' },
  { id: 'third_max_value', numeric: false, disablePadding: false, label: 'third_max_value' },
  { id: 'third_max_datetime', numeric: false, disablePadding: false, label: 'third_max_datetime' },
  { id: 'fourth_max_value', numeric: false, disablePadding: false, label: 'fourth_max_value' },
  { id: 'fourth_max_datetime', numeric: false, disablePadding: false, label: 'fourth_max_datetime' },
  { id: 'first_max_non_overlapping_value', numeric: false, disablePadding: false, label: 'first_max_non_overlapping_value' },
  { id: 'first_no_max_datetime', numeric: false, disablePadding: false, label: 'first_no_max_datetime' },
  { id: 'second_max_non_overlapping_value', numeric: false, disablePadding: false, label: 'second_max_non_overlapping_value' },
  { id: 'second_no_max_datetime', numeric: false, disablePadding: false, label: 'second_no_max_datetime' },
  { id: 'ninety_nine_percentile', numeric: false, disablePadding: false, label: 'ninety_nine_percentile' },
  { id: 'ninety_eight_percentile', numeric: false, disablePadding: false, label: 'ninety_eight_percentile' },
  { id: 'ninety_five_percentile', numeric: false, disablePadding: false, label: 'ninety_five_percentile' },
  { id: 'ninety_percentile', numeric: false, disablePadding: false, label: 'ninety_percentile' },
  { id: 'seventy_five_percentile', numeric: false, disablePadding: false, label: 'seventy_five_percentile' },
  { id: 'fifty_percentile', numeric: false, disablePadding: false, label: 'fifty_percentile' },
  { id: 'ten_percentile', numeric: false, disablePadding: false, label: 'ten_percentile' },
  { id: 'date_of_last_change', numeric: false, disablePadding: false, label: 'date_of_last_change' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rows, setItems] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/demo/observation")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="default">
                        {row.pullutant_measure_standard}
                      </TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.parameter_name}</TableCell>
                      <TableCell>{row.event_type}</TableCell>
                      <TableCell>{row.first_max_value}</TableCell>
                      <TableCell>{row.first_max_datetime}</TableCell>
                      <TableCell>{row.second_max_value}</TableCell>
                      <TableCell>{row.second_max_datetime}</TableCell>
                      <TableCell>{row.third_max_value}</TableCell>
                      <TableCell>{row.third_max_datetime}</TableCell>
                      <TableCell>{row.fourth_max_value}</TableCell>
                      <TableCell>{row.fourth_max_datetime}</TableCell>
                      <TableCell>{row.first_max_non_overlapping_value}</TableCell>
                      <TableCell>{row.first_no_max_datetime}</TableCell>
                      <TableCell>{row.second_max_non_overlapping_value}</TableCell>
                      <TableCell>{row.second_no_max_datetime}</TableCell>
                      <TableCell>{row.ninety_nine_percentile}</TableCell>
                      <TableCell>{row.ninety_eight_percentile}</TableCell>
                      <TableCell>{row.ninety_five_percentile}</TableCell>
                      <TableCell>{row.ninety_percentile}</TableCell>
                      <TableCell>{row.seventy_five_percentile}</TableCell>
                      <TableCell>{row.fifty_percentile}</TableCell>
                      <TableCell>{row.ten_percentile}</TableCell>
                      <TableCell>{row.date_of_last_change}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
