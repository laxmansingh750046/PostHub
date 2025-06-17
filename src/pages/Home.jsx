import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import {useNavigate}from 'react-router-dom'
import {Container, PostCard, Button} from '../components'
import {useSelector} from 'react-redux'

function Home() {
   const [posts, setPosts] = useState([]);
   const navigate = useNavigate();
   const isLogged = useSelector(state => state.auth.status);
   useEffect(()=>{
        appwriteService.getPosts()
        .then(posts => {
            if(posts)setPosts(posts.documents);
        })
        .catch(error => {
            console.error("pages :: Home :: error", error);
        });
   }, []);
   
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {isLogged?<div className="text-2xl font-bold hover:text-gray-500">Zero posts</div>:<Button className="text-2xl font-bold hover:text-gray-500"
                               onClick={()=>navigate("/login")}
                            >
                              🔒 Login/Signup to view posts
                            </Button>}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

   return (
     <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
            {posts.map(post => (
                <div key ={post.$id} className='p-2 w-1/2'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
      </Container>
     </div>
   )
}

export default Home
