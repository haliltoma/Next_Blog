import React from 'react'
import  Link  from 'next/link'
import image1 from '../../public/assets/images/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='container flex justify-around items-center  px-3'>
    
        <div className="logo">
            <Image src={image1} alt="Logo" width={80} height={80}/>
        </div>
        <nav>
            <ul className='p-0 m-0 flex gap-5'>
                <li><Link className='btn-primary' href="/">Home</Link></li>
                <li><Link className='btn-primary' href="/blogs">Blogs</Link></li>
                <li><Link className='btn-primary' href="/about">About</Link></li>
            </ul>
        </nav>
    
        
    </header>
  )
}

export default Header