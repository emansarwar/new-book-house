import React from 'react';
import img1 from './ImgBanner/banner1.png';
import img2 from './ImgBanner/banner2.png';
import img3 from './ImgBanner/banner3.png';
import img4 from './ImgBanner/banner4.png';
import img5 from './ImgBanner/banner5.png';
import img6 from './ImgBanner/banner7.png';

import BannerItem from './BannerItem';
// import './Banner.css'

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel banner-css w-full mb-5 py-2">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;
