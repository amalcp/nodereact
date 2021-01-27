// import logo from './logo.svg';
import React from 'react';
import './App.css';
import SearchAppBar from './Components/Header/header';
import BasicTextFields from './Components/Form/form';
import BasicTable from './Components/Table/table';
import UploadService from './Service/uploadFile';

class App extends React.Component {
  state = { value: [] };
  componentDidMount() {
    this.gettabledata();
  }
  gettabledata = () => {
    UploadService.getTableContents()
      .then((response) => {
        this.setState({ value: response.data });
      })
      .catch(() => {
        console.log('error');
      });
  };
  deletedOne = () => {
    this.gettabledata();
    console.log('deleted');
  };

  render() {
    return (
      <div className='App'>
        <SearchAppBar />
        <BasicTextFields deletedInfo={this.deletedOne} />
        <BasicTable
          tableData={this.state.value}
          deletedInfo={this.deletedOne}
        />
      </div>
    );
  }
}

export default App;
