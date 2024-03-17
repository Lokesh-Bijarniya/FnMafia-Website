import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../Footer/Footer';


export default function Blogs() {
  return (
    <>
    <div className='bg-green-100 h-screen'>
        <h1 className='text-center text-4xl pt-4 font-mono '>Blogs</h1>
    <div className='flex m-28 space-x-24 '>
    <Card sx={{ maxWidth: 345 }} className='hover:scale-125 hover:drop-shadow-2xl'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/legacy-header-images/cloud-computing-challenges-opportunities-public-sector-hub.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Cloud computing challenges and opportunities for the public sector
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A look at the current challenges and opportunities facing public sector organizations as they hope to adopt cloud...
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>


    <Card sx={{ maxWidth: 345 }} className='hover:scale-125 hover:drop-shadow-2xl'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/legacy-header-images/header-blog-bing-chatGPT-feature.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ChatGPT's new ‘Browse with Bing’: Watching AIs stalk you is odd
          </Typography>
          <Typography variant="body2" color="text.secondary">
          New Bing-powered ChatGPT cares about providing reliable sources, taking its time, and finding out what you had for...
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>

    <Card sx={{ maxWidth: 345 }} className='hover:scale-125 hover:drop-shadow-2xl'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/legacy-header-images/header-blog-chatgpt-plugins-devs.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          The top ChatGPT plugins for developers
          </Typography>
          <Typography variant="body2" color="text.secondary">
          From plugins that let you run code inside of ChatGPT to search GitHub for helpful code snippets, here's some tools to...
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
   
    </div>
    
    </>
  );
}



