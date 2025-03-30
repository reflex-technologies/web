import React from 'react'
import Button from './Button'
import Section from './Section'
import { webModel } from '../assets'

const Join = () => {
  return (
    <Section id="join" crosses className="!px-0 !py-10">
        <div>
            <div className='ml-24' >
                <img src={webModel} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='text-end mr-24'>
                    Hey there, Sign up to learn more!
                </h3>
                <div className='text-end mr-16'>
                    <form action="https://formspree.io/f/xjkgnzwl" method="POST">
                        <input className='rounded-md border border-border w-64' required name="email" id="emailInput" placeholder="Enter your email" type="email" />
                        <Button white={true} type="submit">Join waistlist</Button>
                    </form>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Join
