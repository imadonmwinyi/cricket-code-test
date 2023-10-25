import { CONFIG } from '../config';
import axios from 'axios';

const api_url = CONFIG.API_URL;

export const createPost = async (postData) => {
    try {
    const response = await axios.post(`${api_url}Post/createPost`,postData)
        
    if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
    
    const post = response.data;
    return post.data;
    
    } catch (error) {
    console.error('Error:', error);
    }
}

export const getAllPost = async ()=>{
    try{
        const response = await axios.get(`${api_url}Post/getAllPost`)
        if(response.status == 200){
            const allPost = response.data;
            return allPost.data;
        }
    }catch (error) {
        console.error('Error:', error);
        }
   
}

export const likePost = async (postData)=>{
   
    try {
        const response = await axios.post(`${api_url}Post/likePost`,postData)
            
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
        
        const likeResp = response.data;
        return likeResp.success;
        
    } catch (error) {
    console.error('Error:', error);
    }
}

export const commentPost = async (postData)=>{

    try {
        const response = await axios.post(`${api_url}Post/commentPost`,postData)
            
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
        
        const commentResp = response.data;
        return commentResp.success;
        
    } catch (error) {
    console.error('Error:', error);
    }
    
}

export const downLoadCsv = async ()=>{
    try{
        const response = await axios.get(`${api_url}Post/downloadCsv`)
        if(response.status == 200){
            const allPost = response.data;
            return allPost.data;
        }
    }catch (error) {
        console.error('Error:', error);
        }
}