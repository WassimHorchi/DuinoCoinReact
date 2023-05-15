import React ,{useEffect, useState} from 'react';
import {useDuinoPrice,useAllTimeMined,useHashRate,useNetEnergyUsage,useServerCPU,useServerRAM,useServerVersion} from "../api/api";
import { IoMdAnalytics } from 'react-icons/io';
import { FaDollarSign,FaCoins,FaTachometerAlt,FaBolt , FaMicrochip, FaMemory, FaInfoCircle} from 'react-icons/fa';

function Home()
{
    const price = useDuinoPrice();
    const mined = useAllTimeMined();
    const hash = useHashRate();
    const energy = useNetEnergyUsage();
    const cpu = useServerCPU();
    const ram = useServerRAM();
    const version = useServerVersion();
    const myMine = localStorage.getItem("mining")
    const username = localStorage.getItem("username")
    const [mine, setMine] = useState(myMine)
    const usersApi = "https://server.duinocoin.com/balances.json"
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch the API data here
          const response = await fetch(usersApi);
          const data = await response.json();
          
          setMine(data[username])
          
          // Process the fetched data
  
        } catch (error) {
          console.log(error.message)
        }
      };
      const intervalId = setInterval(fetchData, 3000); // Fetch data every 10 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
    }, []);
    console.log(mine)
    return(
        <>
            <div class="limiter">
                <div className='container-login100' style={{display : "block"}}>
                    <div>
                        <h2 className='text text-white'>Welcome, <span className='font-bold'>{username}</span></h2>
                    </div>
                <div class="flex flex-wrap -mx-3 mb-6 ">
          
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Your Mining Amount</p>
                      <h5 class="mb-0 font-bold">
                       {mine}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                      <i class="text-lg flex items-center h-full justify-center text-white "><IoMdAnalytics /></i>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Duino Price (USD)</p>
                      <h5 class="mb-0 font-bold">
                        {price}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i class="text-lg flex items-center h-full justify-center text-white "><FaDollarSign /></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">All Time Mined</p>
                      <h5 class="mb-0 font-bold">
                        {mined}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i class="text-lg flex items-center h-full justify-center text-white "><FaCoins /></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Hash Rate</p>
                      <h5 class="mb-0 font-bold">
                        {hash}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i class="text-lg flex items-center h-full justify-center text-white "><FaTachometerAlt  /></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                <div class="flex flex-wrap -mx-3">
          
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Net Energy Usage</p>
                      <h5 class="mb-0 font-bold">
                        {energy}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i class="text-lg flex items-center h-full justify-center text-white "><FaBolt   /></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Server CPU</p>
                      <h5 class="mb-0 font-bold">
                        {cpu}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i class="text-lg flex items-center h-full justify-center text-white "><FaMicrochip /></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Server RAM</p>
                      <h5 class="mb-0 font-bold">
                        {ram}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i class="text-lg flex items-center h-full justify-center text-white "><FaMemory  /></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Server Version</p>
                      <h5 class="mb-0 font-bold">
                        {version}
                      </h5>
                    </div>
                  </div>
                  <div class="px-3 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i class="text-lg flex items-center h-full justify-center text-white "><FaInfoCircle  /></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                </div>
                
            </div>
        </>
        
    )
}
export default Home;