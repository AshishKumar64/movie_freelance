import React from "react";
import Logo from "./../../assets/images/logo.svg";
import "./Home.scss";

function Home() {
  return (
    <div id="top">


      <main>
        <article>
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Filmlane</p>

                <h1 className="h1 hero-title">
                  Unlimited <strong>Movie</strong>, TVs Shows, & More.
                </h1>

                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">PG 18</div>

                    <div className="badge badge-outline">HD</div>
                  </div>

                  <div className="ganre-wrapper">
                    <a href="#">Romance,</a>

                    <a href="#">Drama</a>
                  </div>

                  <div className="date-time">
                    <div>
                      <ion-icon name="calendar-outline"></ion-icon>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div>
                      <ion-icon name="time-outline"></ion-icon>

                      <time dateTime="PT128M">128 min</time>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary">
                  <ion-icon name="play"></ion-icon>

                  <span>Watch now</span>
                </button>
              </div>
            </div>
          </section>

          <section className="upcoming">
            <div className="container">
              <div className="flex-wrapper">
                <div className="title-wrapper">
                  <p className="section-subtitle">Online Streaming</p>

                  <h2 className="h2 section-title">Upcoming Movies</h2>
                </div>

                <ul className="filter-list">
                  <li>
                    <button className="filter-btn">Movies</button>
                  </li>

                  <li>
                    <button className="filter-btn">TV Shows</button>
                  </li>

                  <li>
                    <button className="filter-btn">Anime</button>
                  </li>
                </ul>
              </div>

              <ul className="movies-list  has-scrollbar">
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/upcoming-1.png")}
                          alt="The Northman movie poster"
                        />
                      </figure>
                    </a>

                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">The Northman</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>

                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time dateTime="PT137M">137 min</time>
                      </div>

                      <div className="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.5</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/upcoming-2.png")}
                          alt="Doctor Strange in the Multiverse of Madness movie poster"
                        />
                      </figure>
                    </a>

                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">
                          Doctor Strange in the Multiverse of Madness
                        </h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">4K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT126M">126 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>NR</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/upcoming-3.png")}
                          alt="Memory movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Memory</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="">N/A</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>NR</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/upcoming-4.png")}
                          alt="The Unbearable Weight of Massive Talent movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">
                          The Unbearable Weight of Massive Talent
                        </h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">HD</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT107M">107 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>NR</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="service">
            <div class="container">
              <div class="service-banner">
                <figure>
                  <img
                    src={require("./../../assets/images/service-banner.jpg")}
                    alt="HD 4k resolution! only $3.99"
                  />
                </figure>

                <a
                  href="./../../assets/images/service-banner.jpg"
                  download
                  class="service-btn"
                >
                  <span>Download</span>

                  <ion-icon name="download-outline"></ion-icon>
                </a>
              </div>

              <div class="service-content">
                <p class="service-subtitle">Our Services</p>

                <h2 class="h2 service-title">
                  Download Your Shows Watch Offline.
                </h2>

                <p class="service-text">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod tempor.There are many variations of passages of lorem
                  Ipsum available, but the majority have suffered alteration in
                  some injected humour.
                </p>

                <ul class="service-list">
                  <li>
                    <div class="service-card">
                      <div class="card-icon">
                        <ion-icon name="tv"></ion-icon>
                      </div>

                      <div class="card-content">
                        <h3 class="h3 card-title">Enjoy on Your TV.</h3>

                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consecetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="service-card">
                      <div class="card-icon">
                        <ion-icon name="videocam"></ion-icon>
                      </div>

                      <div class="card-content">
                        <h3 class="h3 card-title">Watch Everywhere.</h3>

                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consecetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="top-rated">
            <div className="container">
              <p className="section-subtitle">Online Streaming</p>

              <h2 className="h2 section-title">Top Rated Movies</h2>

              <ul className="filter-list">
                <li>
                  <button className="filter-btn">Movies</button>
                </li>

                <li>
                  <button className="filter-btn">TV Shows</button>
                </li>

                <li>
                  <button className="filter-btn">Documentary</button>
                </li>

                <li>
                  <button className="filter-btn">Sports</button>
                </li>
              </ul>

              <ul class="movies-list has-scrollbar">
                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-1.png")}
                          alt="Sonic the Hedgehog 2 movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Sonic the Hedgehog 2</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT122M">122 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>7.8</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-2.png")}
                          alt="Morbius movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Morbius</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">HD</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT104M">104 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>5.9</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-3.png")}
                          alt="The Adam Project movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">The Adam Project</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">4K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT106M">106 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-4.png")}
                          alt="Free Guy movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Free Guy</h3>
                      </a>

                      <time datetime="2021">2021</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">4K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT115M">115 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>7.7</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-5.png")}
                          alt="The Batman movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">The Batman</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">4K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT176M">176 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>7.9</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-6.png")}
                          alt="Uncharted movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Uncharted</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">HD</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT116M">116 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-7.png")}
                          alt="Death on the Nile movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Death on the Nile</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT127M">127 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>6.5</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/movie-8.png")}
                          alt="The King's Man movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">The King's Man</h3>
                      </a>

                      <time datetime="2021">2021</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">HD</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT131M">131 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="tv-series">
            <div class="container">
              <p class="section-subtitle">Best TV Series</p>

              <h2 class="h2 section-title">World Best TV Series</h2>

              <ul class="movies-list">
                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/series-1.png")}
                          alt="Moon Knight movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Moon Knight</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT47M">47 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.6</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/series-2.png")}
                          alt="Halo movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Halo</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT59M">59 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.8</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/series-3.png")}
                          alt="Vikings: Valhalla movie poster"
                        />
                      </figure>
                    </a>

                    <div class="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Vikings: Valhalla</h3>
                      </a>

                      <time datetime="2022">2022</time>
                    </div>

                    <div class="card-meta">
                      <div class="badge badge-outline">2K</div>

                      <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT51M">51 min</time>
                      </div>

                      <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>8.3</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="movie-card">
                    <a href="./movie-details.html">
                      <figure class="card-banner">
                        <img
                          src={require("./../../assets/images/series-4.png")}
                          alt="Money Heist movie poster"
                        />
                      </figure>
                    </a>

                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 class="card-title">Money Heist</h3>
                      </a>

                      <time dateTime="2017">2017</time>
                    </div>

                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>

                      <div class="duration">
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

          <section class="cta">
            <div class="container">
              <div class="title-wrapper">
                <h2 class="cta-title">Trial start first 30 days.</h2>

                <p class="cta-text">
                  Enter your email to create or restart your membership.
                </p>
              </div>

              <form action="" class="cta-form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  class="email-field"
                />

                <button type="submit" class="cta-form-btn">
                  Get started
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>

      <footer class="footer" >
        <div class="footer-top" >
          <div class="container" >
            <div class="footer-brand-wrapper">
              <a href="./index.html" class="logo">
                <img
                  src={Logo}
                  alt="Filmlane logo"
                />
              </a>

              <ul class="footer-list">
                <li>
                  <a href="./index.html" class="footer-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Movie
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    TV Show
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Web Series
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div class="divider"></div>

            <div class="quicklink-wrapper">
              <ul class="quicklink-list">
                <li>
                  <a href="#" className="quicklink-link">
                    Faq
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Help center
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Terms of use
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Privacy
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>

            <img
              src={require("./../../assets/images/footer-bottom-img.png")}
              alt="Online banking companies logo"
              className="footer-bottom-img"
            />
          </div>
        </div>
      </footer>

      <a href="#top" className="go-top" data-go-top>
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </div>
  );
}

export default Home;
