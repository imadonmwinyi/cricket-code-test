import { useState } from 'react';
import { DataContext } from '../../Context/DataContext'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { commentPost, likePost} from '../../Api/FetchApi'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ViewPostModal( { onClose, id, title }) {
  const [text, setText] = useState("");

  const handleLike = async (e)=>{
    e.preventDefault();
    const like = {
      postId:id
    }
    await likePost(like)
  }
  const handleSubmit = async (e) =>{
      e.preventDefault();
      const comment = {
        postId:id,
        text:text
      }
      await commentPost(comment)
  }
  return (
    <div>
     
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Comment and Like On {title} 
          
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <form onSubmit={handleSubmit}>
               
                <textarea placeholder='Comment here...'
                    value={text}
                    onChange={(e)=> setText(e.target.value)} 
                >

                </textarea>
                <div className="btn-wrapper">
                  
                  <IconButton
                      aria-label="like"
                      onClick={handleLike}
                      sx={{
                        color: 'success',
                      }}
                    >
                    <ThumbUpIcon />
                    </IconButton>
                  
                   
                    <button> Post Comment </button>
                </div>
            </form>
        </DialogContent>
       
      </BootstrapDialog>
    </div>
  );
}

