import React from 'react'
import '../CSS/sidebaroption.css';
function SidebarOption({title, Icon}) {
  return (
    <div className='sidebaroption'>
      {Icon && <Icon className='sidebaroption_icon' />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption
