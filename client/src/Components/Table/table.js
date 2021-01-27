import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UploadService from '../../Service/uploadFile';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState([]);
  useEffect(() => {
    setValues(props.tableData);
  });

  const handleDelete = (id) => {
    //console.log(id);
    UploadService.deleteRow(id)
      .then((response) => {
        console.log(response);
        props.deletedInfo();
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>FullName</TableCell>
            <TableCell align='right'>Username</TableCell>
            <TableCell align='right'>Emil</TableCell>
            <TableCell align='right'>Birthdate</TableCell>
            <TableCell align='right'>ID</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.length > 1 ? (
            values.map((row) => (
              <TableRow key={row._id}>
                <TableCell align='right'>{row.FullName}</TableCell>
                <TableCell align='right'>{row.Username}</TableCell>
                <TableCell align='right'>{row.Emil}</TableCell>
                <TableCell align='right'>{row.Birthdate}</TableCell>
                <TableCell align='right'>{row._id}</TableCell>
                <TableCell align='right'>
                  <IconButton
                    aria-label='delete'
                    onClick={() => handleDelete(row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align='right'>{values.FullName}</TableCell>
              <TableCell align='right'>{values.Username}</TableCell>
              <TableCell align='right'>{values.Emil}</TableCell>
              <TableCell align='right'>{values.Birthdate}</TableCell>
              <TableCell align='right'>{values.password}</TableCell>
              <TableCell align='right'>
                <IconButton
                  aria-label='delete'
                  onClick={() => handleDelete(values._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
