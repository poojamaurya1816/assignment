import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { Iconlist } from '@/components/Iconlist';
import { Payment } from '@/components/Payment/Payment';
export default function Home() {
  return (<>
    <Header />
    <div className={styles.contentbox}>
      <div className={styles.leftsec}>
         <h1 className={styles.heading} >Access curated courses worth  <span>₹ 18,500</span> at just <span className={styles.bluecolor}>₹ 99</span> per year!</h1>

         <Iconlist image="/book.svg" text="Job relevant courses " number="100+" />
         <Iconlist image="/watch.svg" text="Hours of content" number="20,000+ " />
         <Iconlist image="/tv.svg" text="webinar access " number="Exclusive " />
         <Iconlist image="/cap.svg" text="Scholarship worth" number="₹94,500 " />
         <Iconlist image="/ads.svg" text="learning experience " number="Ad Free " />
      </div>

       <Payment />
    </div>
 </>
  )
}
