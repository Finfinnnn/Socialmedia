import React from 'react'
import './Newpost.css';
// import {Link} from 'react-router-dom'

function Newpost() {
  return (
    <div className='container'>
        <div className='header'>Create New Post</div>
        <div className='profile'>
            <div className='name'>Name</div>
        </div>
        <div className='box-1'>
            <div className='text-1'>What are you up to?</div>
        </div>
        <div className='box-2'>
            <div className='plus'><svg width={46} height={46} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
            </svg></div>
            <div className='text-2'>Upload some pics</div>   
        </div>
        <button className='button'>Post</button>
    </div>
  )
}
export default Newpost;