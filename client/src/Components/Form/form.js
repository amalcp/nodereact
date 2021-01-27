import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import UploadService from '../../Service/uploadFile';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    FullName: '',
    Username: '',
    password: '',
    Emil: '',
    Birthdate: Date(),
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Name ${JSON.stringify(values)}`);
    UploadService.getFileContents(values)
      .then((response) => {
        console.log(response);
        props.deletedInfo();
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <TextField
        id='standard-basic'
        label='Username'
        variant='outlined'
        value={values.Username}
        onChange={handleChange('Username')}
      />
      <TextField
        id='filled-basic'
        label='Full Name'
        variant='outlined'
        value={values.FullName}
        onChange={handleChange('FullName')}
      />
      <TextField
        id='standard-basic'
        label='Email'
        variant='outlined'
        value={values.Emil}
        onChange={handleChange('Emil')}
      />
      <TextField
        id="date"
        label="Birthdate"
        type="date"
        defaultValue={values.Birthdate}
        onChange={handleChange('Birthdate')}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <input type='submit' value='Submit' />
    </form>
  );
}
