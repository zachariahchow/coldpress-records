import React from 'react';
import bannerDefault from '../../images/sphaeras-banner-1.jpg';

const LandingBanner = () => {

    //CSS Classes
    const landingBannerContainerClasses = ['w-full', 'py-4', 'flex', 'justify-between', 'items-center', 'bg-gray-200'];
    //

    return (
        <div className={"landing-banner__container " + landingBannerContainerClasses.join(' ')}>
            <div className="landing-banner-img__container">
                <img src={bannerDefault} alt="" className="landing-banner-img"/>
            </div>
        </div>
    );
}

export default LandingBanner;