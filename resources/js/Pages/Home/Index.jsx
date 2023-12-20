import React from 'react';
import Layout from '../../Components/Layout/Layout';
import Map from "../../Components/Map/Map.jsx";
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';

const Index = ({ tracks }) => {
    return (
        <Layout>
               <div className='mb-2'>
                <SearchBar />
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden">
                <Map data={tracks}></Map>
            </div>
        </Layout>
    )
};

export default Index;
