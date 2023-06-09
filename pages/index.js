import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { plane, sky } from '@/assets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Firorial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Navbar />
        </div>
        <div className='p-5 mt-20'>
          <p className='text-5xl text-center'>Find And Book <br /> A Great Experience</p>
          <div className='my-5'>
            <div className='px-10'>
              <Image src={sky} className={"w-full h-96 rounded-full -z-10"} />
            </div>
            <Image src={plane} className={"w-full h-96 z-20 -mt-96"} />
          </div>
        </div>
      </div>
    </>
  )
}
