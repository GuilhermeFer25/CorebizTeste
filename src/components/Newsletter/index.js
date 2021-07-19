import Axios from 'axios'
import React, { useState } from 'react'
import Message from './Message.js'
import { Formik, Form, Field } from 'formik'
import NewsletterSchema from '../../assets/Errors/Schema'

export default function Newslette() {
  const url = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'
  const [text, setText] = useState({ name: '', email: '' })
  const [enviado, setEnviado] = useState(false)

  function button() {
    this.setState({
      enviado: !true,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    Axios.post(url, {
      name: text.name,
      email: text.email,
    })
      .then(res => {
        setEnviado(true)
        setText({ name: '', email: '' })
      })
      .catch(error => {
        console.error(error)
      })
  }

  function handle(e) {
    const newText = { ...text }
    newText[e.target.id] = e.target.value
    setText(newText)
    console.log(newText)
  }

  return (
    <div id="" className="Newslatter flex justify-center  h-40 p-8 ">
      {!enviado && (
        <Formik
          validationSchema={NewsletterSchema}
          initialValues={{
            name: '',
            email: '',
          }}
        >
          {({ errors }) => (
            <Form id="FormNew" className="items-center" onSubmit={e => handleSubmit(e)}>
              <h1 className="top-4 text-2xl text-gray-800 font-bold">
                {' '}
                Participe de nossas news com promoções e novidades!
              </h1>
              <div className="flex flex-col-3 form-group space-x-4  items-center">
                <div className="w-52">
                  <Field
                    onChange={e => handle(e)}
                    id="name"
                    value={text.name}
                    className="h-12 border-gray-100 w-full"
                    type="text"
                    placeholder="Digite seu Nome"
                  />
                  {errors.name && <span className="flex text-red-700">{errors.name}</span>}
                </div>
                <div className="w-52">
                  <Field
                    onChange={e => handle(e)}
                    id="email"
                    value={text.email}
                    className="h-12 border-gray-100 rounded-b-lg w-full"
                    type="email"
                    placeholder="Digite seu e-mail"
                  />
                  {errors.email && <span className="flex text-red-700">{errors.email}</span>}
                </div>
                <div className="pb-8">
                  <button
                    className=" w-32 h-12 text-white bg-black border-black dark:text-white dark:bg-black border  text-sm font-medium leading-3 rounded focus:outline-none mt-5 hover:opacity-50"
                    type="submit"
                  >
                    Eu quero!
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
      <Message status={enviado} onClick={button} />
    </div>
  )
}
