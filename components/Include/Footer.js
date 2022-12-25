import Link from 'next/link'
import React from 'react'
import { BsFacebook,BsTwitter,BsLinkedin,BsInstagram } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'
const Map = dynamic(() => import('../Map/Map'), {
  ssr: false,
})

const Footer = () => {
  return (
    <footer className='h-96 flex justify-center items-center'>
    <div className="footer-left w-[40%]">
      <h5 className='mb-5 font-black tracking-wide text-slate-700 text-3xl'>LaserKopf</h5>
      <p className='mb-5'>A minimal, functional theme for running a paid-membership publication on Ghost.</p>
      <div className="social-media">
        <ul className='p-0 m-0 flex'>
          <li className='mr-2'><Link href="#"><BsFacebook className='w-8 h-8 hover:fill-slate-700 duration-300'/></Link></li>
          <li className='mr-2'><Link href="#"><BsTwitter className='w-8 h-8 hover:fill-slate-700 duration-300'/></Link></li>
          <li className='mr-2'><Link href="#"><BsLinkedin className='w-8 h-8 hover:fill-slate-700 duration-300'/></Link></li>
          <li className='mr-2'><Link href="#"><BsInstagram className='w-8 h-8 hover:fill-slate-700 duration-300'/></Link></li>
        </ul>
      </div>
    </div>
    <div className="footer-right w-[40%]">
          <Map/>
    </div>
    </footer>
  )
}

export default Footer