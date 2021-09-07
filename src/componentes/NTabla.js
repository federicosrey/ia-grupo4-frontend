import React from 'react';
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

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '30/08/2021', 'Elvis Presley', 'Santander', '•••• •••• •••• 3719', 312.44),
  createData(1, '31/08/2021', 'Paul McCartney', 'BBVA', '•••• •••• •••• 2574', 866.99),
  createData(2, '31/08/2021', 'Tom Scholz', 'Galicia', '•••• •••• •••• 1253', 100.81),
  createData(3, '01/08/2021', 'Michael Jackson', 'BBVA', '•••• •••• •••• 2000', 654.39),
  createData(4, '02/09/2021', 'Bruce Springsteen', 'ICBC', '•••• •••• •••• 5919', 212.79),
];

export default function Tabla() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Titular</TableCell>
            <TableCell>Banco</TableCell>
            <TableCell>Número</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
