import { useEffect, useState } from "react"
import Grid from "./Grid";

function Container () {

    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('https://dragonball-api.com/api/characters')
        .then(response => response.json())
        .then((data) => setData(data.items))
        .catch(error => console.error("ERROR:", error))
    }, []);


    return(
        <>
            <Grid characters={data} />
        </>
    )
}

export default Container;