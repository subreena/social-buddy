import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';
import '../PostDetails/PostDetails.css';


const PostDetails = () => {



    const {postId} = useParams();
    const [postDetails , setPostDetails] = useState({});
    const [postComments , setPostComments] = useState([]);

    useEffect(()=>{
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(postUrl)
        .then(response => response.json())
        .then(data =>{
            // console.log(data);
            setPostDetails(data);
        })
    } ,[]);

    useEffect(()=>{
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(commentUrl)
        .then(response => response.json())
        .then(data =>{
            // console.log(data);
            setPostComments(data);
        })
    },[]);


    return (
        <>
          <div className="container">
     <div className="post-details">
     <div className="post-title">
     <h4>Post: {postId}</h4>
          <h2>Post Title: {postDetails.title}</h2>
    <p>{postDetails.body}</p>
     </div>
    <h3 className="text-secondary"> Comments: {postComments.length} <i class="fa fa-comments" aria-hidden="true"></i> </h3>
       
           <div className="post-comment">
           {
               postComments.map((comment) => <PostComment comment={comment} key={comment.id}></PostComment> )
           }
           </div>
     </div>
       </div> 
        </>
    
    );
};

export default PostDetails;