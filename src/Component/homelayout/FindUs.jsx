import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn w-full bg-base-100 justify-start join-item"><FaFacebook/> Facebook</button>
                <button className="btn w-full bg-base-100 justify-start join-item"><FaTwitter/> Twitter</button>
                <button className="btn w-full bg-base-100 justify-start join-item"><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;