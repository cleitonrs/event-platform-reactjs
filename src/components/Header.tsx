import Logo from './Logo'
import { List, X } from 'phosphor-react'

interface HeaderProps {
  open: boolean
  toggleOpen: () => void
}

const Header = ({ open = false, toggleOpen }: HeaderProps) => {
  return (
    <header className="w-full px-4 py-3 md:py-5 flex items-center justify-between md:justify-center bg-gray-500 dark:bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="md:hidden  w-10 h-10 flex items-center justify-center cursor-pointer" onClick={toggleOpen}>
        {open ? <X size={24} className="text-white" /> : <List size={24} className="text-white" />}
      </div>
    </header>
  )
}

export default Header