import React from 'react'
import './style.css';
import PictureOne from '../assets/images/picture-one.png';
import PictureTwo from '../assets/images/picture-two.png';
import PictureThree from '../assets/images/picture-three.png';
import PictureFour from '../assets/images/picture-four.png';
import PictureFive from '../assets/images/picture-five.png';
import PictureSix from '../assets/images/picture-six.png';
import Plus from '../assets/images/plus-logo.svg';
import VectorOne from '../assets/images/vector-one.png';
import VectorTwo from '../assets/images/vector-two.png';
import VectorThree from '../assets/images/vector-three.png';
import Arrow from '../assets/images/arrow.png';

const Banner = () => {
    return (
        <div className='lyt-banner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='banner-lyt'>
                            <h1 className='banner-heading wow fadeInUp' data-wow-duration="0.6s">Empowering the Digital Era: <span className='txt-block'>Decentarlizing Entertainment</span></h1>
                            <p className='banner-para wow fadeInUp' data-wow-duration="0.7s">Join the world’s first DePIN: Revolutionizing Content Streaming with faster, Safer <span className='txt-block'>and Cheaper Access</span></p>
                            <button className='banner-btn wow fadeInUp' data-wow-duration="0.8s">Coming Soon <img src={Arrow} alt="arrow" className='img-fluid' /></button>
                            <div className='collage-lyt'>
                                <img src={PictureOne} className='img-fluid typ-picture-one wow fadeInUp' data-wow-duration="1s" alt="pictureOne" />
                                <img src={PictureTwo} className='img-fluid typ-picture-two wow fadeInUp' data-wow-duration="1.2s" alt="pictureOne" />
                                <img src={PictureThree} className='img-fluid typ-picture-three wow fadeInUp' data-wow-duration="1.4s" alt="pictureOne" />
                                <img src={PictureFour} className='img-fluid typ-picture-four wow fadeInUp' data-wow-duration="1.6s" alt="pictureOne" />
                                <img src={PictureFive} className='img-fluid typ-picture-five wow fadeInUp' data-wow-duration="1.8s" alt="pictureOne" />
                                <img src={PictureSix} className='img-fluid typ-picture-six wow fadeInUp' data-wow-duration="2s" alt="pictureOne" />
                                <img src={VectorOne} className='img-fluid vector-one wow fadeInUp' data-wow-duration="1.2s" alt="pictureOne" />
                                <img src={VectorTwo} className='img-fluid vector-two wow fadeInUp' data-wow-duration="1.6s" alt="pictureOne" />
                                <img src={VectorThree} className='img-fluid vector-three wow fadeInUp' data-wow-duration="1.8s" alt="pictureOne" />
                            </div>
                        </div>
                        <div className='cards-lyt'>
                            <div className='card wow fadeInUp' data-wow-duration="0.8s">
                                <div className='typ-upper-flex'>
                                    <h4 className='card-heading'>No. of Node Operators</h4>
                                    <img src={Plus} alt="plus" />
                                </div>
                                <p className='number'>2000</p>
                            </div>
                            <div className='card wow fadeInUp' data-wow-duration="1s">
                                <div className='typ-upper-flex'>    
                                    <h4 className='card-heading'>Data Transferred in TB <span className='typ-16'>(last 30 days)</span></h4>
                                    <img src={Plus} alt="plus" />
                                </div>
                                <p className='number'>12,000</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner