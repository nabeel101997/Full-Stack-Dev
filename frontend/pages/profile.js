import React from 'react';
import { useQuery } from 'react-query';
import Dashboard from '../components/pages/Dashboard';

function Dashboarda() {

  const getRecords = async () => {
    const token = localStorage.getItem('accessToken');
    var headers = {
      'Content-type': 'application/json',
      'token': 'Bearer ' + token
    }
    const response = await fetch('http://localhost:8080/users', {
      method: 'GET',
      headers: headers
    });
    const data = await response.json();
    console.log("Got Data", data);
    return data;
  }

  const { data, status } = useQuery('records', getRecords)
  console.log("data", data);
  console.log("status", status)

  return (
    <>
      <Dashboard records={data?.data} />
    </>
  )
}

export default Dashboarda;