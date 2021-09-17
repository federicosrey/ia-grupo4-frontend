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


export default function Tabla() {
  const classes = useStyles();
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    getAllTarjetas();            
  },[]);

  const getAllTarjetas = async () => {
    let response  = await getTarjetas();
    setTarjetas(response);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Descripción</TableCell>
            <TableCell align="right">Límite</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {tarjetas.map((t) => (
            <TableRow key={t.descripcion}>
              <TableCell component="th" scope="row">{t.descripcion}</TableCell>
              <TableCell align="right">{t.limite}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
