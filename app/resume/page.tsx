"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaRegIdBadge, FaPersonBooth} from 'react-icons/fa'

import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

// about data

const about = {
  title: "About me",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aliquid iste placeat possimus iusto natus, eligendi expedita modi harum, esse, illum corrupti cupiditate ab? Distinctio, est? Inventore esse eveniet explicabo.",
  info:[
    {
      fieldname:'Name',
      fieldValue:'Okash Mohidin'
    },
    {
      fieldname:'Phone',
      fieldValue:'(204)-901-1350'
    },
    {
      fieldname:'Experience',
      fieldValue:'12+ Years'
    },
    {
      fieldname:'Skype',
      fieldValue:'ok.01'
    },
    {
      fieldname:'Nationality',
      fieldValue:'Somali'
    },
    {
      fieldname:'Email',
      fieldValue:'ok.01@gmail.com'
    },
    {
      fieldname:'Freelance',
      fieldValue:'Avaialable'
    },
    {
      fieldname:'languages',
      fieldValue:'English,Somali, Kiswahili & Arabic'
    },
  ]
}

const experience = {
  icon:<FaRegIdBadge/>,
  title:'My experience',
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quo doloribus consequuntur nulla mollitia magni officiis similique necessitatibus quaerat. Vitae porro quas ex quod. Eaque minima excepturi aut sapiente nulla.",
  items:[
    {
      company:'Tech Salutations Inc.',
      position:'Full Stack Developer',
      duration:'2022 - Present'
    },
    {
      company:'Web Design Studio',
      position:'Front-End Developer Intern',
      duration:'Summer 2021'
    },
    {
      company:'E-commerce Startup',
      position:'Full Stack Developer',
      duration:'2020 - 2021'
    },
    {
      company:'Tech Academy',
      position:'Teaching Assistant',
      duration:'2019 - 2020'
    },
    {
      company:'Software Development Firm',
      position:'Junior Developer',
      duration:'2017 - 2018'
    },
  ]
}

const education = {
 icon:<FaPersonBooth/>,
 title: 'My education',
 description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae fuga recusandae voluptas maiores distinctio velit quasi nesciunt at, pariatur possimus asperiores corrupti ipsam aliquam, sint dicta ad vel. Iste",
 items:[
  {
    institution:'Online Course Platform',
    degree:'Fullstack Web Development Bootcamp',
    duration:'2023'
  },
  {
    institution:'Codecademy',
    degree:'Frontend Track',
    duration:'2022'
  },
  {
    institution:'Online Course',
    degree:'Programming Course',
    duration:'2020 - 2021'
  },
  {
    institution:'Tech institute',
    degree:'Certified Web Developer',
    duration:'2019'
  },
  {
    institution:'Design School',
    degree:'Diploma in Graphic Design',
    duration:'2016 - 2018'
  },
  {
    institution:'Community College',
    degree:'Associate Degree in Computer Science',
    duration:'2014 - 2016'
  }
 ]
}

const skills ={
  title: 'My Skills',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint sapiente explicabo porro eaque, fugit ullam debitis. Nostrum, excepturi ut delectus quos praesentium dolores, dicta iure nesciunt doloremque atque dolorem?',
  skillList: [
    {
      icon:<FaHtml5/>,
      name:'html 5'
    },
    {
      icon:<FaCss3/>,
      name:'css 3'
    },
    {
      icon:<FaJs/>,
      name:'javascript'
    },
    {
      icon:<FaReact/>,
      name:'react.js'
    },
    {
      icon:<SiNextdotjs/>,
      name:'next.js'
    },
    {
      icon:<SiTailwindcss/>,
      name:'tailwind.css'
    },
    {
      icon:<FaNodeJs/>,
      name:'node.js'
    },
    {
      icon:<FaFigma/>,
      name:'figma'
    }
  ]
}
const content = {

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs' 
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip' 
import {ScrollArea} from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'
import { IconCloudDemo } from '@/components/IconCloud'


const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity:1,
        transition:{
          delay:2.4,
          duration:0.4,
          ease:'easeIn'
        },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
        <div className='container mx-auto'>
           <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
             <TabsList className='flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6'>
               <TabsTrigger value='experience'>Experience</TabsTrigger>
               <TabsTrigger value='education'>Education</TabsTrigger>
               <TabsTrigger value='skills'>Skills</TabsTrigger>
               <TabsTrigger value='about'>About me</TabsTrigger>
             </TabsList>

             {/* content */}
             <div className='min-h-[70vh] w-full'>
               <TabsContent value='experience' className='w-full'>
                 <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                   <h3 className='text-4xl font-bold'>{experience.title}</h3>
                   <p className='max-w-[600px] dark:text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                   <ScrollArea className='h-[400px]'>
                     <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item, index)=>{
                        return <li key={index} className='dark:bg-[#15151f] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                           <span className='text-accent'>{item.duration}</span>
                           <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                           <div className='flex items-center gap-3'>
                             {/* dot */}
                             <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                             <p className='dark:text-white/60'>{item.company}</p>
                           </div>
                        </li>
                      })}
                     </ul>
                   </ScrollArea>
                 </div>
               </TabsContent>
               {/* education */}
               <TabsContent value='education' className='w-full'>
               <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                   <h3 className='text-4xl font-bold'>{education.title}</h3>
                   <p className='max-w-[600px] dark:text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                   <ScrollArea className='h-[400px]'>
                     <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {education.items.map((item, index)=>{
                        return <li key={index} className='dark:bg-[#15151f] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                           <span className='text-accent'>{item.duration}</span>
                           <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                           <div className='flex items-center gap-3'>
                             {/* dot */}
                             <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                             <p className='text-white/60'>{item.institution}</p>
                           </div>
                        </li>
                      })}
                     </ul>
                   </ScrollArea>
                 </div>
               </TabsContent>
               <TabsContent value='skills' className='w-full'>
               <div className='flex flex-col gap-[1rem] p-4 text-center xl:text-left'>
                   <h3 className='text-4xl font-bold'>{skills.title}</h3>
                   <p className='max-w-[600px] dark:text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                   <ScrollArea className='h-[400px]'>
                    <IconCloudDemo/>
                     {/* <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                      {skills.skillList.map((skill, index)=>{
                        return <li key={index} className='bg-gray-100 dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                           <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px]  rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                  {skill.icon}
                                 </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                           </TooltipProvider>
                        </li>
                      })}
                     </ul> */}
                   </ScrollArea>
                 </div>
               </TabsContent>
               <TabsContent value='about' className='w-full text-center xl:text-left'>
               <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                   <h3 className='text-4xl font-bold'>{about.title}</h3>
                   <p className='max-w-[600px] dark:text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                   <ScrollArea className='h-[400px]'>
                     <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                      {about.info.map((item, index)=>{
                        return(
                          <li 
                           key={index}
                           className='flex items-center xl:justify-start gap-4'
                           >
                           <span className='dark:text-white/60'>{item.fieldname}</span>
                           <span className='text-xl'>{item.fieldValue}</span>
                          
                        
                        </li>
                        ) 
                      })}
                     </ul>
                   </ScrollArea>
                 </div>
               </TabsContent>
             </div>
           </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume
