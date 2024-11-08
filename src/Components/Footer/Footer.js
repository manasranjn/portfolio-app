import React from 'react'
import './Footer.css'
import Logo from '../../assets/favicon.png'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footer-logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='footer-copyright'>
                    <p>&copy; 2024 Manas Ranjan Bera. All Rights reserverd</p>
                </div>
                <ul className='footer-social-links'>
                    <li><a href="https://www.facebook.com/manas.bera.148/">
                        <i className='fa-brands fa-facebook-f'></i></a>
                    </li>
                    <li><a href="https://twitter.com/ManasRanjan0025">
                        <i className='fa-brands fa-twitter'></i></a>
                    </li>
                    <li><a href="https://www.instagram.com/manas._ranjan/">
                        <i className='fa-brands fa-instagram'></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/manas-ranjan-bera/">
                        <i className='fa-brands fa-linkedin'></i></a>
                    </li>
                    <li><a href="https://github.com/manasranjn">
                        <i className='fa-brands fa-github'></i></a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer