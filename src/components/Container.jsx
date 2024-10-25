import { useEffect, useState } from "react"
import { Card } from "./Card";
import Grid from "./Grid";

function Container () {

    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('https://dragonball-api.com/api/characters')
        .then(respose => respose.json())
        .then((data) => setData(data.items))
    }, []);


    return(
        <>
            <Grid characters={data} />
        </>
    )
}

export default Container;