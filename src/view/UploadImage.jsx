import React from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import Content from '../components/Content/Content'
import RightMenu from '../components/RightMenu/RightMenu'

const UploadImage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', margin: '0', padding: '0' }}>
      <LeftMenu />
        <Content contentValue={'upload'}/>
      <RightMenu />
    </div>
  )
}

export default UploadImage
