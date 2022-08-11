import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Meal.module.css";
import { BiTimeFive } from 'react-icons/bi';

function Meal({id, title, startDatetime, location, mealTime, categoryImage})  {

    return (
        <div className={styles.meal}>
            <Link to={`/meal/${id}`}>
            <div>
                <div class={styles.thumbnail__wrapper}>
                    <div class={styles.thumbnail}>
                    <img className={styles.meal__img} src={`img/${categoryImage}.jpg`}/>
                    </div>
                    <div class={styles.bottom__right}>
                        <BiTimeFive color='white' size={30}/><span>{startDatetime}</span>
                    </div>
                </div>
                <div className={styles.text__container}>
                    <p className={styles.meal__title}>{title.length > 15? `${title.slice(0, 15)}...` : title}</p>
                    <p className={styles.meal__content}>
                        {location.guName} {location.dongName} · {mealTime}시간 소요
                    </p>
                    <p className={styles.meal__info}>
                        좋아요 조회수
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
}

Meal.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default Meal;