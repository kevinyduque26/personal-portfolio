import React from "react";

import "./Experience.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard } from "swiper";


function Experience() {

    return (
        <div className="experience-container">
            <div className="experience-body">

                <div className="experience-title">
                    <h2>Experience</h2>            
                </div>

                <div className="experience-item">
                    <div className="experience-content">
                        <div className="eyebrow">DIGITAL ASSET MANAGEMENT</div>                    
                        <h4>Senior Product Manager</h4>
                        <p>Bynder | Oct 2021 - Present</p>
                        <div className="location">Houston, TX</div>    
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            keyboard={true}
                            modules={[Navigation, Pagination, Keyboard]}
                            className="mySwiper"
                            breakpoints={{
                                1000: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <h5>Slide 1</h5>
                            </SwiperSlide>
                                
                            <SwiperSlide>
                                <h5>Slide 2</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h5>Slide 3</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h5>Slide 4</h5>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-content">
                        <div className="eyebrow">MACHINE LEARNING & AI</div>
                        <h4>Senior Staff Technical Program Manager</h4>
                        <p>Baker Hughes</p>
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            keyboard={true}
                            modules={[Navigation, Pagination, Keyboard]}
                            className="mySwiper"
                            breakpoints={{
                                1000: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <h5>Slide 1</h5>
                            </SwiperSlide>
                                
                            <SwiperSlide>
                                <h5>Slide 2</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h5>Slide 3</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h5>Slide 4</h5>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-content">
                        <div className="eyebrow">MARKETING TECHNOLOGY</div>
                        <h4>Senior Product Manager/ Product Manager</h4>
                        <p>Baker Hughes</p>
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            keyboard={true}
                            modules={[Navigation, Pagination, Keyboard]}
                            className="mySwiper"
                            breakpoints={{
                                1000: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <h5>Slide 1</h5>
                            </SwiperSlide>
                                
                            <SwiperSlide>
                                <h5>Slide 2</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h5>Slide 3</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h5>Slide 4</h5>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="experience-item-bottom">
                    <div className="experience-content-bottom">
                        <div className="eyebrow">INDUSTRIAL</div>
                        <h4>Commercial Leadership Program</h4>
                        <p>General Electric</p>
                    </div>
                    <div className="experience-content-bottom">
                        <div className="eyebrow">VENTURE CAPITAL</div>
                        <h4>Analyst</h4>
                        <p>Brook Venture Partners</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Experience;