// send emails
import { useForm, ValidationError } from '@formspree/react'

// components
import Circles from '../../components/Circles'

// icons
import { BsArrowRight } from 'react-icons/bs'

// framer
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../../variants'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CountrySelect from '../../components/CountrySelect'

const Contact = () => {
  const [state, handleSubmit] = useForm('xjvqwlwq')
  const [name, setName] = useState('')
  if (state.succeeded) {
    return (
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <p className='h2 justify-center items-center flex'>Gracias <span className=' text-accent'>!</span></p>
      </div>
    )
  }

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden'
            className='h2 text-center mb-12'
          >
            Dejame un mensaje<span className='text-accent'>!</span>
          </motion.h2>
          {/* form */}
          <motion.form
            action='https://formspree.io/f/xjvqwlwq'
            method='POST'
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden'
            className='flex-1 flex flex-col gap-2 w-full mx-auto'
          >
            {/* group */}
            <div className='flex gap-x-6 w-full'>
              <input
                placeholder='Nombre'
                type='text'
                className='input truncate truncate::placeholder'
                id='name'
                name='name'
                value={name}
                required
                onChange={e => {
                  if (validateName(e.target.value)) {
                    setName(e.target.value)
                  }
                }}
              />

              <CountrySelect required />

            </div>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              className='input '
              required
              onChange={e => {
                if (!validateEmail(e.target.value)) {
                  // mostrar mensaje de error
                }
              }}
            />

            <textarea
              id='message'
              className='textarea'
              name='message'
              type='text'
              placeholder='Mensaje'
              required
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button type='submit' disabled={state.submitting} className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Contáctame</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
          <Circles />
        </div>
      </div>
    </div>
  )
}

export default Contact

function validateEmail (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
function validateName (name) {
  const re = /^[a-zA-Z\s]*$/ // Nota el cambio de + a *
  return re.test(String(name))
}
function handleSubmit (e) {
  e.preventDefault()

  // Obtén los valores de los campos del formulario
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  // Verifica que todos los campos estén llenos y sean válidos
  if (!name || !validateName(name)) {
    // Mostrar mensaje de error para el nombre
  } else if (!email || !validateEmail(email)) {
    // Mostrar mensaje de error para el email
  } else if (!message) {
    // Mostrar mensaje de error para el mensaje
  } else {
    // Todos los campos están llenos y son válidos, puedes proceder con el envío del formulario
  }
}
