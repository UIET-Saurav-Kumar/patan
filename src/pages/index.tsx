import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './../components/NavBar';
import NavbarImg from '../components/jee_mains/NavbarImg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
    </div>
  )
}
