import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
  const [userLoginName, setUserLoginName] = useState('name');

  const [ImageFilter, setImageFilter] = useState('Show all');

  const [LoginId, setLoginId] = useState('LikeByAlex');
  
  const handleLogin = async () => {
    console.log('handleLogin')

    try {
      // fetch accessToken...
      console.log('logging in')
    } catch(error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    console.log('handleLogout')

    try {
      console.log('logging out')
    } catch(error) {
      console.log(error)
    }
  }

  const isLoggedIn = async () => {
    console.log('isLoggedIn')

    try {
      console.log('is logged in')
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <AuthContext.Provider value={{userLoginName, setUserLoginName, handleLogin, handleLogout,
     ImageFilter, setImageFilter, LoginId }}>
      {children}
    </AuthContext.Provider>
  )

}