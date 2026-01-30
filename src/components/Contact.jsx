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
                      <h1 className='text-3xl font-bold'>Contactame</h1>
                      <p onClick={copyToClipboard} className='pt-3 leading-relaxed text-xl hover:underline hover:underline-lg'>
                        nahucaroseli2100@gmail.com
                      </p>
                      {copiedText &&
                        <div className='email_copy'>
                          <h1>Copiado al Portapapeles!</h1>
                          </div>
                        }
                    </div>
                </div>
                <div className='pl-3 w-80 mt-30 flex md:pt-0 flex-col max-w-[90%] md:w-full md:flex-row'>
                  <div className='flex flex-col'>
                      <h1 className='text-3xl font-bold'>Socials</h1>
                      <a href='https://www.linkedin.com/in/nahuel-caroseli' target='_blank' className='pt-3 leading-relaxed text-xl  hover:underline hover:underline-lg cursor-none'>
                        Linkedin
                      </a>
                      <a href='https://github.com/Nahucaroseli' target='_blank' className='pt-3 leading-relaxed text-xl  hover:underline hover:underline-lg cursor-none'>
                        Github
                      </a>
                      <a href='/Nahuel_Caroseli_CV.pdf' download="Nahuel_Caroseli_CV" className='pt-3 leading-relaxed text-xl  hover:underline hover:underline-lg cursor-none'>
                        Descargar curriculum
                      </a>
                  </div>

             </div>

        </div>
        <h1 className='text-4xl md:text-5xl font-bold hidden md:flex absolute right-1 bottom-1'>NAHUEL CAROSELI</h1>             
      </div>
  )
}

export default Contact