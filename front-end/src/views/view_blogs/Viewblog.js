import React, { useEffect, useState } from "react";

import axios from "axios";
import { useLocation } from "react-router-dom";
import image from '../../static/like.jpg'

function Viewblog() {
  const location = useLocation()
  let bid = location.state.bid;
  let authorid = location.state.aid

  const[authname,setauthname] = useState()

  //alert(bid)
  if (!bid)
    bid = 0
  const date = new Date()
  const viewdata = {
    "authid": authorid,
    "blogid": bid,
    "bview": date
  }
  useEffect(() => {
    axios.post("http://localhost:8080/postView", viewdata).then((res) => {
      console.log("Bview sent");
    })
      .catch((err) => {
        alert(err)
      })

    axios.get(`http://localhost:8080/getAuthDetails/${authorid}`).then((res)=>{
      setauthname(res.data.name)
      

    }).catch((err)=>{

    })
  })


  let img
  if (bid < 23) {
    img = require(`../../static/auth_blogs/${bid}/blog.png`)
  }
  else {
    img = require(`../../static/auth_blogs/blog${bid}.png`)
  }
  useEffect(() => {
    handlePageReload();
  }, []);


  const handlePageReload = () => {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    for (let comment of comments) {
      const li = document.createElement('li');
      li.textContent = comment;
      commentList.appendChild(li);
    }
  }

  let comments = JSON.parse(localStorage.getItem(`comment${bid}`)) || [];

  function addComment(comment) {
    comments.push(comment);
    localStorage.setItem(`comment${bid}`, JSON.stringify(comments));
    displayComments();
  }

  // Function to display the comments
  function displayComments() {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    for (let comment of comments) {
      const li = document.createElement('li');
      li.textContent = comment;
      commentList.appendChild(li);
    }
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    // Add new comment to the comments array
    const commentInput = document.getElementById('commentInput');
    const newComment = commentInput.value;

    if (newComment.trim() !== '') {
      addComment(newComment);
      commentInput.value = '';
    }
  };

  return (
    <div style={{ backgroundColor: "whitesmoke", width: "100%", height: "200vh" }}>
      <div style={{ left: "40vh", position: "absolute", top: "5vh" }}>


        
        <div style={{top:"108vh",width:"80vh",left:"82vh",position:"absolute",fontSize:"20px",fontWeight: "bold"}}>{authname}</div>
        <img src={img} alt="image" style={{ height: "800px", width: "700px", boxShadow: "2px 1px 1px" }}></img>
        <br></br>
        <label style={{ fontWeight: "bold", }}>Like: </label>
        <button onClick={()=>{
          axios.post("http://localhost:8080/insertlike", viewdata).then((res) => {
            console.log("Like sent");
          })
            .catch((err) => {
              alert(err)
            })
        }} style={{ background: 'none', border: 'none', padding: "10px", cursor: 'pointer' }}>
          <img src={image} style={{ height: "25px", width: "25px" }} />
        </button>
        <div style={{ top: "125vh", height: "65vh", width: "120vh", position: "absolute" }}>
          <h2>Comments</h2>
          <div style={{ top: "8vh", height: "40vh", width: "115vh", border: "1px solid black" }}>
            <ul id="commentList"></ul>
          </div>
          <form onSubmit={handleCommentSubmit}>
            <textarea id="commentInput" style={{ top: "50vh", height: "7vh", width: "114.3vh", border: "1px solid black" }}></textarea>
            <button type="submit" style={{ top: "60vh" }}>Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}


export default Viewblog;
