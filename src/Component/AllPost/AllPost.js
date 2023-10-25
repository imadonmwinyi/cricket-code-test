import * as React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../Context/DataContext'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useModal } from '../../Context/ModalContext'

import './AllPost.css'
function AllPost(){
    const { posts, setOpenModal, setPostToView} = useContext(DataContext)
    const { modal, openModal} = useModal();
   
    console.log(modal)

        const recentPost =(
            <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                        
                   {
                       posts.map((post)=>
                       <div key={post.id}>
                           
                            <ListItemButton alignItems="flex-start">
                                <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                            <ListItemText
                            primary={post.title}
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {post.text}
                                </Typography>
                                
                                </React.Fragment>
                            }
                            onClick ={ e => { openModal('ViewPostModal',post); }}
                            />
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                        
                   </div>
                  )
                   }
            </List>
        )


    return (
        <div className="post-view-container">
            <div className="w-20">

            </div>
            <div className="w-80">
                <h4>Recent Posts</h4>
                { recentPost }                       
                
            </div>    
                
        </div>
    )
}

export default AllPost