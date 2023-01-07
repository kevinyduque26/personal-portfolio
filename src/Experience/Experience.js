import React from "react";

import "./Experience.css"

import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function Experience() {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }



    return (
        <div className="experience-container">

            <div className="experience-body">

                <div className="experience-content">
                    <h2>My experience</h2>
                </div>

                <Slider {...settings}>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                    <div>
                                        <h3>7</h3>
                                    </div>
                                    <div>
                                        <h3>8</h3>
                                    </div>
                                </Slider>

                <div class="timeline">
                    <div class="outer">
                        <div class="card">
                            <div class="info">
                                <div className="title-date">
                                    <h3 class="title">Title 1</h3>
                                    <p>Test</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                            </div>
                        </div>
                        <div class="card">
                            <div class="info">
                                <h3 class="title">Title 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="info">
                                <h3 class="title">Title 3</h3>
                                <p>Lorem ipsum dolor skjfgnbkj difjgh jifbg ikjdsfh gkjh sdfkjg dskfngh dksjfbnvnjbf bgjh kfg jhbknfglkbjd;kfgbnlkg bkldfngmlb di;lfvjb klmfvnblm. cxj;lfgkmn lkfgnmlmfgnmbkl gtrmit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="info">
                                <h3 class="title">Title 4</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="info">
                                <h3 class="title">Title 5</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                    </div>

                </div>
                
         

            </div>

        </div>
    )
};

export default Experience;