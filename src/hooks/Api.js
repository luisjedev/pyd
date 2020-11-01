import { useState, useEffect} from 'react'

const Api = (API) =>{

const [ videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

useEffect(()=>{
    fetch(API)      //el llamado
        .then(response => response.json())          //transformar información en json
        .then(data => setVideos(data))              //mandar la información a mi estado
}, []);

    return videos // retornar estado
}

export default Api