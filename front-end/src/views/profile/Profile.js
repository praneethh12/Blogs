import React, { useEffect, useState } from "react";
import styles from './Profile.module.css'
import ppic from '../../static/author.jpeg'
import back from '../../static/dashback2.jpg'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Pichart from './pichart/Pichart.js'
import { useLocation, useNavigate } from "react-router-dom";
import Bardata from './Bardata'
import axios from 'axios';
import { type } from "@testing-library/user-event/dist/type";
function getMon(num) {
    
    switch (num) {
        case 0: return "Jan";
        case 1: return "Feb";
        case 2: return "Mar";
        case 3: return "Apr";
        case 4: return "May";
        case 5: return "Jun";
        case 6: return "Jul";
        case 7: return "Aug";
        case 8: return "Sep";
        case 9: return "Oct";
        case 10: return "Nov";
        case 11: return "Dec";
    }


}
function getfDay(num) {
    switch (num) {
        case 0: return "Mon";
        case 1: return "Tue";
        case 2: return "Wed";
        case 3: return "Thu";
        case 4: return "Fri";
        case 5: return "Sat";
        case 6: return "Sun";
    }
}
function Profile(authorid) {
    const location = useLocation()
    const authid = location.state
    //alert(authid)
    const convertDataUrlToImage = (imgUrl) => {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                resolve(img);
            };

            img.onerror = (error) => {
                reject(error);
            };

            img.src = imgUrl;
        });
    };



    authorid = authid;

    let ddata;
    const arr = {
        username: "Austin Kleon",
        about: "Austin Kleon is the New York Times bestselling author of a trilogy of illustrated books about creativity in the digital age: Steal Like An Artist, Show Your Work!, and Keep Going. He’s also the author of Newspaper Blackout, a collection of poems made by redacting the newspaper with a permanent marker. His books have been translated into dozens of languages and have sold over a million copies worldwide. He’s been featured on NPR’s Morning Edition, PBS Newshour",
        ppic: require('../../static/author.jpeg'),
        nblogs: 2,
        pviews: 0,
        likes: 100
    };
    const [udata, setudata] = useState([]);
    const [authData, setAuthData] = useState([])
    const [authPic, setAuthPic] = useState()

    useEffect(() => {

        axios.get(`http://localhost:8080/getBlog/${authorid}`).then(function (data) {
            ddata = data.data;


            setudata(ddata);


        }).catch(function (err) {
            alert(err + "Didn't get error");
        });


        axios.get(`http://localhost:8080/getAuthDetails/${authorid}`).then((res) => {

            setAuthData(res.data)
            //alert(authData)

        }).catch((err) => {
            alert(err)
        })


        axios.get(`http://localhost:8080/getAuthPic/${authid}`).then((res) => {

            console.log(res.data)
            const imgUrl = res.data.path
            //console.log(imgUrl)
            setAuthPic(imgUrl)
            convertDataUrlToImage(imgUrl)
                .then((img) => {
                    //setAuthPic(img)
                    console.log(img)
                })
                .catch((error) => {
                    // Error occurred while loading the image
                    console.error(error);
                });

        }).catch((err) => {
            alert(err)
        })

    }, [])

    const navigate = useNavigate();
    console.log(udata);
    arr.nblogs = udata.blogs;
    arr.likes = udata.likes;
    arr.pviews = udata.profile_views;
    arr.username = authData.name
    arr.about = authData.bio
    arr.ppic = authPic

    document.body.style.backgroundImage = `url(${back})`;

    // document.body.style.backgroundColor = "rgba(101,99,99,255)"
    document.body.style.backgroundSize = "1600px 800px";
    document.body.style.backgroundRepeat = "no-repeat";


    let datayear = [


        {
            Para: '2019',
            Views: 0,
            Likes: 0
        },
        {
            Para: '2020',
            Views: 0,
            Likes: 0
        },

        {
            Para: '2021',
            Views: 0,
            Likes: 0
        },
        {
            Para: '2022',
            Views: 0,
            Likes: 0
        },
        {
            Para: '2023',
            Views: 0,
            Likes: 0
        },
        // {
        //     Para: '2024',
        //     Views: 0,
        //     Likes: 0
        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },
        // {
        //     Para: '2025',
        //     Views: 0,
        //     Likes: 0

        // },

    ];
    let datamonth = [
        {
            Para: 'Jan',
            Views: 0,
            Likes: 0
        },
        {
            Para: 'Feb',
            Views: 0,
            Likes: 0
        },
        {
            Para: 'Mar',
            Views: 0,
            Likes: 0
        },
        {
            Para: 'Apr',
            Views: 0,
            Likes: 0
        },
        {
            Para: 'May',
            Views: 0,
            Likes: 0

        },
        {
            Para: 'Jun',
            Views: 0,
            Likes: 0

        },
        {
            Para: 'Jul',
            Views: 0,
            Likes: 0
        },
        {
            Para: 'Aug',
            Views: 0,
            Likes: 0

        },
        {
            Para: 'Sep',
            Views: 0,
            Likes: 0

        },
        {
            Para: 'Oct',
            Views: 0,
            Likes: 0

        },
        {
            Para: 'Nov',
            Views: 0,
            Likes: 0

        },
        {
            Para: 'Dec',
            Views: 0,
            Likes: 0

        }


    ];

    let dataDay = [
        {
            Para: "Mon",
            Views: 0,
            Likes: 0
        },
        {
            Para: "Tue",
            Views: 0,
            Likes: 0
        },
        {
            Para: "Wed",
            Views: 0,
            Likes: 0
        },
        {
            Para: "Thu",
            Views: 0,
            Likes: 0
        },
        {
            Para: "Fri",
            Views: 0,
            Likes: 0
        },
        {
            Para: "Sat",
            Views: 0,
            Likes: 0
        },
        {
            Para: "Sun",
            Views: 0,
            Likes: 0

        }


    ];
    let viewdatafull = Bardata(authorid);
    let viewdata = viewdatafull[0];
    for (let i = 0; i < viewdata.length; i++) {
        let dt = new Date(viewdata[i].bview);
        let day = getfDay(dt.getDay());
        let month = getMon(dt.getMonth());
        let year = dt.getFullYear();
        //console.log(dt.getDay(), month, day);
        for (let j = 0; j < datayear.length; j++) {
            if (datayear[j].Para == year) {
                datayear[j].Views++;
            }
        }
        for (let j = 0; j < datamonth.length; j++) {
            if (datamonth[j].Para == month) {
                datamonth[j].Views++;
            }
        }
        for (let j = 0; j < dataDay.length; j++) {
            if (dataDay[j].Para == day) {
                dataDay[j].Views++;
            }
        }

    }
    viewdata = viewdatafull[1];
    for (let i = 0; i < viewdata.length; i++) {
        let dt = new Date(viewdata[i].bview);
        let day = getfDay(dt.getDay());
        let month = getMon(dt.getMonth());
        let year = dt.getFullYear();
        console.log(dt.getDay(), month, day);
        for (let j = 0; j < datayear.length; j++) {
            if (datayear[j].Para == year) {
                datayear[j].Likes++;
            }
        }
        for (let j = 0; j < datamonth.length; j++) {
            if (datamonth[j].Para == month) {
                datamonth[j].Likes++;
            }
        }
        for (let j = 0; j < dataDay.length; j++) {
            if (dataDay[j].Para == day) {
                dataDay[j].Likes++;
            }
        }

    }

    let piedata = [
        {
            name: "Travel",
            value: 0
        },
        {
            name: "Food",
            value: 0
        },
        {
            name: "Automobile",
            value: 0
        }
    ];

    piedata[0].value = udata.travel;
    piedata[1].value = udata.food;
    piedata[2].value = udata.auto;


    const [datas, setDatas] = useState(datayear);

    function sortAnalytics() {
        let str = document.getElementById('drop').value;
        if (str === "Year")
            setDatas(datayear);
        else if (str === "Month")
            setDatas(datamonth)
        else if (str === "Day")
            setDatas(dataDay)

    }

    function nav1(urli) {
        navigate(urli);

    }



    return (
        <div>

            <div className={styles.profileview}>

                <div className={styles.profilepic}>
                    <img src={authPic} className={styles.proimg}></img>
                    <h1 className={styles.prname}>{arr.username}</h1>
                    <div className={styles.wrdetails}>
                        <p>  {authData.phno}</p>
                        <p>  {authData.email}</p>

                    </div>
                    <p className={styles.prabout}>{arr.about}</p>
                </div>
                {/* <div className={styles.wrdetails}>
                    <h3>Contact</h3>
                    <p>  927138122</p>
                    <p>  austin@austinkleon.com</p>

                </div> */}

            </div>

            <div className={styles.usrblogs}>
{/* 
                <div className={styles.pblogs} onClick={() => { nav1("publishblog") }}>
                    <h1>Published Blogs</h1>
                </div> */}

                {/* <div className={styles.sblogs} onClick={() => { nav1("savedblog") }}>

                    <h1>Saved Blogs</h1>
                </div> */}

            </div>


            <div className={styles.analytics}>

                <p className={styles.tviews}>
                    Total Profile Views <br></br> <span >{arr.pviews}</span>
                </p>
                <p className={styles.tblogs}>
                    Total Blogs Published <br></br> <span >{arr.nblogs}</span>
                </p>

                <p className={styles.tlikes}>
                    Total Likes <br></br> <span>{arr.likes}</span>

                </p>

                <div className={styles.analytics1}>
                    <p className={styles.barheader}>
                        Total Views :<strong>{udata.blog_views} </strong>
                    </p>

                    <div className={styles.seanalytics}>
                        <label>Sort By</label>
                        <select onChange={sortAnalytics} id="drop">
                            <option value="Year">Year</option>
                            <option value="Month">Month</option>
                            <option value="Day">Day</option>
                        </select>

                    </div>



                    <BarChart id="userbar"
                        width={800}
                        height={500}
                        data={datas}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className={styles.barChart}

                    >


                        <XAxis dataKey="Para" fill="green" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Views" fill="rgba(51,115,232,255)" />
                        <Bar dataKey="Likes" fill="rgba(248,193,48,255)"></Bar>

                    </BarChart>

                    <div className={styles.pieChar}>
                        <p>Total Blogs Published<br></br><span>{arr.nblogs}</span></p>

                    </div>
                    <br></br><br></br><br></br>
                    <Pichart data={piedata}></Pichart>




                </div>




            </div>



        </div>
    );


}

export default Profile;