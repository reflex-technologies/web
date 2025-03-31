import React from 'react'
import Button from './Button'
import Section from './Section'
import { webModel } from '../assets'

const Join = () => {
  return (
    <Section id="join" crosses className="!px-0 !py-10" backgroundCustomColor="#eaeaea">
        <div className='mt-14'>
            <div className='relative flex p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[48rem] mx-auto center' >
                <img src={webModel} alt="" />
            </div>
            <div className='text-center mt-8'>
                <h3 className='body-1'>
                    Hey there, Sign up to learn more!
                </h3>
                <div className='text-center'>
                    <form action="https://formspree.io/f/xjkgnzwl" method="POST">
                        <input className='rounded-md border border-border w-64' required name="email" id="emailInput" placeholder="Enter your email" type="email" />
                        <Button white={false} type="submit">Join waistlist</Button>
                    </form>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Join
