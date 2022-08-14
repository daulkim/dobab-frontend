import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import Moment from 'moment';
import 'moment/locale/ko';
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

function Details() {
    const param = useParams();
    const [loading, setLoading] = useState(true);
    const [meal, setMeal] = useState({});
    const getMeal = async () => {
        const findMeal = await ( await axios.get(`/api/v1/meals/${param.id}`) ).data;
        setMeal(findMeal);  
        setLoading(false);              
    }

    useEffect(() => {
        getMeal();
    }, []);

    return (
        <div className={styles.container}>
             {loading ? (
                <div> <span>Loading...</span> </div> ) :
                (         
                <div className={styles.grid__container}>
                    <div className={styles.item}>
                    <h1>[{meal.categoryName}]{meal.title}</h1>
                    <span>{Moment(meal.startDatetime).format('A hh:mm')} | {meal.mealTime}시간 | {meal.location.guName} {meal.location.dongName}</span>
                    </div>
                    <div className={styles.item}>
                    <span>{meal.contents}같이 점심 드시분 찾습니다.</span>
                    </div>
                    <div className={styles.item}>
                        <CgProfile size={80}/>
                        <p>{meal.userId}</p>
                        <div className={styles.icon__con}>
                        <AiFillStar size={20} color="orange"/><span className={styles.icon__span}>4.5</span>
                        </div>
                        <button>참여하기</button>
                    </div>
                </div>)}
                  
        </div>
    );
}
export default Details;