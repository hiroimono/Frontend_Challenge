import React, { useState, useEffect } from 'react';
import axios from '../axios';
// import * as podlist from '../../utils/podlist';

function List() {
    const [podcasts, setPodcasts] = useState([]);

    const tracks = [];

    console.log('tracks starting: ', tracks);
    console.log('podcasts starting: ', podcasts);

    const loadFunc = () => {

        async function getPodcastsFromDatabase () {
            const PodCastsTakenFromDB = await axios
                .get('/getPodcastsFromDatabase');

            console.log('PodCastsTakenFromDB: ', PodCastsTakenFromDB);

            let myTracks = [...PodCastsTakenFromDB.data.map( (podcast) => {
                ////Check for podcasts which are not have image and add them a default image
                if (!podcast.img_url || podcast.img_url == null) {
                    return {
                        ...podcast,
                        image : 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuF_cuBWZBgE%2Fmaxresdefault.jpg&f=1&nofb=1'
                    };
                } else {
                    return podcast;
                }
            })];

            console.log('tracks after: ', myTracks);
            setPodcasts(myTracks);
        }

        getPodcastsFromDatabase();

    };

    useEffect( loadFunc, [] );

    const more = () => {
        console.log('More button works!!!');
    };

    return (
        <div style={{ marginTop:'60px'}}>

            {console.log('This page is rendered now!')}

            <ul className="cd-hero-slider" style={{marginTop: '10px', height: '100%'}}>

                <li className="selected">
                    <div className="cd-full-width" style={{position: "relative"}}>
                        <div className="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery" style={{marginTop: '10px'}}>
                            <div className="tm-img-gallery-container">
                                <div className="tm-img-gallery gallery-one">

                                    { podcasts && podcasts.map ( podcast => (
                                        <div key = { podcast.id } className="grid-item" style={{width: '12,5%'}}>
                                            <figure className="effect-bubba" style={{height:'100%'}}>
                                                <img src={ podcast.img_url } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
                                                <figcaption>
                                                    <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title } </p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    ))}

                                </div>
                                { podcasts.length ?
                                    <p style={{textAlign:'center', marginBottom:'50px'}}><button onClick={ more } type="button" className="btn btn-light" style={{backgroundColor:'rgba(0,0,0,0.70)', color:'white'}} >More</button> </p>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default List;
