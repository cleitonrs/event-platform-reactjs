import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react"
import  '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated"


interface VideoProps {
  lessonSlug: string
}

const Video = (props: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex flex-1 justify-center items-center dark:bg-black">
        <p>Carregando...</p>
      </div>
    )
  }

 
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-cyan-600 dark:border-blue-500" 
                  src={data.lesson.teacher.avatarURL} 
                  alt="Foto do professor" />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-500 dark:text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 self-center md:self-start">
            <a href="#" className="p-4 text-sm bg-green-600 dark:bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-800 hover:text-gray-100 dark:hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="#" className="p-4 text-sm border border-cyan-600 dark:border-blue-500 text-cyan-600 dark:text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-cyan-600  dark:hover:bg-blue-500 hover:text-gray-100 dark:hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o Desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-0">
          <a href="" className="bg-gray-400 dark:bg-gray-700 rounded overflow-hidden flex items-stretch gap-2 md:gap-6 hover:bg-gray-200 dark:hover:bg-gray-600 hover:-translate-y-2 transform transition-colors">
            <div className="bg-green-500 dark:bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="md:text-2xl text-1xl">
                Material complementar
              </strong>
              <p className="md:text-sm text-xs text-gray-700 dark:text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento.
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} className="text-cyan-600 dark:text-blue-500" />
            </div>
          </a>
          
          <a href="" className="bg-gray-400 dark:bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-200 dark:hover:bg-gray-600 hover:-translate-y-2 transform transition-colors">
            <div className="bg-green-500 dark:bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="md:text-2xl text-1xl">
                Wallpapers exclusivos
              </strong>
              <p className="md:text-sm text-xs text-gray-700 dark:text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize sua máquina.
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} className="text-cyan-600 dark:text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video