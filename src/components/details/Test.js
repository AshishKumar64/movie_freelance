import React from "react";
import './Details.scss'
function Test(){
    const movieDetail ={
      backgroundImage: "url(https://image.tmdb.org/t/p/original/k0hlAzTryCYX1O1LyC6P8tAa8s0.jpg)",
      backgroundSize:"100%",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      opacity:'1',
      position:"relative",
      zIndex:1,
      // overflow:"hidden"



}
    return(
        <div >
                <div>
                    <div style={movieDetail} className={'transitionImage topMargin-20 height-500 height-300' }>
                        <div className="container">

                            <button className="play-btn">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div className={'container cardForBorderComponent'} >
                        <div className={'flex-common-container'}>
                               <div className={'left-common-item screen-banner-for-detail-page'}>
                                   <img className={'imageSize'} src={require("./../../assets/images/movie-4.png")} alt="Free guy movie poster"/>
                               </div>
                                <div className={'right-common-item '}>
                                   <div className="movie-detail-content">

                                <p className="detail-subtitle">New Episodes</p>

                                <h1 className="h1 detail-title">
                                    Free <strong>Guy</strong>
                                </h1>

                                <div className="meta-wrapper">

                                    <div className="badge-wrapper">
                                        <div className="badge badge-fill">PG 13</div>

                                        <div className="badge badge-outline">HD</div>
                                    </div>

                                    <div className="ganre-wrapper">
                                        <a href="#">Comedy,</a>

                                        <a href="#">Action,</a>

                                        <a href="#">Adventure,</a>

                                        <a href="#">Science Fiction</a>
                                    </div>

                                    <div className="date-time">

                                        <div>
                                            <ion-icon name="calendar-outline"></ion-icon>

                                            <time dateTime="2021">2021</time>
                                        </div>

                                        <div>
                                            <ion-icon name="time-outline"></ion-icon>

                                            <time dateTime="PT115M">115 min</time>
                                        </div>

                                    </div>

                                </div>

                                <p className="storyline">
                                    A bank teller called Guy realizes he is a background character in an open world
                                    video game called Free
                                    City that will
                                    soon go offline.
                                </p>

                                <div className="details-actions">

                                    <button className="share">
                                        <ion-icon name="share-social"></ion-icon>

                                        <span>Share</span>
                                    </button>

                                    <div className="title-wrapper">
                                        <p className="title">Prime Video</p>

                                        <p className="text">Streaming Channels</p>
                                    </div>

                                    <button className="btn btn-primary">
                                        <ion-icon name="play"></ion-icon>

                                        <span>Watch Now</span>
                                    </button>

                                </div>
                                   </div>
                               </div>

                        </div>
                        <div>
                            <span style={{color:'yellow'}}>Video Trailer</span>
                            <ul className="movies-list has-scrollbar">
                                <li>
                                    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </li>
                                <li>
                                    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </li>
                                <li>
                                    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </li>

                            </ul>
                        </div>
                             <section className="tv-series">
                        <div className="container margin-left-for-card">
                            <h2 className="h2">Popular Web Series</h2>

                            <ul className="movies-list has-scrollbar">

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-1.png")} alt="Moon Knight movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Moon Knight</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
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

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-2.png")} alt="Halo movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Halo</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT59M">59 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.8</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-3.png")}
                                                     alt="Vikings: Valhalla movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Vikings: Valhalla</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT51M">51 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.3</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-4.png")} alt="Money Heist movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Money Heist</h3>
                                            </a>

                                            <time dateTime="2017">2017</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">4K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT70M">70 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.3</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                        <div className="container margin-left-for-card">
                            <h2 className="h2">Popular Movies</h2>

                            <ul className="movies-list has-scrollbar">

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-1.png")} alt="Moon Knight movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Moon Knight</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
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

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-2.png")} alt="Halo movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Halo</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT59M">59 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.8</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-3.png")}
                                                     alt="Vikings: Valhalla movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Vikings: Valhalla</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT51M">51 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.3</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-4.png")} alt="Money Heist movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Money Heist</h3>
                                            </a>

                                            <time dateTime="2017">2017</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">4K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT70M">70 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.3</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                        <div className="container margin-left-for-card">
                            <h2 className="h2">Best Movies & Shows </h2>

                            <ul className="movies-list has-scrollbar">

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-1.png")} alt="Moon Knight movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Moon Knight</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
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

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-2.png")} alt="Halo movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Halo</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT59M">59 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.8</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-3.png")}
                                                     alt="Vikings: Valhalla movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Vikings: Valhalla</h3>
                                            </a>

                                            <time dateTime="2022">2022</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">2K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT51M">51 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.3</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="movie-card">

                                        <a href="#">
                                            <figure className="card-banner">
                                                <img src={require("./../../assets/images/series-4.png")} alt="Money Heist movie poster"/>
                                            </figure>
                                        </a>

                                        <div className="title-wrapper">
                                            <a href="#">
                                                <h3 className="card-title">Money Heist</h3>
                                            </a>

                                            <time dateTime="2017">2017</time>
                                        </div>

                                        <div className="card-meta">
                                            <div className="badge badge-outline">4K</div>

                                            <div className="duration">
                                                <ion-icon name="time-outline"></ion-icon>

                                                <time dateTime="PT70M">70 min</time>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star"></ion-icon>

                                                <data>8.3</data>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section>
                    </div>

                </div>


        </div>
    )
}

export default Test;