import React from 'react'
import Logo2 from './Logo2'

const Footer = () => {
  return (
    <footer className="w-full px-4 md:py-5 flex flex-col md:flex-row items-center md:justify-between justify-center bg-gray-500 dark:bg-gray-900 md:border-t dark:border-gray-600 text-zinc-400">
      <span className="w-96 md:w-0 h-[1px] md:h-0 md:hidden dark:bg-gray-600"></span>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <Logo2 />
        <span>
        Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <span className="my-6 md:my-0">
        Políticas de privacidade
      </span>
    </footer>
  )
}

export default Footer