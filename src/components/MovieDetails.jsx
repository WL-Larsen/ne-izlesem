import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components"


const ScDetails = styled.div`
width:94%;
max-width:1000px;
display: flex;
background-color: white;

img{
    width: 40%;
}

.details-info{
    flex:1;
    padding: 20px;
    align-items: center;
}
`;

export default function({onToggle, buttonText}){
    const[details, setDetails] = useState([])
    let {movieId} = useParams()
    const history = useHistory()
    useEffect(()=>{
        axios
        .get("https://www.episodate.com/api/show-details?q=" + movieId)
        .then((res) =>{
            console.log(res.data.tvShow) 
            setDetails(res.data.tvShow)})
        .catch((err)=>{console.log(err)})
    }, [])


    return(
    <div className="details-wrapper">
        <ScDetails>
            <img src={details.image_path} alt="" />
            <div className="details-info">
                <h1>{details.name}</h1>
                <h2>
                    {details.country}-
                    {details.status}-
                    {details.ratting}
                </h2>
                <p>{details.description}</p>
                {/* <Link to="/"><button>Geri Dön</button></Link> */}
                <button onClick={()=>history.goBack()}>Geri Dön</button>
                <button onClick={()=>{onToggle(details)}}>{buttonText}</button>
            </div> 
        </ScDetails>
    </div>)
}