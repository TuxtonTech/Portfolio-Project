import React, { ChangeEvent } from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'

type Props = {
    data: {
        phoneNumber: string;
        email: string;
        address: string;
    }
}

export default function Contact({ data }: Props) {   

  

  const handleSubmit = (e: any) => {
      e.preventDefault();
      const form = document.querySelector("form")!
      form.onsubmit = ()  => {
          const formData = new FormData(form)

          const body = new URLSearchParams(`su=${formData.get("subject")}&body=${formData.get("body")}`)
          window.open(`https://mail.google.com/mail/u/0/?fs=1&to=${data.email}&${body}&tf=cm`, "_blank")?.focus()
      }
    // Handle form submission, e.g., send data to an API
  };

  return (
      <div className='h-screen relative flex flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

          <div className="flex flex-col space-y-10">
              <h4 className='text-center'>
                  <span className='text-2xl text-gray-300'>
                  I have what you're looking for
                  </span>
                  <br />
                  <span className='text-4xl font-semibold'>Lets Talk.</span>
              </h4>

              <div className='space-y-5'>
                  <div className='flex items-center space-x-5 justify-left'>
                      <PhoneIcon className='h-7 w-7 animate-pulse' />
                      <p className='text-xl md:text-2xl'>{ data.phoneNumber }</p>
                      
                  </div>
                  
                  <div className='flex justify-left space-x-5 items-center'>
                    <EnvelopeIcon className='w-7 h-7 animate-pulse'/>
                      <p className="text-xl md:text-2xl">{ data.email }</p>
                  </div>
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col  space-y-2 mx-auto ' id='form'>
                      <div className='flex space-x-2 '>
                        <input className='mobile:w-[50%]' type="text" placeholder='First Name' required/>
                        <input type="text" placeholder='Last Name' required/>
                      </div>

                      <input type="text" placeholder='Subject' name='subject' required/>
                      <textarea className='resize-none' placeholder='What would you like to say?' name="body" id="" required></textarea>
                      <button type='submit'>Submit</button>
              </form>
          </div>
    </div>
  )
}

