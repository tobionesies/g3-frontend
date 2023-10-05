import React from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import RightMenu from '../components/RightMenu/RightMenu'
import Content from '../components/Content/Content'

const MyImages = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', margin: '0', padding: '0' }}>
    <LeftMenu />
    
    
     <Content />
    <RightMenu />
  </div>
  )
}

export default MyImages
