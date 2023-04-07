import React, { useState, useEffect } from 'react';
import axios from 'axios';

function duinoPrice(){
    const [price, setPrice] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';
  useEffect(() => {
    axios.get(API_BASE_URL)
  .then(response => {
    
    setPrice(response.data['Duco price'])
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
   {price}
  );
}

function allTimeMined(){
    const [price, setPrice] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';
  useEffect(() => {
    axios.get(API_BASE_URL)
  .then(response => {
   
    setPrice(response.data['All-time mined DUCO'])
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
   {price}
  );
}
function hasgRate(){
    const [price, setPrice] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';
  useEffect(() => {
    axios.get(API_BASE_URL)
  .then(response => {
    
    setPrice(response.data['DUCO-S1 hashrate'])
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
   {price}
  );
}
function netEnergyUsage(){
    const [price, setPrice] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';
  useEffect(() => {
    axios.get(API_BASE_URL)
  .then(response => {
    
    setPrice(response.data['Net energy usage'])
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
   {price}
  );
}
function serverCPU(){
    const [price, setPrice] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';
  useEffect(() => {
    axios.get(API_BASE_URL)
  .then(response => {
    
    setPrice(response.data['Server CPU usage'])
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
   {price}
  );
}
function serverRAM(){
    const [price, setPrice] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';
  useEffect(() => {
    axios.get(API_BASE_URL)
  .then(response => {
    
    setPrice(response.data['Server RAM usage'])
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
   {price}
  );
}
function serverVersion(){
    const [price, setPrice] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';
  useEffect(() => {
    axios.get(API_BASE_URL)
  .then(response => {
    
    setPrice(response.data['Server version'])
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
   {price}
  );
}