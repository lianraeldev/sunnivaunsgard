import React from 'react';

const AboutMe = () => {
    return (
        <>
            <section id="about" className="about-area pt-200">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-image">
                                <img src="/images/sunniva-about.jpg" className="main-image" alt="image" />

                                <div className="shape">
                                    <img src="/images/instagram/insta-about-shape1.png" alt="image" />
                                    <img src="/images/instagram/insta-about-shape2.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">About Me</span>
                                <h2>I'm an Opera Singer and Front-End Developer from Norway based in Berlin.</h2>

                                <p>
                                    I started singing at the age of 9 and despite my young age I would soon sing and act in many different productions in my local community. Completed my Bachelor of music at NTNU in Trondheim with Prof. Kåre Bjørkøy as voice teacher and moved afterwards to Berlin to study for my master’s degree at the Hanns Eisler HfM under Prof. Norma Sharp. I have partaken in many opera and music theater productions and performances through the course of her career.
                                </p>
                                <p>I have sung roles like: Mrs Peachum / THE THREEPENNY OPERA, Frau Natella / THE CAUCASIAN CHALK CIRCLE, Nick Bottom / A MIDSUMMER NIGHT’S DREAM, Lucie / OLAV ENGELBREKTSSON, Johanna / SWEENEY TODD, Rapunzel / INTO THE WOODS, Maria von Trapp / THE SOUND OF MUSIC, Papagena / THE MAGIC FLUTE, Frau mit der grünen Seidenbluse / MY COORPORATE IDENTITY, and Poppea / AGRIPPINA.
                                    Also have a rich concert repertoire and has sung on a lot of different stages in Europe as well as in Asia. Only in Berlin I have for example sung in the Berliner Philharmonie, Deutsche Oper and Staatsoper unter den Linden. Her love for contemporary music lead her to win the 2nd price at the John Cage competition (voice edition).
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;