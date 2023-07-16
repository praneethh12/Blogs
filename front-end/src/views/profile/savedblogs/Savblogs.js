import React, { useState } from "react";
import back from '../../../static/dashback2.jpg';
import styles from './Savblogs.module.css';
import bg1 from '../../../static/bg1.jpeg';
import svdcv from '../../../static/svdcv.jpg';
import svdbg from '../../../static/svdbg.jpg';

function Savblogs() {

    document.body.style.backgroundImage = `url(${svdbg})`;
    document.body.style.backgroundSize = "1600px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    const [svdblogs] = useState([
        {

            title: "Title 1",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')

        },
        {

            title: "Title 2",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')

        },
        {

            title: "Title 3",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')

        },
        {

            title: "Title 4",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 5",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 6",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 7",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 8",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 9",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 10",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 11",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 12",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 13",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 14",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },
        {

            title: "Title 15",
            Message: "This is the message body",
            img: require('../../../static/svdcv.jpg')
        },


    ]);
    const sba = [];
    for (let j = 0; j < svdblogs.length; j += 3) {
        sba.push(svdblogs.slice(j, j + 3));
    }

    return (

        <>
              <div className={styles.shead}>
                    <h1>BLOGOSPHERE</h1>
                </div>

            <div className={styles.blog_card_view}>

              
                <table className={styles.saved_blog}>

                    {
                        sba.map((item) => (

                            <tr>

                                {item.map((ele) => (

                                    <td className={styles.sblog}>

                                        <div className={styles.sblock}>
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

export default Savblogs;