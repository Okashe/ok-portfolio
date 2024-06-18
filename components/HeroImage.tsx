'use server'
import heroImage from '@/public/pic-1.png'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className=" shadow-xl">
      <figure className="relative  md:scale-100 transition-all duration-300 cursor-pointer border border-x-amber-700 bg-gradient-to-r from-slate-900 via-amber-100 to-slate-900 rounded-tl-full max-w-lg">
        <Image
          src="http://1.bp.blogspot.com/-ZPf7iCGtUOw/UhM_h8IingI/AAAAAAAAEXY/nbm1QcD4aa0/s1600/4.jpg"
          className="border border-x-amber-700  rounded-full " 
          alt='hero img'
          fill

         />
       
      </figure>
          
    </div>
  )
}

export default HeroImage