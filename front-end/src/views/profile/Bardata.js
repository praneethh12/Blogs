import { React, useEffect, useState } from 'react';
import axios from 'axios';
function Bardata(authid) {
    const [data, setData] = useState([]);
    const [ldata, setlData] = useState([]);
    const myauthid = authid;

    useEffect(() => {

        axios.get(`http://localhost:8080/getView/${myauthid}`).then((res) => {

            //console.log(res.data);
            setData(res.data);

        }).catch((err) => {

            alert(err);
        });

        axios.get(`http://localhost:8080/getlike/${myauthid}`).then((res1) => {

            console.log(res1.data);
            setlData(res1.data);

        }).catch((err) => {
            alert("Like error : "+err);
        });



    }, [])

    return [data,ldata];
}


export default Bardata;