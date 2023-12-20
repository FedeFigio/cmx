import React from 'react'
import Layout from '../../Components/Layout/Layout'
import SearchBar from '../../Components/SearchBar/SearchBar'

const Index = ({ tracks }) => {
    const renderTracks = () => {
        return tracks?.map((track) => {
            return (
                <a key={track.id} href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{track.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
            )
        })
    }

    return (
        <Layout>
            <div className='mb-2'>
                <SearchBar />
            </div>
            {tracks && !!tracks.length &&
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {renderTracks()}
                </div>
            }

            {!!tracks && !tracks.length && <p className='text-center mt-4'>Nessun tracciato trovato</p>}
            {tracks == null && <p className='text-center mt-4'>Digita per cercare</p>}
        </Layout>
    )
}

export default Index
