import Link from 'next/link'
import { Button } from './ui/button'

//components
import Nav from './Nav'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
      <div className='container mx-auto gap-8 flex justify-center items-center '>
        <Link href="/">
        <h1 className='text-4xl font-semibold'>
            Okash <span className='text-accent'>.</span>
        </h1>
        </Link>
        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
            <Nav/>
            <Link href="/contact">
              <Button>Hire Me</Button>
            </Link>
        </div>
      

        <div className='bg-'>

        </div>
      </div>
    </header>
  )
}

export default Header