import { useEffect, useState } from 'react';
import styles from './Save.module.css';
import axios from 'axios';

function Save() {
    const initialFormData = Object.freeze({
                                        dongName:'',
                                        startDatetime:'',
                                        mealTime:'',
                                        categoryId:'',
                                        title: '',
                                        contents: '',
                                        userId: 'user1'
                                    });

    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveApi();
    }

    const saveApi = async () => {
        await ( await axios.post(`/api/v1/meals`, formData)
                            .then()
                            .catch((err) => console.log(err)));
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
           <div className={styles.grid__container}>
                <div className={styles.item}>
                    <input type='text' placeholder='동네' name='dongName' onChange={handleChange}/>
                </div>
                <div className={styles.item}>
                    <input type='datetime-local' name='startDatetime' onChange={handleChange} />
                </div>
                <div className={styles.item}>
                    <select name='mealTime' onChange={handleChange}>
                        <option value=''>소요시간</option>
                        <option key='1' value='1'>1시간</option>
                        <option key='2' value='2'>2시간</option>
                        <option key='3' value='3'>3시간</option>
                        <option key='4' value='4'>4시간</option>
                        <option key='5' value='5'>5시간</option>
                    </select>
                </div>
                <div className={styles.item}>
                <select name='categoryId' onChange={handleChange}>
                    <option value=''>카테고리</option>
                    <option key='1' value='1'>한식</option>
                    <option key='2' value='2'>중식</option>
                    <option key='3' value='3'>일식</option>
                </select>
                </div>
                <div className={styles.item}>
                    <input type='text' placeholder='제목'  name='title' onChange={handleChange} />
                </div>
                <div className={styles.item}>
                    <textarea rows='15' type='text' name='contents' onChange={handleChange} />
                </div>
                <div className={styles.item}>
                    <button>등록</button>
                </div>
           </div>
        </form>
    );
}

export default Save;