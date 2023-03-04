import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Banner = () => {
    return (
        <div id="home" className="main-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="main-banner-content">
                            <h1>Hi, I'm <br /> Sunniva</h1>
                            <p>An Opera Singer with a warm soprano voice.</p>

                            <form onSubmit={e => e.preventDefault()}>
                                <input type="text" className="input-newsletter" placeholder="Enter your email address to get" />
                                <button type="submit">Next Concerts</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="main-banner-image">
                            <ScrollAnimation initiallyVisible={true} animateIn="fadeInUp" delay={100} >
                                <img src="/images/sunniva-main.jpg" className="main-image" alt="image" />
                            </ScrollAnimation>

                            <div className="banner-shape">
                                <ScrollAnimation initiallyVisible={true} animateIn="fadeInLeft" delay={100}>
                                    <img src="/images/home/line-bg1.png" alt="image" />
                                </ScrollAnimation>

                                <ScrollAnimation initiallyVisible={true} animateIn="fadeInRight" delay={100}>
                                    <img src="/images/home/line-bg2.png" alt="image" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;