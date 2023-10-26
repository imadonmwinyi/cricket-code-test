import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { downLoadCsv } from '../../Api/FetchApi'

function Header(){
    const handleDownloadCsv = async (e) =>{
        e.preventDefault();
        const posts = await downLoadCsv()
        const csv = csvmaker(posts)
        const url = window.URL.createObjectURL(new Blob([csv], { type: 'text/csv' })) 
        const link = document.createElement('a')
        link.href = url
        const fileName = `downloaded-Post-${new Date().toISOString()}.csv`;
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        link.remove()
    }

    const csvmaker = function (data) { 
  
        const csvRows = []; 
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(',')); 
        for(let i = 0; i< data.length; i++){ 
            
            const values = headers.map(e => { 
                return data[i][e] 
            }) 
            csvRows.push(values.join(',')) 
        } 
        
        return csvRows.join('\n') 
    } 
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Post
              </Typography>
             
                <Button 
                    variant="outlined" 
                    color="inherit" 
                    sx={{mr : 2}}
                    onClick={handleDownloadCsv}
                >
                    DownLoad Post
                </Button>
                <Button 
                    variant="outlined" 
                    color="inherit"
                >
                    Create Post
                </Button>
              

            </Toolbar>
          </AppBar>
        </Box>
    )
}

export default Header