import React from 'react'
import '../App.css'
import {BsInstagram} from 'react-icons/bs'
import {AiFillCopyrightCircle} from 'react-icons/ai'
import {BiLogoTelegram,BiLastPage} from 'react-icons/bi'
import {BsFillTelephoneFill,BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
    <div className='container-xxl footer-cont'>
        <div className="row">
          <div className="col-4">
                <h4>Explore</h4>
                <ul className='footer-icons'>
                <Link to={'/codingchannels'}><li><BiLastPage/><label className='mx-4' style={{cursor:"pointer"}} >Coding Channels </label></li></Link>
                 <Link to={'/team'}><li><BiLastPage/><label className='mx-4' style={{cursor:"pointer"}}>Team</label></li></Link>
                 <Link to={'/announcements'}><li><BiLastPage/><label className='mx-4' style={{cursor:"pointer"}}>Announcements</label></li></Link>
                 <Link to={'/sessions'}><li><BiLastPage/><label className='mx-4' style={{cursor:"pointer"}}> Registrations</label></li></Link>
                </ul>
              </div>
              <div className="col-4">
                <h4>Social</h4>
                <ul className='footer-icons d-flex flex-column'>
                 <Link><li><BsInstagram/><label className='mx-4'>Instagram</label></li></Link>
                 <Link><li><BsLinkedin/><label className='mx-4'>LinkedIn</label></li></Link>
                 <Link><li><BiLogoTelegram/><label className='mx-4'>Telegram</label></li></Link>
                 <Link><li><BsFillTelephoneFill/><label className='mx-4'>Contact</label></li></Link>
                </ul>
              </div>
              <div className="col-4">
                <h4>Pages</h4>
                <ul className='footer-icons'>
                <Link to={'/'} ><li><BiLastPage/><label style={{cursor:"pointer"}} className='mx-4'>Home</label></li></Link>
                 <Link to={'/contact'} ><li><BiLastPage/><label className='mx-4' style={{cursor:"pointer"}}>Contact</label></li></Link>
                 <Link to={'/team'} ><li><BiLastPage/><label style={{cursor:"pointer"}} className='mx-4'>Team</label></li></Link>
                 <Link to={'/sessions'} ><li><BiLastPage/><label style={{cursor:"pointer"}} className='mx-4'>Sessions</label></li></Link>
                </ul>
              </div>
         </div>
        <div className="row">
          <div className="col-12">
            <h6 className='my-4 text-center copyright'><AiFillCopyrightCircle/> <span></span>Copyright  2023 Socc Offical</h6>
          </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer