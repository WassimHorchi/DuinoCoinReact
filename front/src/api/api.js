import { useState, useEffect } from 'react';
import axios from 'axios';

function useDuinoPrice(){
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

    return price;
}

function useAllTimeMined(){
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

    return mined;
}

function useHashRate(){
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

    return hashRate;
}

function useNetEnergyUsage(){
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

    return energy;
}

function useServerCPU(){
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

    return cpu;
}

function useServerRAM(){
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

    return ram;
}

function useServerVersion(){
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

    return version;
}

export {
    useDuinoPrice,
    useAllTimeMined,
    useHashRate,
    useNetEnergyUsage,
    useServerCPU,
    useServerRAM,
    useServerVersion
};
