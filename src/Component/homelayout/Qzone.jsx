import React from 'react';
import swimmingImage from "../../assets/swimming.png";
import classimage from "../../assets/classimage.png"
import playground from "../../assets/playground.png"




const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h3 className='font-semibold'>Q-Zone</h3>
            <div className='flex flex-col justify-center items-center'>
                <img src={swimmingImage} alt="" />
                <img src={classimage} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;