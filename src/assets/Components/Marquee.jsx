import { easeIn, easeInOut, motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div>
        <div 
         className="marquee">

            <motion.div className='text'
             initial={{x:"0"}}
             animate={{x:"-100%"}}
             transition={{ ease:"linear",duration:20,repeat:Infinity}}
             >yash •  यश  •   亚什  •   ヤッ• 
             </motion.div>

            <motion.div className='text'
             initial={{x:"0"}}
             animate={{x:"-100%"}}
             transition={{ ease:"linear", duration:20,repeat:Infinity}}
             >yash •  यश   •  亚什  • ヤッ• </motion.div> 
             
        </div>
    </div>
  )
}

export default Marquee