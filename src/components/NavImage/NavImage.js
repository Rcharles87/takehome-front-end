import './NavImage.css'
import { Button } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react'

function NavImage() {
  return (
    <div className='NavImage'>
        <h3>Browse Our Menu</h3>
        <div className='NavImage__text'>
            <div>
            <img src='../Assets/Menu.png' alt="" />
            <Button>View Full Menu</Button>
            </div>
        </div>
    </div>
  )
}

export default NavImage