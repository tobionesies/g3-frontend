import React from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import RightMenu from '../components/RightMenu/RightMenu'

const Settings = () => {
  return (  
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', margin: '0', padding: '0' }}>
        <LeftMenu />
            <div style={{ padding: '20px'}}>
                <h3>Settings</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente saepe ab accusamus aut fugit quaerat, placeat nemo vero vitae reprehenderit facere ratione eius iusto ipsa deleniti ex voluptatem totam eaque?
                </p>
            </div>
        <RightMenu />
    </div>
  )
}

export default Settings
