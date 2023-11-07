import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { allCitas } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Landing = () => {
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(allCitas())
},[])
  return (
    <div className='py-60'>
        <Link to={'/booking'}>
        <button className='bg-green-700 mx-4 rounded-full text-white px-3 py-1'>Book now</button>
        </Link>
        <Link to={'/admin/dashboard'}>
        <button className='bg-green-700 mx-4 rounded-full text-white px-3 py-1'>Secretary Portal</button>
        </Link>
    </div>
  )
}

export default Landing