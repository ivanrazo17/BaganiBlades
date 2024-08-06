import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
        <hr className="w-full mb-4" />
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <div style={{ width: '150px', height: '50px' }}>
                <img src="/Banner.svg" alt="Banner" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <h4>©2024 Bagani Blades</h4>
                <h4>Designed by: Ivan Razo</h4>
                <h4 className="underline cursor-pointer">Terms of Use</h4>
                <h4 className="underline cursor-pointer">Privacy Policy</h4>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-center space-x-4">
                <XIcon className="cursor-pointer" />
                <InstagramIcon className="cursor-pointer" />
                <YouTubeIcon className="cursor-pointer" />
                <LinkedInIcon className="cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Footer