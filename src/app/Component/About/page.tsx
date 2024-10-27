
import image from 'next/link'

const About = () => {
  return (
    <div className="bg-[url('/images/blackbg.jfif')] bg-cover bg-center h-screen">
        <h3 className="text-center text-white font-extrabold mt-1 bg-slate-950 py-6 ">About Me</h3>

      <section> 
     <p className="text-white font-bold text-center mb-10 mt-10 ml-8 mr-8 py-10">My journey into IT began with a deep curiosity and the desire to build something meaningful in the digital world. You started with the basics, immersing myself in HTML, CSS, and JavaScript to grasp the essential structure and functionality of web development. Now, I've progressed to Next.js, a powerful React framework that simplifies complex aspects of web development, like server-side rendering and routing, giving you the tools to build efficient, modern applications.

As i delve into Next.js, I'm learning to create dynamic, responsive websites, understanding the nuances of JavaScript frameworks, and gaining valuable experience with concepts like component-based architecture and API integration. Each step solidifies my understanding, giving me the skills to create websites that are not only visually appealing but also high-performing and user-friendly.

This journey is building a solid foundation, equipping me with the knowledge and confidence to tackle more advanced projects in the future. I'm not just learning to code; I'm learning to create, solve problems, and transform ideas into reality. The road ahead promises exciting challenges and growth, leading me toward becoming a skilled and creative developer.</p>
</section> 
        
    </div>
  )
}

export default About
