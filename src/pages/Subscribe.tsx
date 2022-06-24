import Logo from "../components/Logo"

const Subscribe = () => {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight text-black dark:text-gray-100">
            Construa uma <strong className="text-cyan-400 dark:text-blue-500">aplicação completa</strong> do zero com <strong className="text-cyan-400 dark:text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-black dark:text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-200 dark:bg-gray-700 border border-gray-700 dark:border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form action="" className="flex flex-col gap-2 w-full">
            <input
              className=" dark:bg-gray-900 rounded px-5 h-14 placeholder:text-gray-700 dark:placeholder:text-gray-400"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              className="dark:bg-gray-900 rounded px-5 h-14 placeholder:text-gray-700 dark:placeholder:text-gray-400"
              type="email" 
              placeholder="Digite o seu e-mail"
            />
            <button
              className="mt-4 py-4 bg-green-600 dark:bg-green-500 uppercase rounded font-bold text-sm hover:bg-green-800 dark:hover:bg-green-700 transition-colors"
              type="submit">
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  )
}

export default Subscribe  