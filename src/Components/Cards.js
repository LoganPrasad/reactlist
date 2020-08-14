import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card'
import { CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core'
import axios from '../Utility/axios'
import '../CSS/cards.css'
import { useHistory } from 'react-router-dom';

const baseURL = "https://image.tmdb.org/t/p/original/";

function Cards({ header, description, fetchURL, staticImage }) {
    const [ImageUrl, SetImageURl] = useState({})
    useEffect(() => {
        async function fetchImage() {
            const request = await axios.get(fetchURL)
            var index = Math.floor(Math.random() * (19 - 0) + 0);


            SetImageURl(request.data.results[index]);
            
            return request;
        }
        fetchImage()
    }, [])
    const history = useHistory();
    const hanldeClick=()=>{
        history.push("/Movies")
    }
    return (
       <div class="cards" onClick={hanldeClick}>
        {ImageUrl?.id>0 &&
        <Card className="card_content">
            <CardActionArea className="cards_actionArea">
                <CardMedia  className="cards_image" image={ ImageUrl?.id>0 && baseURL+ImageUrl.poster_path} title={header && header}>
                </CardMedia>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                       {description}
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        }
</div>
    )
}



export default Cards

