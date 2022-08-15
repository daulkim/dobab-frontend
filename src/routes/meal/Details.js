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
        <div >
             {loading ? (
                <div> <span>Loading...</span> </div> ) :
                (<div className={styles.container}> 
                    <div className={styles.grid__container}>
                        <div className={styles.item}>
                            <h1>[{meal.categoryName}]{meal.title}</h1>
                            <span>{Moment(meal.startDatetime).format('A hh:mm')} | {meal.location.guName} {meal.location.dongName} | {meal.mealTime}시간 </span>
                        </div>
                        <div className={styles.item}>
                            <span>{meal.contents}</span>
                        </div>
                    </div> 
                    <div className={styles.bottom}>
                        <div className={styles.bottom__container}>
                            <div className={styles.icon__container}>
                                <div className={styles.icon__item}>
                                    <CgProfile size={40}/>
                                    <span>{meal.userId}</span>
                                </div>
                                <div className={styles.icon__item}>
                                    <AiFillStar size={20} color="orange"/><span className={styles.icon__span}>4.5</span>
                                </div>
                            </div>
                            <div>
                                <button>참여하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                  )}
                  
        </div>
    );
}
export default Details;