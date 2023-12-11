import Actions from '@/components/Actions'
import Balance from '@/components/Balance'
import BottomNav from '@/components/BottomNav'
import Header from '@/components/Header'
import HomeControl from '@/components/HomeControl'
import HomeFeed from '@/components/HomeFeed'
import Services from '@/components/Services'
import Image from 'next/image'
export default function Home() {
  return (
    <main >
      <div className='m-4'>

      <Header/>
      <HomeControl/>
      <Balance />
      <Actions />
      <Services />
      <HomeFeed/>
      <HomeControl/>
      </div>
      <BottomNav/>
    </main>
  )
}
