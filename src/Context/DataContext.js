import { createContext, useState, useEffect } from 'react'
import { getAllPost } from '../Api/FetchApi'

export const DataContext = createContext();

export const DataProvider = ( { children })=>{
    const [posts, setPosts] = useState([])
    const [postToView, setPostToView] = useState({})
    const [openModal, setOpenModal] = useState(false)
    
    useEffect( () => {
        async function fetchPost(){
            const allPost = await getAllPost();
            setPosts(allPost)
            //console.log(posts)
        } 
        fetchPost();       
      },[ ]
    )
    return(
        <DataContext.Provider value ={{ posts, setPosts, postToView,
         setPostToView, openModal, setOpenModal}}
         >
            { children }
        </DataContext.Provider>
    )

}

