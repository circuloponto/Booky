import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import hero from '../public/hero.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='landingPage'>
        <Image
          src={hero}
          alt="Picture of the author"
          className='heroImage'
        //width={1300}
        //height={500}
        />
        <div className='heroText'>Booky is a place to browse your favourite books
          and make lists out of your preferences</div>

      </div>
    </>
  )
}
