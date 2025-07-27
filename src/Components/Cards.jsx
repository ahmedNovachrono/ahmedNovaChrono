import { useEffect, useRef, useState } from "react";

const Cards = () => {
    const API = import.meta.env.VITE_API;
    const [data, setData] = useState([]);
    const [error, setError] = useState("")
    useEffect(() => {
       const fetchtData = async () => {
         try {
            const res  = await fetch(API);
            console.log(res)
          const  data = await res.json();
           setData(data);
           
        } catch (error) {
            setError(error)
        }
       }
       fetchtData()

    }, [])

 
    return ( 
        <div className="cards" id="cards">
            <h1>Experiances</h1>
            <ul>
                {data.length != 0? data.map((card) => (
                <li key={card.id} style={{backgroundColor: card.color, boxShadow: `5px 0px 30px 1px ${card.color}`}}>
                    <h3>{card.title}</h3>
                    <img src={card.img} alt="" />
                    <p>{card.dis}</p>
                </li>
                )) : error + " Data, Something is Wrong With The API, Sorry About that I'm Hosting My API On a Free Hosting Service"}
            </ul>
        </div>
     );
}
 
export default Cards;