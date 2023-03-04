import React from 'react';

const Events = () => {
    return (
        <section className="followers-area bg-f9f9f9 pt-100">
            <div className="container">
                <div className="section-title">
                    <h2>Events</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-lg-6 col-lg-6">
                        <div className="single-followers-box">
                            <a href='https://www.ballhauswedding.de/veranstaltungen'><h4> So 30.4. 14:00 Uhr | Familienkonzert - Tänze des Barock</h4></a>
                            <a href='https://goo.gl/maps/H4V6fXNQaJYMd4kY9'><span className="sub-title d-block">Kindertheater | Ballhaus Wedding</span></a>
                            <img src="/images/30_04_23_familien_konzert.jpg" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="shape1"><img src="/images/home/circle-shape1.png" alt="image" /></div>
        </section >
    );
}

export default Events;