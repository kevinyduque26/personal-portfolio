import React from "react";

import "./Experience.css"

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper Modules
import { Navigation, Pagination, Keyboard } from "swiper";


function Experience() {

    return (
        <div className="experience-container" id="experience">
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
                        <p>Currently accountable for two major product teams including vison, roadmap, cross-functional collaboration, development, and production releases for Capture (Upload, Download, Converters, Metadata Extraction, and more) and Migration & Onboarding tooling.</p>
                        <p>Previously supported Platform Storage through first MVP production release.</p>
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            navigation={true}
                            loop={true}
                            pagination={{
                                type: "fraction",
                            }}
                            keyboard={true}
                            modules={[Navigation, Pagination, Keyboard]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="eyebrow">MIGRATION & ONBOARDING</div>
                                <h5>Developed and pitched two directions for migration tooling that can accelerate customer migrations from Webdam (owned by Bynder) and other systems </h5>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="eyebrow">MIGRATION & ONBOARDING</div>
                                <h5>Implemented an asset service that makes the file transfer process an estimated 2-5x faster and less prone to error</h5>
                            </SwiperSlide>
                                
                            <SwiperSlide>
                                <div className="eyebrow">CAPTURE</div>
                                <h5>Developed and pitched a single stack vision for core services within the Capture domain to reduce feature fragmentation, current engineering overhead, and migrate customers to our most modern services </h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">CAPTURE</div>
                                <h5>Implemented improvement to Bynder's upload API specific for FIFA to increase image upload speed by 20% for FIFA World Cup Qatar 2022</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">PLATFORM STORAGE</div>
                                <h5>Developed and pitched a vision for platform storage from unified, to flexible, to intelligent storage</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">PLATFORM STORAGE</div>
                                <h5>Implemented the first phase of unified platform storage to 12% of the Bynder customer base </h5>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

                <div className="experience-item ei-margin-top">
                    <div className="experience-content">
                        <div className="eyebrow">MACHINE LEARNING & AI</div>
                        <h4>Senior Staff Technical Program Manager</h4>
                        <div className="company" style={{ fontWeight: "400"}}>Baker Hughes</div>
                        <div className="location-date">Houston, TX | Apr 2021 - Oct 2021</div>
                        <p>Accountable for three early-stage machine learning products including vision, roadmap, cross-functional collaboration, development, and releases for&nbsp; 
                            <a href="https://www.bakerhughes.com/oilfield-services-and-equipment-digital/well-planning/drilling-hazard-prevention" className="text-link" target="_blank" rel="noopener noreferrer">Drilling Hazard Prevention</a>,&nbsp;
                            <a href="https://www.bakerhughes.com/production/artificial-lift/artificial-lift-digital-solutions/remote-monitoring-and-surveillance-services/advanced-esp-predictive-failure-analytics" className="text-link" target="_blank" rel="noopener noreferrer">Predictive Failure Analysis</a>,
                            and Rate of Penetration.</p>
                        <p>In addition, managed two analytics proof of concept engagements with Saudi Aramco (Saudi Arabia) and YPF (Argentina).</p>
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            navigation={true}
                            loop={true}
                            pagination={{
                                type: "fraction",
                            }}
                            keyboard={true}
                            modules={[Navigation, Pagination, Keyboard]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="eyebrow">DRILLING HAZARD PREVENTION</div>
                                <h5>Developed and pitched vision for taking DHP from standalone to an Analytic-as-a-Service that would support real-time inputs from the field</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">DRILLING HAZARD PREVENTION</div>
                                <h5>Implemented new data types that were considered in the ML model to increase hazard prediction accuracy by 25% from validated dataset </h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">DRILLING HAZARD PREVENTION</div>
                                <h5>Implemented improved natural language processing methods to increase the amount of data that could be extracted from historical drilling reports for inputs into the ML model</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">DRILLING HAZARD PREVENTION</div>
                                <h5>Presented development progress to Equinor to ensure continued support and access to data needed for ML model development </h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">PREDICTIVE FAILURE ANALYSIS</div>
                                <h5>Gathered and assessed initial requirements to pitch and secure resourcing needed to start development on MVP implementation </h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">PREDICTIVE FAILURE ANALYSIS</div>
                                <h5>Developed and pitched vision for taking existing PFA POCs from standalone to an Analytic-as-a-Service that would support real-time inputs from the field </h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">RATE OF PENETRATION</div>
                                <h5>Assessed initial requirements to pitch and secure resourcing needed to start development on MVP implementation </h5>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

                <div className="experience-item ei-margin-top">
                    <div className="experience-content">
                        <div className="eyebrow">MARKETING TECH</div>
                        <h4>Senior Product Manager/ Product Manager</h4>
                        <div className="company">Baker Hughes</div>
                        <div className="location-date">Houston, TX | Apr 2019 - Apr 2021</div>
                        <p>Accountable for vision, roadmap, cross-functional collaboration, development, and releases for BakerHughes.com.</p>
                        <p>In addition, managed the enterprise implementation and operations for a portfolio of marketing tech including: &nbsp;
                            <a href="https://www.bynder.com/en/" className="text-link" target="_blank" rel="noopener noreferrer">Bynder</a>, &nbsp; 
                            <a href="https://www.bizzabo.com/" className="text-link" target="_blank" rel="noopener noreferrer">Bizzabo</a>, &nbsp;
                            <a href="https://www.demandbase.com/" className="text-link" target="_blank" rel="noopener noreferrer">Demandbase</a>, &nbsp;
                            <a href="https://6sense.com/" className="text-link" target="_blank" rel="noopener noreferrer">6sense</a>, and &nbsp;
                            <a href="https://www.semrush.com/" className="text-link" target="_blank" rel="noopener noreferrer">Semrush</a>.</p>
                    </div>
                    <div className="experience-swiper"> 
                        <Swiper
                            slidesPerView={1}
                            navigation={true}
                            loop={true}
                            pagination={{
                                type: "fraction",
                            }}
                            keyboard={true}
                            modules={[Navigation, Pagination, Keyboard]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Developed and pitched long-term vision to take BakerHughes.com from brand launch, to localization, to personalization</h5>
                            </SwiperSlide>

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
                                <h5>Implemented "Talk to an expert" CTA on product pages to drive multi-million new lead generation directly into Salesforce</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Optimized components for SEO to increase organic traffic by 30% compared to previous site</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Introduced "Layout Builder" to enable 60+ marketers to create webpages at scale compared to previous site</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BAKERHUGHES.COM</div>
                                <h5>Implemented translations via Lingotek multi-language and retrofitted component design for Japanese and Russian</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">MARKETING TECH</div>
                                <h5>Developed and pitched vision for app consolidation within marketing tech stack including investment needed to transition to Bynder from existing solution</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BYNDER</div>
                                <h5>Implemented Bynder across 4 business units and BakerHughes.com via Drupal integration for company-wide launch as new single-source for brand and marketing assets</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BYNDER</div>
                                <h5>Implemented and configured an efficient taxonomy to increase asset findability and downloads/day by 63% of brand and marketing assets compared to previous platform</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BIZZABO</div>
                                <h5>Implemented Bizzabo for the 2021 Baker Hughes Annual Meeting to support 48+ virtual sessions with 150+ speakers globally</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">BIZZABO</div>
                                <h5>Implemented user friendly event site architecture and contact us form to generate 146 new commercially viable leads directly into Salesforce</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="eyebrow">DEMANDBASE</div>
                                <h5>Integrated Demandbase with Salesforce and BakerHughes.com for insights on engagement and content performance from key accounts</h5>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

                <div className="experience-item-bottom">
                    <div className="experience-content-bottom ei-margin-top">
                        <div className="eyebrow">INDUSTRIAL</div>
                        <h4>Commercial Leadership Program</h4>
                        <div className="company">General Electric</div>
                        <div className="location-date">Houston, TX & London, UK | Mar 2017 - Apr 2019</div>
                        <p>The <a href="https://jobs.gecareers.com/global/en/leadership-clp-page" className="text-link" target="_blank" rel="noopener noreferrer">Commercial Leadership Program</a>&nbsp; 
                        (CLP) is a 24-month intensive training program designed to produce future leaders in GE and its respective portfolio companies. 
                        Assigned to GE Oil & Gas (now known as Baker Hughes).</p>
                        <p>Awards: (2x) Deliver results in an uncertain world – awarded and presented in-person during GE’s global training summit in Shanghai, China.</p>
                    </div>
                    <div className="experience-content-bottom ei-margin-top">
                        <div className="eyebrow">VENTURE CAPITAL</div>
                        <h4>Analyst</h4>
                        <div className="company">Brook Venture Partners</div>
                        <div className="location-date">Wakefield, MA | Jun 2016 - Feb 2017</div>
                        <p>Brook Venture Partners is a Boston-based venture capital firm that acquires growth stage companies. As an Analyst, I led due diligence for the 
                            acquisition of <a href="https://www.brookventure.com/brook-venture-partners-acquires-cole-information-services/" className="text-link" target="_blank" rel="noopener noreferrer">Cole Information</a> and
                            assisted with the due diligence related to the bolt-on acquisition of &nbsp; 
                            <a href="https://www.brookventure.com/brook-portfolio-company-apogee-services-acquires-dsm-computing-solutions/" className="text-link" target="_blank" rel="noopener noreferrer">DSM Computing Solutions.</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Experience;