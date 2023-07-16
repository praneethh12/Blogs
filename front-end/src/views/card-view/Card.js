import React from 'react';
import styles from './Card.module.css'
function Card(props)
{
    
    let imgUrl = props.imgURL;
    let title = props.title;
    let Body = props.Body;

    return(

        <div className={styles.card_container}>

            <div className={styles.image_container}>

                <img src ={imgUrl} alt='image'></img>
            </div>

            <div className={styles.title_container}>

                <h3 className={styles.title_container}>{title}</h3>
            </div>


            <div className={styles.body_container}>
                <p className={styles.body_container}>{Body}</p>
            </div>


        </div>

    );
}


export default Card;