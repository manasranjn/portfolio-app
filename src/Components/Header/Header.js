import React from 'react';
import './Header.css';
import Typical from 'react-typical';
import profileImg from '../../assets/ProfileImg.png'

export const Header = () => {
    return (
        <div className='header-container'>
            {/* Header Content */}
            <div className='header-content'>
                <h1>Hey! Am</h1>
                <h2 className='fullname'>Manas Ranjan Bera</h2>
                <h2>
                    I'm a {""}
                    <Typical
                        steps={[
                            'Frontend Developer 💻', 1000,
                            'React Developer 🚀', 1000, 'Full Stack Developer ✅', 1000
                        ]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h2>
                <p>I'm an MCA graduate with experience as a Web Developer Intern at Softech18. Skilled in Java, HTML, CSS, JavaScript, ReactJS, and SQL. Currently, pursuing Java Full Stack Development at JSpider, Bengaluru.</p>
                {/* Payment Links */}
                <div className='header-payment-container'>
                    <button>Hire Me</button>
                    <i className='fa-brands fa-paypal'></i>
                    <i className='fa-brands fa-cc-visa'></i>
                    <i className='fa-brands fa-cc-mastercard'></i>
                    <i className='fa-brands fa-cc-amex'></i>
                </div>
            </div>
            {/* Image Container */}
            <div className='profile-img-container'>
                <img src={profileImg} alt='profile' />
                <div className='circle-1'></div>
                <div className='circle-2'></div>
            </div>
        </div>
    )
}
