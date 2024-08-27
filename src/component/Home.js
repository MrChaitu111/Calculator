import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  return (
<>
    <div className='calculator'>
        <button className='btn btn-warning m-25%' onClick={() =>navigate("/Calculator")}>Start To Continue</button>
    </div>
</>
  )
}

export default Home
