import {motion} from 'framer-motion';


//variants
const staiAnimation = {
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%"
    },
    exit:{
        top:["100%", "0%"],
    },
};


// calculate the reverse index for staggered delay

const reverseIndex = (index:number)=>{
  const totalSteps = 6;
  return totalSteps - index -1;

}

const Stairs = () => {
  return (
   <>

   {/* render 6 motion divs each represting a step of the the stairs. */}


   {/* Each di will have the same animation defined by the StairAnimation object. */}
   {/* Th delay for each div is calculated syna,ically based on it's revrsed index */}
   {/* Creating a staggered effect with decreasing delay for each subsequent step */}

    {[...Array(6)].map((_, index)=>{
       return <motion.div key={index} variants={staiAnimation} initial="initial" animate="animate" exit="exit" 
        transition={{
            duration:0.4,
            ease:'easeInOut',
            delay: reverseIndex(index)*0.1,
        }}
        className='h-full w-full bg-white relative'
        />
    })}
   </>
  )
}

export default Stairs
