import React from 'react'
import Layout from '../../Components/Layout/Layout';
import Map from '../../Components/Map/Map';

const Show = ({ track }) => {
    console.log(track);
    return (
        <Layout>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{track.name}</h1>

            <div className="w-full h-64 rounded-lg overflow-hidden">

                <Map data={[track]} center={[track.latitude, track.longitude]} zoom={7} isDetail={true}></Map>
            </div>
        </Layout>
    )
}

export default Show
