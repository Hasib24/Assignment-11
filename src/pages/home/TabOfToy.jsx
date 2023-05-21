import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Atoy from '../alltoys/Atoy';
import TabToyCard from './TabToyCard';


const TabOfToy = () => {
    let [privateCar, setPrivateCar] = useState([])
    let [hikingCar, setHikingCar] = useState([])
    let [toyBusCar, setToyBusCar] = useState([])

    useEffect(()=>{
      fetch(`http://localhost:5000/alltoys/private-car`)
      .then(res =>res.json())
      .then(pCar => setPrivateCar(pCar))
      
      fetch(`http://localhost:5000/alltoys/hiking-car`)
      .then(res =>res.json())
      .then(data =>setHikingCar(data))

      fetch(`http://localhost:5000/alltoys/toy-bus`)
      .then(res =>res.json())
      .then(data =>setToyBusCar(data))



    },[])

    // useEffect(()=>{
    //   fetch(`http://localhost:5000/alltoys/hiking-car`)
    //   .then(data =>setHikingCar(data))
    // },[])

  

   

    
    return (
        <section className='container mx-auto my-14'>
            <h1 className='text-4xl font-bold text-center'>Shop by Category</h1>
            <Tabs>
              <TabList>
                <Tab>Hiking Car</Tab>
                <Tab>Privete Car</Tab>
                <Tab>Toy Bus</Tab>
              </TabList>

              <TabPanel>
                <div className="grid grid-cols-3">
                  {hikingCar.map(atoy =><TabToyCard atoy={atoy}></TabToyCard> )}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-3">
                  {privateCar.map(atoy =><TabToyCard atoy={atoy}></TabToyCard> )}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-3">
                  {toyBusCar.map(atoy =><TabToyCard atoy={atoy}></TabToyCard> )}
                </div>
              </TabPanel>
              
            </Tabs>
        </section>
    );
};

export default TabOfToy;