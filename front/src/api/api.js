import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getDuinoPrice(){
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

function getAllTimeMined(){
    const [mined, setMined] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';

    useEffect(() => {
        axios.get(API_BASE_URL)
            .then(response => {
                setMined(response.data['All-time mined DUCO'])
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        {mined}
    );
}

function getHashRate(){
    const [hashRate, setHashRate] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';

    useEffect(() => {
        axios.get(API_BASE_URL)
            .then(response => {
                setHashRate(response.data['DUCO-S1 hashrate'])
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        {hashRate}
    );
}

function getNetEnergyUsage(){
    const [energy, setEnergy] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';

    useEffect(() => {
        axios.get(API_BASE_URL)
            .then(response => {
                setEnergy(response.data['Net energy usage'])
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        {energy}
    );
}

function getServerCPU(){
    const [cpu, setCpu] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';

    useEffect(() => {
        axios.get(API_BASE_URL)
            .then(response => {
                setCpu(response.data['Server CPU usage'])
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        {cpu}
    );
}

function getServerRAM(){
    const [ram, setRam] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';

    useEffect(() => {
        axios.get(API_BASE_URL)
            .then(response => {
                setRam(response.data['Server RAM usage'])
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        {ram}
    );
}

function getServerVersion(){
    const [version, setVersion] = useState('');
    const API_BASE_URL = 'https://server.duinocoin.com/api.json';

    useEffect(() => {
        axios.get(API_BASE_URL)
            .then(response => {
                setVersion(response.data['Server version'])
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        {version}
    );
}

export {
    getDuinoPrice,
    getAllTimeMined,
    getHashRate,
    getNetEnergyUsage,
    getServerCPU,
    getServerRAM,
    getServerVersion
};
