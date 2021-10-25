import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Grid from '@material-ui/core/Grid';
//import DialogoPago from './DialogoPago';
import DialogoPago from './DialogoPago';
import { getInfoUsuario } from '../controller/miApp.controller';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  bot: {
    flexGrow: 1,
  },
});


function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '02/09/2021', customerId: 'Comercio 1', amount: 3200},
      { date: '31/08/2021', customerId: 'Comercio 2', amount: 5400 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="right">{row.lastname}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.cuilcuit}</TableCell>
        <TableCell align="right">{row.root}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Tarjetas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Número</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.tarjetas.map((ut) => (
                    <TableRow key={ut._id}>
                      <TableCell component="th" scope="row">{ut.descripcion}</TableCell>
                      <TableCell>{ut.numero}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>               
              </Table>
               
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('BBVA', '•••• •••• •••• 2719', 75000, 38000,'28/09/2021', '05/10/2021'),
  createData('Santander', '•••• •••• •••• 2618', 35000, 12000,'27/09/2021', '06/10/2021'),
];

export default function TablaColapsableUser() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getAllUsuarios();     
  },[]);   

  const getAllUsuarios = async () =>{
    let response = await getInfoUsuario(localStorage.getItem("cuilcuit"));
    console.log(response.docs);
    setUsuarios(response.docs);
  }


  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">e-Mail</TableCell>
            <TableCell align="right">cuilcuit</TableCell>
            <TableCell align="right">Tipo Usuario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((u) => (
            <Row key={u._id} row={u} />
          ))}
          
        </TableBody>
        
      </Table>
    </TableContainer>
  );
}
