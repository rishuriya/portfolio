import Sidebar from '../components/Frontend/sidebar'
import Profile from '../components/Frontend/profile'
import Head from 'next/head'
export default function Home() {
  return (
    <div className="">
    <Head>
      <title>Portfolio</title>
      <meta name="description" content="Portfolio Of Rishav_a2z" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className="flex gap-4">
      <div className="relative z-0">
      <Sidebar />

        <Profile />
        </div>
    </section>
    

    

  </div>
  )
}