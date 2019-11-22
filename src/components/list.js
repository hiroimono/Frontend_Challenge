import React, { useState, useEffect } from 'react';
import BeautyStars from 'beauty-stars';
import axios from '../axios';
// import * as podlist from '../../utils/podlist'; // This JSON File is used for the first part of challenge before using a DB

var isFirstMount = true;

function List() {
    const [podcasts, setPodcasts] = useState([]);
    const [star, setStar] = useState(0);
    const [podcastID, setPodcastID] = useState(null);

    const tracks = [];

    console.log('tracks starting: ', tracks);
    console.log('podcasts starting: ', podcasts);

    const loadFunc = async () => {
        if(!isFirstMount){
            await sendStar();

            async function sendStar () {
                const payload = {
                    id: podcastID,
                    star: star
                };
                console.log('payload ID: ', payload.id, ' payload Star: ', payload.star);
                await axios.post('/send-star', payload)
                    .then( result => {
                        console.log('Podcast star is updated: ', result.data);
                    })
                    .catch( err => console.log('/send-star, axios Error: ', err) );
            }
        }

        await getPodcastsFromDatabase();

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

    };


    // This is only for first mount
    useEffect( () => loadFunc(), [] );

    // This is only next mounts
    useEffect( () => {
        if (!isFirstMount) {
            loadFunc();
        } else isFirstMount = false;
    }, [star, podcastID]);

    const more = () => {
        console.log('More button works!!!');
    };

    // const getPodcastID = (id) => {
    //     async function fn () {
    //         await setPodcastID( id );
    //     }
    //     fn();
    //     sendStar();
    // };


    return (
        <div style={{ marginTop:'60px'}}>

            {console.log('////////Rendering///////')}

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
                                                <div style={{display:'flex', justifyContent:'center'}}>
                                                    <BeautyStars size={'20px'}
                                                        value={ podcast.star_num }
                                                        onChange={ (value) => {
                                                            setPodcastID( podcast.id );
                                                            console.log('Podcast ID: ', podcastID, ' Star: ', star);
                                                            setStar(value);
                                                            console.log('Podcast ID: ', podcastID, ' Star: ', star);
                                                        }}
                                                    />
                                                </div>
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
