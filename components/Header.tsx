'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { Button } from './ui/button'

//components
import Nav from './Nav'
import MobileNav from './MobileNav'
import { Switch } from './ui/switch'
import { ModeToggle } from './ThemeToggle'


const Header = () => {

  
  const [theme, setTheme] = useState("")
  useEffect(() => {
    const defaultTheme = localStorage.getItem('theme') || '';
    setTheme(defaultTheme);
  }, []);
  

 

  useEffect(()=>{
    localStorage.setItem('theme' , theme)
    if(theme==="dark"){
     document.documentElement.classList.add("dark")
    }else{
     document.documentElement.classList.remove("dark")
    }
 }, [theme]);

 const handleThemeSwitch = ()=>{
  setTheme(theme === "dark" ? "light" : "dark");
 
}

  console.log(theme)
  return (
    <header className='py-8 xl:py-12 text-white '>
      <div className='container mx-auto flex justify-between items-center '>
        <Link href="/">
        <h1 className='text-4xl font-semibol text-black dark:text-white'>
            Okash <span className='text-accent'>.</span>
        </h1>
        </Link>
        {/* desktop nav & Hire me button */}
        <div className='hidden xl:flex items-center gap-8'>
            <Nav/>
           <ModeToggle/>
           {/* <Switch onClick={handleThemeSwitch}/> */}
              {/* <Button onClick={handleThemeSwitch} >Change theme</Button> */}
            
        </div>
      

       {/* mobile nav */}
        <div className='xl:hidden'>
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header
