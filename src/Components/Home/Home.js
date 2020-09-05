import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Posts from '../Posts/Posts';
import Box from '@material-ui/core/Container';


const Home = () => {
    const [posts , setPosts] = useState([]);
  
    useEffect( () =>{
  //  USING AXIOS TO FETCH API

      const fetchPosts = async () =>{
        const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data);
      }
      fetchPosts();
    
    },[]);

  

    return (
   <>
<div style={{ width: '100%' }}>
  <div className="text-center m-3">
  <h1> <i class="fa fa-star" aria-hidden="true"></i> Our Posts <i class="fa fa-star" aria-hidden="true"></i> </h1>
  <h4 className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit!</h4>
  </div>
  {/* MATERIAL UI BOX */}
      <Box display="flex" component="span" p={1}>
      
    {
     posts.map(post => <Posts post={post} key={post.id}></Posts>  )
   }
      </Box>
     
    </div>
 </>
    );
};

export default Home;