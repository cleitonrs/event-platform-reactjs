import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Video from '../components/Video'


const Event = () => {
  const { slug } = useParams<{ slug:string }>()
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenuOpen() {
    setMenuOpen((state) => !state)
  }

  useEffect(() => {
    document.body.style.overflowY = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  return (
    <div className="flex flex-col min-h-screen">
      <Header open={menuOpen} toggleOpen={toggleMenuOpen} />
      <main className="flex flex-1 flex-col md:flex-row">
        { slug
         ? <Video lessonSlug={slug} /> 
         : <div className="flex-1" />}
        <Sidebar open={menuOpen} />
      </main>
    </div>
  )
}

export default Event