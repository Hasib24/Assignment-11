import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const TabOfToy = () => {
    return (
        <section className='container mx-auto my-14'>
            <h1 className='text-4xl font-bold text-center'>Shop by Category</h1>
            <Tabs>
              <TabList>
                <Tab>Mario</Tab>
                <Tab>Luigi</Tab>
                <Tab>Peach</Tab>
              </TabList>

              <TabPanel>
                <p>
                  game franchise, owned by Nintendo and created by Japanese video game designer
                  Shige
                </p>
              </TabPanel>

              <TabPanel>
                <p>Itali second</p>
              </TabPanel>

              <TabPanel>
                <p>Peach ihe is the main playable character.</p>
              </TabPanel>
              
            </Tabs>
        </section>
    );
};

export default TabOfToy;