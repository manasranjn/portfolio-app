import React from 'react'
import './Works.css'
import project1 from '../../assets/Project-1.png'
import project2 from '../../assets/Project-2.png'
import project3 from '../../assets/Project-3.png'
import project4 from '../../assets/Project-4.png'
import project5 from '../../assets/Project-5.png'
import project6 from '../../assets/Project-6.png'

const Works = () => {
    return (
        <div className='works-container'>
            <h1>My Recent Works</h1>
            <div className='works-list-container'>
                <div className='works-item'>
                    <img src={project1} alt='project1' />
                </div>
                <div className='works-item'>
                    <img src={project2} alt='project2' />
                </div>
                <div className='works-item'>
                    <img src={project3} alt='project3' />
                </div>
                <div className='works-item'>
                    <img src={project4} alt='project4' />
                </div>
                <div className='works-item'>
                    <img src={project5} alt='project5' />
                </div>
                <div className='works-item'>
                    <img src={project6} alt='project6' />
                </div>
            </div>
        </div>
    )
}

export default Works