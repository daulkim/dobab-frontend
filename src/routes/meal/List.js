import { useEffect, useState } from "react";
import axios from 'axios';
import Meal from '../../component/Meal';
import styles from "./List.module.css";

function List() {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(12);
    const [meals, setMeals] = useState([]);
    const getMeals = async () => {
        const list = await ( await axios.get(`/api/v1/meals?page=${page}&size=${size}`)).data;
        setMeals(list);                
    }

    // page size 변경 함수 추가
    useEffect(() => {
        getMeals();
    }, []);

    return (
      <div className={styles.container}>
        <div className={styles.meals}>
        {meals.map((meal) => (
          <Meal
            key={meal.id}
            id={meal.id}
            userId={meal.userId}
            title={meal.title}
            startDatetime={meal.startDatetime}
            mealTime={meal.mealTime}
            location={meal.location}
            categoryImage={meal.categoryImage}
          />
        ))}
        </div>
        </div>
    );
}
export default List;