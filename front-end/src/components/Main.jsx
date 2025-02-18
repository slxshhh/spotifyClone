import React from 'react'
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';


const Main = ( { type }) => {
  return (
    <div className = "main" >
        {/* Item lis dos Artistas */}
        {type === 'artists' || type === undefined ? (<ItemList title= 'Artistas' items = {10} itemsArray = {artistArray} path = '/artists' idPath = '/artist'/>) : (<></>)}
        

        {/* Item list das Músicas */}
        {type === 'songs' || type === undefined ? (<ItemList title= 'Músicas' items = {20} itemsArray = {songsArray} path = '/songs' idPath = '/song' />) : (<></>)}
        

    </div>
  );
}

export default Main