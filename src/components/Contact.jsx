import React, { useState } from 'react'

function Contact() {

const [copiedText, setCopiedText] = useState(false);
    
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText("nahucaroseli2100@gmail.com");
        setCopiedText(true);
        setTimeout(()=>setCopiedText(false),3000)
    }
    


  return (
    <div className='flex flex-row justify-between'> 
        <div>
            <div className='pl-3 w-80 flex  mt-40 md:pt-0 flex-col max-w-[90%] md:w-full md:flex-row justify-between'>
                    <div>
                      <h1 className='text-3xl font-bold md:text-4xl'>Contact me</h1>
                      <p onClick={copyToClipboard} className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg'>
                        nahucaroseli2100@gmail.com
                      </p>
                      {copiedText &&
                        <div className='email_copy'>
                          <h1>Copied to Clipboard!</h1>
                          </div>
                        }
                    </div>
                </div>
                <div className='pl-3 w-80 mt-10 flex md:pt-0 flex-col max-w-[90%] md:w-full md:flex-row'>
                  <div className='flex flex-col'>
                      <h1 className='text-3xl font-bold md:text-4xl'>Socials</h1>
                      <a href='https://www.linkedin.com/in/nahuel-caroseli' target='_blank' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Linkedin
                      </a>
                      <a href='https://www.instagram.com/nahu_caroseli' target='_blank' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Instagram
                      </a>
                      <a href='https://github.com/Nahucaroseli' target='_blank' className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Github
                      </a>
                      <a href='/Nahuel_Caroseli_CV.pdf' download="cv" className='pt-3 leading-relaxed text-xl md:text-2xl hover:underline hover:underline-lg cursor-none'>
                        Download resume
                      </a>
                  </div>
             </div>
        </div>
        <img src="/img.jpg" className='object-cover mt-40 mr-5 hidden md:flex md:w-90 h-90 transition duration-200 hover:scale-105' alt="" />    
      </div>
  )
}

export default Contact