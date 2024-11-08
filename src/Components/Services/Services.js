import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-list-container'>
                {/* Decription */}
                <div className='services-desc-container'>
                    <h1>My <span>Services</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <button>Hire Me</button>
                </div>
                {/* Items */}
                <div className='services-items-container'>
                    <div className='services-item'>
                        <i className='fa-solid fa-code'></i>
                        <div className='item-desc'>
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                    </div>
                    <div className='services-item'>
                        <i className='fa-solid fa-desktop'></i>
                        <div className='item-desc'>
                            <h3>Desktop Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                    </div>
                    <div className='services-item'>
                        <i className='fa-solid fa-tablet-alt'></i>
                        <div className='item-desc'>
                            <h3>App Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services