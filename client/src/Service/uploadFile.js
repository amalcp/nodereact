const getFileContents = (values) => {
  // return axios.post('/factiva/getReport', values);
  return fetch('http://backend:5000/factiva/getReport', {method: 'POST', body: values});
};

const getTableContents = () => {
  // return axios.get('/factiva/getTablecontent');
  return fetch('http://backend:5000/factiva/getTablecontent', {method: 'GET'});
};

const deleteRow = (id) => {
  let data = { id: id };
  // return axios.post('/factiva/deleteRow', data);
  return fetch('http://backend:5000/factiva/deleteRow', {method: 'POST', body: data});
};

export default {
  getFileContents,
  getTableContents,
  deleteRow,
};
