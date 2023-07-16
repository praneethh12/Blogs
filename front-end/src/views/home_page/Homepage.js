import WebBase from "../WebBase";
import styles from './Homepage.module.css'
import Card from "../card-view/Card";
import React, { useEffect, useState } from "react";
import axios from 'axios'

import bg2 from '../../static/bg1.jpg'
import search from '../../static/search-512.png'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
function splitArray(arr1) {
    const arr = [];
    for (let i = 0; i < arr1.length; i += 3) {
        arr.push(arr1.slice(i, i + 3));
    }

    return arr;

}



function getBlogtype(arr, type) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === type) {
            ans.push(arr[i])

        }
    }

    return ans;


}

function Homepage(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [authid, setAuthid] = useState(location.state)
    const [islogin, setLogin] = useState();
    //alert(location.state)




    const [publishblogs, setpublishblogs] = useState([]);

    const arr = [];
    const [homeData, sethomeData] = useState(arr)
    useEffect(() => {
        if (location.state != null)
            setLogin(true)

       
            
        axios.get("http://localhost:8080/getAllBlogs").then((res) => {
            // alert(publishblogs.length)
            // setpublishblogs(prevState=>[...prevState,res.data])
            // alert(publishblogs.length)
            let temp = []
            for (let i = 0; i < res.data.length; i++) {
                const data = res.data[i];
                const path = data.path;


                console.log(path)


                //console.log(path,typeof(path))
                const topush = {
                    id : data.blogid,
                    title: data.title,
                    Message: data.message,
                    img: require(`../../static/auth_blogs/${path}`),
                    type: data.type,
                    authid : data.authid

                }

                temp.push(topush)

            

                console.log(publishblogs)
                

    
            }
            setpublishblogs(temp)
            console.log(publishblogs)
                for (let i = 0; i < publishblogs.length; i += 3) {
                    arr.push(publishblogs.slice(i, i + 3));
                }

            sethomeData(arr)
            console.log(arr)



        }).catch((err) => {
            alert(err);
        })


    })


    const travelBlogs = getBlogtype(publishblogs, "Travel");
    const foodBlogs = getBlogtype(publishblogs, "Food");
    const automobilelBlogs = getBlogtype(publishblogs, "Automobile");






    return (

        <div>

            <WebBase data={islogin} changeBlogs={sethomeData} splitArray={splitArray}

                travelBlogs={travelBlogs}
                foodBlogs={foodBlogs}
                automobilelBlogs={automobilelBlogs}
                authid={authid}

            ></WebBase>

            {/* <div className={styles.searchBar}>

                <input type="text" className={styles.search}></input>
                <img src={search} alt="search" className={styles.searchImg}></img>




            </div> */}



            <div className={styles.blog_grid}>

                <table className={styles.blog}>

                    {
                        homeData.map((item) => (

                            <tr>

                                {item.map((ele) => (

                                    <td className={styles.mblog}>

                                        <div className={styles.nblock} onClick={()=>{
                                            navigate('dispblog',{state : {
                                                bid: ele.id,
                                                aid : ele.authid
                                            }});
                                        }}>
                                            <img src={ele.img} className={styles.imgCont} ></img>
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



        </div>


    );
}


export default Homepage;