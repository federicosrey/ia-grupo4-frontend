import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getTarjetas } from '../controller/miApp.controller';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Comercio 1', 'Calle 1', 'www.comercio1.com.ar'),
  createData('Comercio 2', 'Avenida 1', 'www.comercio2.com.ar'),
  createData('Comercio 3', 'Calle 2', 'www.comercio3.com.ar'),
  createData('Comercio 4', 'Avenida 2', 'www.comercio4.com.ar'),
  createData('Comercio 5', 'Calle 3', 'www.comercio5.com.ar'),
];

export default function Tabla() {
  const classes = useStyles();
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    getAllTarjetas();
  },[]);

  const getAllTarjetas = async () => {
    let response  = await getTarjetas();
    setTarjetas(response.data);
    console.log(response.data);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Razón Social</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Sitio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
