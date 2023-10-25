import './NewPost.css';
import { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext'
import { createPost } from '../../Api/FetchApi'

function NewPost(){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const { posts,  setPosts }  = useContext(DataContext);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const post = {title:title, text:text};
        const postResp = await createPost(post);
        setPosts([...posts,postResp])
        
    }
    return(
        <div className="post-container">
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input type="text" placeholder="Post Title" value={title} 
                     onChange={(e)=> setTitle(e.target.value)} ></input>
                </div>
                <textarea placeholder='Post Content here...'
                    value={text}
                    onChange={(e)=> setText(e.target.value)} 
                >

                </textarea>
                <div className="btn-wrapper">
                    <button> Post </button>
                </div>
            </form>
           
        </div>
    );
}

export default NewPost;