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
                        <div className="company" style={{ fontWeight: "400"}}>Bynder</div>
                        <div className="location-date">Houston, TX | Oct 2021 - Present</div>    
                        <p>Currently accountable for two major product teams including vison, roadmap, development, and production releases for Capture (Upload, Download, Converters, Metadata Extraction, and more) and Migration & Onboarding tooling.</p>
                        <p>Previously supported Platform Storage through first MVP production release.</p>
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={true}
                            loop={true}
                            pagination={{
                                type: "fraction",
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

                <div className="experience-item ei-padding-top">
                    <div className="experience-content">
                        <div className="eyebrow">MACHINE LEARNING & AI</div>
                        <h4>Senior Staff Technical Program Manager</h4>
                        <div className="company" style={{ fontWeight: "400"}}>Baker Hughes</div>
                        <div className="location-date">Houston, TX | Apr 2021 - Oct 2021</div>
                        <p>Accountable for three early-stage machine learning products including vision, roadmap, development, and releases for Drilling Hazard Prediction, Predictive Failure Analysis, and Rate of Penetration.</p>
                        <p>In addition, managed two analytics proof of concept engagements with Saudi Aramco (Saudi Arabia) and YPF (Argentina).</p>

                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={true}
                            loop={true}
                            pagination={{
                                type: "fraction",
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

                <div className="experience-item ei-padding-top">
                    <div className="experience-content">
                        <div className="eyebrow">MARKETING TECHNOLOGY</div>
                        <h4>Senior Product Manager/ Product Manager</h4>
                        <div className="company">Baker Hughes</div>
                        <div className="location-date">Houston, TX | Apr 2019 - Apr 2021</div>
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={true}
                            loop={true}
                            pagination={{
                                type: "fraction",
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
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Delivered MVP implementation of BakerHughes.com in a 4-month timeframe to launch the new Baker Hughes brand followed by 12+ production releases thereafter</h5>
                            </SwiperSlide>
                                
                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Implemented a robust website architecture and maximized component reusability to support 2,000+ webpages</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Implemented mobile first design to increase mobile adoption by 35% compared to previous site</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Implemented "Talk to an expert" CTA on product pages to drive multi-million new lead generation</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Optimized components for SEO to increase organic traffic by 30% compared to previous site</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Introduced "Layout Builder" to enable marketers across four business units to create webpages visually at scale compared to previous site</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Implemented translations via Lingotek multi-language and retrofitted component design needs for Japenese and Russian</h5>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

                <div className="experience-item-bottom">
                    <div className="experience-content-bottom ei-padding-top">
                        <div className="eyebrow">INDUSTRIAL</div>
                        <h4>Commercial Leadership Program</h4>
                        <div className="company">General Electric</div>
                        <div className="location-date">Houston, TX & London, UK | Mar 2017 - Apr 2019</div>
                        <p>The <a href="https://jobs.gecareers.com/global/en/leadership-clp-page" className="text-link" target="_blank" rel="noopener noreferrer">Commercial Leadership Program</a> (CLP) is a 24-month intensive training program designed to produce future leaders in GE and its respective portfolio companies. Assigned to GE Oil & Gas (now known as Baker Hughes).</p>
                    </div>
                    <div className="experience-filler"></div>
                    <div className="experience-content-bottom ei-padding-top">
                        <div className="eyebrow">VENTURE CAPITAL</div>
                        <h4>Analyst</h4>
                        <div className="company">Brook Venture Partners</div>
                        <div className="location-date">Wakefield, MA | Jun 2016 - Feb 2017</div>
                        <p>Brook Venture Partners is a Boston-based venture capital firm that acquires growth stage companies. As an Analyst, I led due diligence for the 
                            acquisition of <a href="https://www.brookventure.com/brook-venture-partners-acquires-cole-information-services/" className="text-link" target="_blank" rel="noopener noreferrer">Cole Information</a>
                            and assisted with the due diligence related to the bolt-on acquisition of <a href="https://www.brookventure.com/brook-portfolio-company-apogee-services-acquires-dsm-computing-solutions/" className="text-link" target="_blank" rel="noopener noreferrer">DSM Computing Solutions.</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Experience;