import Image from 'next/image'
import { Inter } from 'next/font/google'
//components
import Nav from '@/components/Nav'
import Search from '@/components/Search/Search'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
         <Nav></Nav>
         <Search/>
    </main>
  )
}
