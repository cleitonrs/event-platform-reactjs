import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
import codeMockup from "../assets/codeMockup.png"
import { useCreateSubscriberMutation } from "../graphql/generated"


const Subscribe = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-xs md:max-w-[1100px] flex flex-col md:flex-row items-center justify-center md:justify-between mt-20 mx-auto">
        <div className="max-w-xs md:max-w-[640px] text-center md:text-left">
          <Logo />
          <h1 className="mt-8 text-[2.2rem] md:text-[] leading-tight text-black dark:text-gray-100">
            Construa uma <strong className="text-cyan-400 dark:text-blue-500">aplicação completa,</strong> do zero, com <strong className="text-cyan-400 dark:text-blue-500">React</strong>
          </h1>
          <p className="m-5 md:m-0 md:mt-4 text-black dark:text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-200 dark:bg-gray-700 border border-gray-700 dark:border-gray-500 rounded">
          <strong className="text-xl md:text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className=" dark:bg-gray-900 rounded px-5 h-14 placeholder:text-gray-700 dark:placeholder:text-gray-400"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="dark:bg-gray-900 rounded px-5 h-14 placeholder:text-gray-700 dark:placeholder:text-gray-400"
              type="email" 
              placeholder="Digite o seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              disabled={loading}
              className="mt-4 py-4 bg-green-600 dark:bg-green-500 uppercase rounded font-bold text-sm hover:bg-green-800 dark:hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit">
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockup} className="mt-10" alt="" />
    </div>
  )
}

export default Subscribe  