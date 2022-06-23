import { useEffect, useState } from "react"
import { FaSun, FaMoon } from 'react-icons/fa'
import Router from "./Router"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { BrowserRouter } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button
       type="button"
       onClick={handleThemeSwitch}
       className="fixed z-10 right-2 top-2 bg-slate-500 text-lg p-2 rounded-full  " 
      >
        {theme === 'dark' ? <FaMoon className="w-full h-full text-white"></FaMoon>  : <FaSun className="w-full h-full text-white"></FaSun>}
        
      </button>
      <div className="bg:white dark:bg-slate-900">
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ApolloProvider>
      </div>
    </>
  )
}

export default App
