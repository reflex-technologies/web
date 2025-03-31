import React from 'react'
import Button from "./Button";
import Section from "./Section"
import Heading from "./Heading";

const Contact = () => {
    return (
    <Section  crosses className="!px-0 !py-24" backgroundCustomColor="#eaeaea">
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="Contact Us"
          />
        <form className="flex min-h-0 grow flex-col" action="">
        <div className="flex-1 space-y-16 mt-6 p-6 ml-10 mr-10">
            <div className="space-y-4">
                <div className="space-y-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":rf:-form-item">Your Name</label>
                    <input className="flex w-full rounded-md border border-border bg-secondary-light px-2.5 py-1.5 text-sm text-black ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-extra-soft focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-red-extra-soft aria-invalid:ring-offset-2 aria-invalid:ring-offset-red" placeholder="John Smith" id=":rf:-form-item" aria-describedby=":rf:-form-item-description" aria-invalid="false" name="name" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":rg:-form-item">Email Address</label>
                        <input className="flex w-full rounded-md border border-border bg-secondary-light px-2.5 py-1.5 text-sm text-black ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-extra-soft focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-red-extra-soft aria-invalid:ring-offset-2 aria-invalid:ring-offset-red" placeholder="johnsmith@reflextech.com" id=":rg:-form-item" aria-describedby=":rg:-form-item-description" aria-invalid="false" name="email" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":rh:-form-item">Phone #</label>
                        <input className="flex w-full rounded-md border border-border bg-secondary-light px-2.5 py-1.5 text-sm text-black ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-extra-soft focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-red-extra-soft aria-invalid:ring-offset-2 aria-invalid:ring-offset-red" placeholder="(123) 456-7890" id=":rh:-form-item" aria-describedby=":rh:-form-item-description" aria-invalid="false" autocomplete="tel" type="tel" name="phone" />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":rf:-form-item">Message</label>
                    <input maxLength={500} className="flex w-full rounded-md border border-border bg-secondary-light px-2.5 py-1.5 text-sm text-black ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-extra-soft focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-red-extra-soft aria-invalid:ring-offset-2 aria-invalid:ring-offset-red" id=":rf:-form-item" aria-describedby=":rf:-form-item-description" aria-invalid="false" name="message" />
                </div>
            </div>
            <section className="flex justify-self-center">
            
            <Button white={true}  type="submit">Submit</Button>
            </section>
        </div>
        </form>
        </Section>

    )
}

export default Contact
