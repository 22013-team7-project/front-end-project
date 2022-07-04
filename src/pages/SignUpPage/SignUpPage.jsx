import React from 'react'
import Signup from '../../components/signup/Signup'

const SignUpPage = () => {
  return (
    <>
      <header className='bg-white max-w-lg mx-auto'>
        <a href="/">
          <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
        </a>
      </header>

      <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>

        <section>
          <h3 className='font-bold text-2xl'>Create Your PokéDex Account</h3>
          <p className='text-gray-600 pt-2'>Get started and have fun for free</p>
        </section>

        <section className='mt-10'>
          <Signup/>
        </section>

      </main>

      <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
        <p>If you have an account already you can login here! <a href="/login" className='font-bold hover:underline' >Login</a></p>
      </div>

      <footer className='max-w-lg mx-auto flex justify-center'>
        <a href='/' className='hover:underline'>Contact</a>
        <span className='mx-3'>.</span>
        <a href='/' className='hover:underline'>Privacy</a>
      </footer>
    </>
  )
}

export default SignUpPage