import React from 'react'
import MenuItems from '../components/MenuItems/MenuItems'

function Menu({menuData}) {
  return (
    <div>
        <MenuItems menuData={menuData}/>   
    </div>
  )
}

export default Menu