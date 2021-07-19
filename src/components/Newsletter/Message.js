import React from 'react'

export default function Message({ status, onClick }) {
  return (
    <div>
      {status && (
        <div>
          <h1 className="top-4 text-2xl text-gray-800 font-bold">
            Seu Email foi cadastrado com sucesso!
          </h1>

          <h1 className="text-gray-800">
            {' '}
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </h1>
          {onClick && (
            <button
              className="w-full h-12 text-white bg-black border-black dark:text-white dark:bg-black border px-4 py-2 text-sm font-medium leading-3 rounded focus:outline-none mt-5 hover:opacity-50"
              type="submit"
            >
              Cadastrar novo e-mail
            </button>
          )}
        </div>
      )}
    </div>
  )
}
