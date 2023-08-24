import React, {useEffect, useState} from "react";
import './Details.scss'
import Offers from "./Offers";
function Test(){
    const [postData, setPostData] = useState([]);
    const [popularData, setPopularData] = useState([]);
    useEffect(() => {
    fetchPostData();
    fetchPopularData();
  }, []);
    const fetchPostData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/movies-shows-by-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contentID: 2 }),
      });
      const jsonData = await response.json();
      setPostData(jsonData);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
    const fetchPopularData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/home', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ contentID: 3 }),
      });
      const jsonData = await response.json();
      setPopularData(jsonData);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
    const movieDetail ={
      backgroundImage: postData ? 'url(https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg)': 'url(https://image.tmdb.org/t/p/original/'+postData['backdropImages'][0]['image_url']+')',
      backgroundSize:"100%",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      opacity:'1',
      position:"relative",
      zIndex:1,
}
    console.log(postData,'0000000')
    // console.log('url(https://image.tmdb.org/t/p/original/'+postData['backdropImages']+')','------')
    try{
        console.log(postData['contentDetails'])
    }catch (err){
        console.log(err)
    }
    return(
        <div >{ postData['contentDetails'] && popularData['popularShow'] &&
                <div>
                    <div style={{
      backgroundImage: 'url(https://image.tmdb.org/t/p/original/'+postData['backdropImages'][0]['image_url']+')',
      backgroundSize:"100%",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      opacity:'1',
      position:"relative",
      zIndex:1,
}} className={'transitionImage topMargin-20 height-500 height-300' }>
                        <div className="container">

                            <button className="play-btn">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div className={'container cardForBorderComponent'} >
                        <div className={'flex-common-container'}>
                               <div className={'left-common-item screen-banner-for-detail-page'}>
                                   <img className={'imageSize'} src={"https://image.tmdb.org/t/p/original/"+postData['posterImage']['image_url']} alt="Free guy movie poster"/>
                               </div>
                                <div className={'right-common-item '}>
                                   <div className="movie-detail-content">

                                {/*<p className="detail-subtitle">New Episodes</p>*/}

                                <span className="h1 detail-title">
                                    {postData['contentDetails']['title']}
                                </span>

                                <div className="meta-wrapper">

                                    <div className="badge-wrapper">
                                        <div className="badge badge-fill">{postData['contentDetails']['age_certification']}</div>

                                        <div className="badge badge-outline">HD</div>
                                    </div>

                                    <div className="ganre-wrapper">
                                        {postData['genreDetails'].map(item=>(
                                           <a href="#">{item['name']},</a>
                                        ))}
                                    </div>

                                    <div className="date-time">

                                        <div>
                                            <ion-icon name="calendar-outline"></ion-icon>

                                            <time dateTime="2021">{postData['contentDetails']['release_date']}</time>
                                        </div>

                                        <div>
                                            <ion-icon name="time-outline"></ion-icon>

                                            <time dateTime="PT115M">{postData['contentDetails']['runtime_in_minutes']}</time>
                                        </div>

                                    </div>

                                </div>

                                <p className="storyline">
                                    A bank teller called Guy realizes he is a background character in an open world
                                    video game called Free
                                    City that will
                                    soon go offline.
                                </p>
                                {/*       offers ------------------------------*/}

                                <Offers offersData={postData['offers']}></Offers>
                                {/*<div>*/}
                                {/*    {postData['offers'].map(items=>(*/}
                                {/*        <div className="details-actions">*/}

                                {/*        <button className="share">*/}
                                {/*            <ion-icon name="share-social"></ion-icon>*/}

                                {/*            <span>Share</span>*/}
                                {/*        </button>*/}

                                {/*        <div className="title-wrapper">*/}
                                {/*            <p className="title">{items['providerDislayName']}</p>*/}
                                {/*            <p className={'text'}>{items['moni']}</p>*/}
                                {/*            <p className="text">{items['cnd_code']}</p>*/}
                                {/*        </div>*/}

                                {/*        <button className="btn btn-primary">*/}
                                {/*            <ion-icon name="play"></ion-icon>*/}

                                {/*            <span>Watch Now</span>*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*    ))}*/}

                                {/*</div>*/}

                                   </div>
                               </div>

                        </div>
                        <div>
                            <span className={'colorWhite marginBottom12'}>Video Trailer, Teaser, Clips</span>
                            <ul className="movies-list has-scrollbar">
                            {postData['videoClipsData'].map(items=>(

                                <li>
                                    <iframe width="420" height="315" src={"https://www.youtube.com/embed/"+items['source_id']}></iframe>
                                    <span className={'colorWhite'}>{items['title']}</span>
                                </li>
                            ))}
                                </ul>
                        </div>


                        <div>
                            <span className={'colorWhite marginBottom12'}>Cast - {postData['contentDetails']['title']}</span>
                            <ul className="movies-list has-scrollbar">
                            {postData['cast'].map(items=>(

                                <li>
                                    <img width="150" height="200" src={"https://image.tmdb.org/t/p/original/"+items['profile_path']} alt={'k'}/>
                                    <span className={'colorWhite textAlignItemForCenter'} title={'Real Name'}>{items['real_name']}</span>
                                    <hr/>
                                    <span className={'colorWhite textAlignItemForCenter'} title={'Role'}>{items['character_name']}</span>
                                </li>
                            ))}
                                </ul>
                        </div>
                            <hr/>

                        <div>
                            <span className={'colorWhite marginBottom12'}>Crew - {postData['contentDetails']['title']}</span>
                            <ul className="movies-list has-scrollbar">
                            {postData['crew'].map(items=>(

                                <li>
                                    <img width="150" height="200" src={"https://image.tmdb.org/t/p/original/"+items['profile_path']} alt={'k'}/>
                                    <span className={'colorWhite textAlignItemForCenter'} title={'Real Name'}>{items['real_name']}</span>
                                    <hr/>
                                    <span className={'colorWhite textAlignItemForCenter'} title={'Role'}>{items['character_name']}</span>
                                </li>
                            ))}
                                </ul>
                        </div>


                        <section className="tv-series">

                        <div>

                                <div className="container margin-left-for-card">
                            <h2 className="h2 colorWhite">Similar Movies</h2>

                            <ul className="movies-list has-scrollbar">


                                    {postData['similar'].map(items=>(
                                        <li>
                                        <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={'https://image.tmdb.org/t/p/original/'+items['posterImage']['image_url']} alt="Moon Knight movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href={items['seoUrl']}>
                                                <h3 className="card-title">{items['title']}</h3>
                                            </a>

                                            {/*<time dateTime="2022">{items['']}</time>*/}
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT47M">47 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.6</data>
                                            </div>
                                        </div>

                                    </div>
                                      </li>
                                    ))}


                            </ul>

                        </div>


                        </div>
                    </section>

                        <div>

                                <div className="container margin-left-for-card">
                            <h2 className="h2 colorWhite">Popular Web-Series</h2>

                            <ul className="movies-list has-scrollbar">


                                    {popularData['popularShow'].map(items=>(
                                        <li>
                                        <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={'https://image.tmdb.org/t/p/original/'+items['_source']['posterImage']['image_url']} alt="Moon Knight movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href={items['_source']['seo']['seoUrl']}>
                                                <h3 className="card-title">{items['_source']['contentDetails']['title']}</h3>
                                            </a>

                                            {/*<time dateTime="2022">{items['']}</time>*/}
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                {/*<time dateTime="PT47M">47 min</time>*/}
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.6</data>
                                            </div>
                                        </div>

                                    </div>
                                      </li>
                                    ))}


                            </ul>

                        </div>


                        </div>

                        <div>

                                <div className="container margin-left-for-card">
                            <h2 className="h2 colorWhite">Popular Movies</h2>

                            <ul className="movies-list has-scrollbar">


                                    {popularData['popularMovie'].map(items=>(
                                        <li>
                                        <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={'https://image.tmdb.org/t/p/original/'+items['_source']['posterImage']['image_url']} alt="Moon Knight movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href={items['_source']['seo']['seoUrl']}>
                                                <h3 className="card-title">{items['_source']['contentDetails']['title']}</h3>
                                            </a>

                                            {/*<time dateTime="2022">{items['']}</time>*/}
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT47M">47 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.6</data>
                                            </div>
                                        </div>

                                    </div>
                                      </li>
                                    ))}


                            </ul>

                        </div>


                        </div>

                    </div>

                </div>
        }

        </div>
    )
}

export default Test;