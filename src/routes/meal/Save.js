import React from 'react';
import styles from './Save.module.css';

function Save() {

    return (
        <div className={styles.container}>
           <div className={styles.grid__container}>
                <div className={styles.item}>
                    <input type='text' placeholder='동네'  name='dongName' />
                </div>
                <div className={styles.item}>
                    <input type='time' name='startDatetime' />
                </div>
                <div className={styles.item}>
                    <select name='mealTime'>
                        <option value=''>소요시간</option>
                        <option key='1' value='1'>1시간</option>
                        <option key='2' value='2'>2시간</option>
                        <option key='3' value='3'>3시간</option>
                        <option key='4' value='4'>4시간</option>
                        <option key='5' value='5'>5시간</option>
                    </select>
                </div>
                <div className={styles.item}>
                <select>
                    <option value=''>카테고리</option>
                    <option key='1' value='한식'>한식</option>
                    <option key='2' value='중식'>중식</option>
                    <option key='3' value='일식'>일식</option>
                </select>
                </div>
                <div className={styles.item}>
                    <input type='text' placeholder='제목'  name='title' />
                </div>
                <div className={styles.item}>
                    <textarea rows='15' type='text' name='contents' />
                </div>
                <div className={styles.item}>
                    <button>등록</button>
                </div>
           </div>
        </div>
    );
}

export default Save;