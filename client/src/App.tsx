import React from 'react'
import GlobalStyle from './Components/GlobalStyle'
import Header from './Components/Header'
import MainScreen from './Components/MainScreen'

const App :React.FC= () => {
  return (
    <div> 
      <GlobalStyle />
      <Header />
      <MainScreen />
      
    </div>
  )
}

export default App
