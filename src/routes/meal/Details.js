import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Details() {
    const param = useParams();
    const [meal, setMeal] = useState({});
    const getMeal = async () => {
        const findMeal = await ( await axios.get(`/api/v1/meals/${param.id}`) ).data;
        console.log(findMeal);
        setMeal(findMeal);                
    }

    useEffect(() => {
        getMeal();
    }, []);

    return (
        <div>
        <h1>{meal.mealTime}</h1>
        </div>
    );
}
export default Details;