import RandomCard from '@/components/random-card/random-card'
import classes from './page.module.css'
import UserCard from '@/components/user-card/user-card'
import ColorsCard from '@/components/colors-card'
import MathCard from '@/components/math-card'
import PasswordCard from '@/components/password-card'
import Logo from '@/components/svg/logo'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <main className={classes.main}>
      <Layout>
        <div className={classes.page}>
          <Logo />
          <div className={classes.options__block}>
            <RandomCard />
            <UserCard />
            <ColorsCard />
            <MathCard />
            <PasswordCard />
          </div>
        </div>
      </Layout>
    </main>
  )
}
