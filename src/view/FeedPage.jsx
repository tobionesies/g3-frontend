
     
import React, {useContext, useState} from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import RightMenu from '../components/RightMenu/RightMenu'
import Content from '../components/Content/Content'
import { useAppContext } from '../auth'
import UploadImage from "./UploadImage";
import MyImages from "./MyImages";
import SinglePost from "./SinglePost";
import Settingspage from "../components/Settings/settings";
 
const FeedPage = () => {
  const {state} = useAppContext()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', margin: '0', padding: '0', postion:'relative' }}>
    <LeftMenu />
    <div style={styles.main}>
      {state.screen.FEEDPAGE && <Content />}
      {state.screen.UPLOADIMAGE && <UploadImage />}
      {state.screen.MYIMAGE && <MyImages />}
      {state.screen.SINGLEPOST && <SinglePost />}
      {state.screen.SETTINGS && <Settingspage />}
      {/* <ImagePost /> */}
    </div>
    <RightMenu />
  </div>
 
  )
}

const styles = {
  main:{
    width: '100%',
    marginLeft: '250px',
    marginRight: '250px',
  }
}

export default FeedPage
 