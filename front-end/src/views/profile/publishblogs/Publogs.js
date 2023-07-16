import React, { useState } from "react";
import back from '../../../static/dashback2.jpg'
import styles from './Publogs.module.css'
import bg1 from '../../../static/bg1.jpeg'
function Publogs() {
    document.body.style.backgroundImage = `url(${back})`;
    // document.body.style.backgroundColor = "rgba(101,99,99,255)"
    document.body.style.backgroundSize = "1600px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    const [publishblogs] = useState([
        {

            title: "Title 1",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')

        },
        {

            title: "Title 2",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')

        },
        {

            title: "Title 3",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')

        },
        {

            title: "Title 4",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 5",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 6",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 7",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 8",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 9",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 10",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 11",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 12",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 13",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 14",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },
        {

            title: "Title 15",
            Message: "This is the message body",
            img: require('../../../static/bg1.jpeg')
        },


    ]);
    const arr = [];
    for (let i = 0; i < publishblogs.length; i += 3) {
        arr.push(publishblogs.slice(i, i + 3));
    }
    return (

        <>
              <div className={styles.phead}>
                    <h1>BLOGOSPHERE</h1>
                </div>

            <div className={styles.blog_grid}>

              
                <table className={styles.blog}>

                    {
                        arr.map((item) => (

                            <tr>

                                {item.map((ele) => (

                                    <td className={styles.mblog}>

                                        <div className={styles.nblock}>
                                            <img src={ele.img} className={styles.imgCont}></img>
                                            <h2 className={styles.titleCont}>{ele.title}</h2>
                                            <p className={styles.bodyCont}>{ele.Message}</p>

                                        </div>


                                    </td>

                                ))}


                            </tr>

                        ))


                    }

                </table>



            </div>


        </>

    );

}


export default Publogs; 