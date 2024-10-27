import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Services = () => {
  return (
    <div className=' bg-cyan-200 py-8 px-4 bg-center bg-cover'>
        <section className='max-w-4xl max-auto'>
        
            <h1 className='font-extrabold text-center text-blue-950 mb-6 text-6xl'>Services</h1>
          <ul className='text-center space-y-6'>
            <li><Link href="https://github.com/saafiyawaseem/Milestone1-2.git/">Github Project</Link></li>
            
            <li><Link href="ttps://vercel.com/saafiyawaseems-projects/first-portfolio/">Vercel Project</Link></li>
            </ul> 
            <div>
                <h2 className='text-center font-bold mb-4 text-blue-950 text-4xl'> Our Technologies</h2>
                <div className='flex-justify-center gap-4 flex-wrap'>
                <Image src="/images/git.png" alt="Git Logo" width={100} height={100} className=' object-contain ml-40 py-4 '/> 
                <Image src="/images/vercellog.png" alt="Vecel Logo" width={100} height={100} className='object-contain ml-40 mt-0 py-2'/>
                
                </div>
                
              
                </div>    

            </section>
    </div>
  )
}

export default Services
