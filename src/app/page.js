import RandomCard from '@/components/random-card/random-card'
import styles from './page.module.css'
import Line from '@/components/svg/line'
import UserCard from '@/components/user-card/user-card'
import ColorsCard from '@/components/colors-card'
import MathCard from '@/components/math-card'
import PasswordCard from '@/components/password-card'
import Logo from '@/components/svg/logo'
import MobileLogo from '@/components/svg/mobile-logo'

export default function Home() {
  return (
    <main className={styles.main} >
      <Line />
      <div className={styles.home}>
        <Logo />
        <MobileLogo/>
        <div className={styles.home__block}>
          <RandomCard />
          <UserCard />
          <ColorsCard />
          <MathCard />
          <PasswordCard />
        </div>
      </div>
    </main>
  )
}
