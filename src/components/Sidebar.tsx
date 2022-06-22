import Lesson from "./Lesson"

const Sidebar = () => {
  return (
    <aside className="w-[348px] bg-gray-600 dark:bg-gray-700 text-gray-100 p-6 border-l dark:border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b dark:border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  )
}

export default Sidebar