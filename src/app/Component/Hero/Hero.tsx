

import Image from 'next/image';


const Hero = () => {
  return (
    <div style={{textAlign: "center"}}> 
        <section className='mt-0 bg-gray-600 py-10'>

          <Image 
          src="/images/laptop.jpg"
          alt="laptop"
          height={400}
          width={600}
          loading='lazy'
           className='ml-80'/>
           </section>
           <section className='inline-flex justify-center bg-gray-600 py-8'>

        <p className=' text-white px-40 justify-center font-extrabold mt-0 mb-4'>  <b>hi</b>
     I am saafiyawaseem
     Frontend developer !
     I'm  a  programmer
      & also pursuing development.Anspiring AI Enthusiast ,learnt Typescript,Javascript & exploring
            python ,participant in Governor Sindh of Pakistan  Genrative AI Innitiative. My IT journey has started 
            since  This year, Now Alhumdulillah! I'm diving in html,css & also next.js.
        </p>
        </section>

        <section>
        <div className='button-box border-collapse border-width-4px px-25 py-25 mb-0 mt-1'></div>
        <button className='bg-blue-950 text-white font-bold box-border py-4 px-10 rounded-full m-4 hover:bg-slate-500 '> About Me!</button>
        
        </section>
      
    </div>
     
  )
}

export default Hero;
