import React, { useState } from 'react'
import './Diwali-24.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Diwali2024 = () => {

  const [index , setIndex] = useState(0);

  const toggleForward = (()=>{
    if(index!==7){
      setIndex(index+1);
    }
  })
  const toggleBackward = (()=>{
    if(index!==0){
      setIndex(index-1);
    }
  })
  return (
    <div className='diwali-24 flex-col'>
      <div className={`oye-sonali ${(index===0)?"":"none"} `}>Oye Sonali</div>
      <div className={`oye-sonali ${(index===1)?"":"none"} `}>do you know?</div>
      <div className={`oye-sonali ${(index===2)?"":"none"} `}>Why this Diwali is special for me?</div>
      <div className={`oye-sonali ${(index===3)?"":"none"} `}>Because I am in love with someone</div>
      <div className={`oye-sonali ${(index===4)?"":"none"} `}>and that is you.</div>
      <div className={`oye-sonali ${(index===5)?"":"none"} `}>I hope this Diwali</div>
      <div className={`oye-sonali ${(index===6)?"":"none"} `}>brings a lot of happiness for you</div>
      <div className={`oye-sonali ${(index===7)?"":"none"} `}>Wishing you a very happy Diwali Sonali❤️ </div>
      <div className='back-next-btn'>
        <a className='primary-btn' onClick={toggleBackward}><ArrowBackIcon/><span>Back</span></a>
        <a className='primary-btn' onClick={toggleForward}><span>Next</span><ArrowForwardIcon/></a>
      </div>
    </div>
  )
}

export default Diwali2024