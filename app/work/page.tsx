'use client';

import {motion} from 'framer-motion';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"

import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import {
   Tooltip ,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger
  } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

  const projects = [
    {
      num:"01",
      category: "frontend",
      title: "project 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quis in, vitae impedit magni exercitationem cum culpa nemo accusamus praesentium quia explicabo recusandae omnis blanditiis ratione, similique.",
      stack: [{name:"Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
      image:"https://wallpaperaccess.com/full/5137816.jpg",
      live:"",
      github:""
    },
    {
      num:"02",
      category: "fullstack",
      title: "project 2",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quis in, vitae impedit magni exercitationem cum culpa nemo accusamus praesentium quia explicabo recusandae omnis blanditiis ratione, similique.",
      stack: [{name:"Next.js"}, {name: "tailwind.css"}, {name: "Node.js"}],
      image:"https://wallpaperaccess.com/full/5137787.png",
      live:"",
      github:""
    },
    {
      num:"03",
      category: "frontend",
      title: "project 3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quis in, vitae impedit magni exercitationem cum culpa nemo accusamus praesentium quia explicabo recusandae omnis blanditiis ratione, similique.",
      stack: [{name:"Next.js"},{name:"Tailwindcss"}],
      image:"https://workfeelsgood.com/wp-content/uploads/2019/01/shutterstock_713811001_editorial-project-manager-1000x667-1.jpg",
      live:"",
      github:""
    }
  ]


const  Work= () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper:any)=>{
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex])
  }
  
  return (
    <motion.section
     initial={{opacity: 0, backgroundColor: 'red'}}
     animate={{opacity: 1, backgroundColor: '' ,transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
     className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
         <div className='flex flex-col xl:flex-row gap-[30px]'>
           <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
             <div className='flex flex-col gap-[30px]'>
                {/* outline num*/}
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline2 dark:text-outline'>
                  {project.num}
                </div>
                {/* project category */}
                <div>
                  <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                    {project.category} project
                  </h2>

                  {/* project decription */}
                  <p className='dark:text-white/60'>{project.description}</p>
                  {/* stack */}
                  <ul className='flex gap-4'>
                    {project.stack.map((item, index)=>{
                      return <li key={index} className='text-xl text-accent'>
                           {item.name}
                           {/* remove the last comma */}
                           {index !== project.stack.length-1 && ","}
                      </li>
                    })}
                  </ul>
                  {/* border */}
                  <div className='border dark:border-white/20'></div>
                  {/* butons */}
                  <div className='flex items-center gap-4'>
                    {/* live project button */}
                    <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='dark:text-white text-3xl group-hover:text-accent'/>
                          <TooltipContent>
                            <p>Live projects</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                    </Link>
                    {/* github project button */}
                    <Link href={project.github} >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='dark:text-white text-3xl group-hover:text-accent'/>
                          <TooltipContent>
                            <p>Github repository</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                    </Link>
                  </div>
                </div>
             </div>
           </div>
           <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className='xl:h-[520px] mb-12'>
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className='w-full '>
                   <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                     {/* overlay */}
                     <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                     {/* image */}
                     <div className='relative w-full h-full'>
                       <Image
                         src={project.image}
                         alt=''
                         fill
                         className='object-cover'
                       />
                     </div>
                   </div>
                  </SwiperSlide>
              })}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calculate(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles='text-gray-500'
             />
            </Swiper>
           </div>
         </div>
      </div>
    </motion.section>
  )
}

export default Work
