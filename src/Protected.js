import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const navigate = useNavigate();
    const {Component} = props;
    useEffect(() => {
        const login = localStorage.getItem('login');
        if(!login) {
            const timer = setTimeout(() => {
                navigate('/login')
            }, 500)
            return() => clearTimeout(timer)
        }
    }, [navigate])
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
