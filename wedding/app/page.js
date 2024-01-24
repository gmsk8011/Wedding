'use client'

import { TypeAnimation } from 'react-type-animation';

function page() {

  return (
    <>
      <div className='bg-orange-200 h-screen grid p-8'>
        <div className='place-self-center font-Maiandra text-4xl text-red-900 text-center'>
          <TypeAnimation
            sequence={[
              '#ManAbhiBharaNhi',
              1000,
              'We cordially invite you to join us for the Reception of on the auspicious occasion of their wedding that will be held on March 4th, 2024',
              1000,
              'Venue: Jahnabi Regency Bongaigaon',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  )
}

export default page