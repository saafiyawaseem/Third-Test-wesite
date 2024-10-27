import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-teal-900 p-1 flex justify-between'>
    <nav className='text-white p-8  flex justify-between '>
    <div><h1 className='font-extrabold text-center text-2xl mb-6 mx-36 mr-30'> <span>Welcom in MY First Website</span></h1> </div>
    
    
    <Link href={"/"}className="text-cyan-400 px-4 mx-8 text-left space-y-4">Home</Link>
         <Link href={"/about"}className="text-cyan-400 px-4 mx-8 text-left space-y-4">About</Link>
         <Link href={"/services"}className="text-cyan-400 px-4 mx-8text-left space-y-4">Services</Link>
    
    
    
   </nav>
   </header>
   
  )
}

export default Header
