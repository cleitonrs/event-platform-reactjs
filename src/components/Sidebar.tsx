import { useGetLessonsQuery } from "../graphql/generated"
import Lesson from "./Lesson"

interface SidebarProps {
  open: boolean
}

const Sidebar = ({ open }: SidebarProps) => {
  const { data } = useGetLessonsQuery()

  return (
    <aside className={`w-full h-full absolute overflow-y-auto z-50 ${open ? '' : 'hidden'} md:w-[348px] bg-gray-500 dark:bg-gray-700 text-gray-100 p-6 border-l dark:border-gray-600 md:relative md:h-auto md:block`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-300 dark:border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}    
      </div>
    </aside>
  )
}

export default Sidebar