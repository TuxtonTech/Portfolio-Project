import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'


type Props = {
    data: {
        phoneNumber: string;
        email: string;
        address: string;
    }
}

export default function Contact({data}: Props) {
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
                      <p className='text-2xl'>{ data.phoneNumber }</p>
                      
                  </div>
                  <div className='flex justify-left space-x-5 items-center'>
                      <MapPinIcon className='w-7 h-7 animate-pulse'/>
                      <p className='text-2xl'>{ data.address }</p>
                  </div>
                  <div className='flex justify-left space-x-5 items-center'>
                    <EnvelopeIcon className='w-7 h-7 animate-pulse'/>
                      <p className="text-2xl">{ data.email }</p>
                  </div>
              </div>
              <form action="" className='flex flex-col space-y-2 w-fit mx-auto'>
                      <div className='flex space-x-2 '>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name'/>
                      </div>

                      <input type="text" placeholder='Email'  />
                      <textarea className='resize-none' placeholder='What would you like to say?' name="" id=""></textarea>
                      <button type='submit'>Submit</button>
              </form>
          </div>
    </div>
  )
}