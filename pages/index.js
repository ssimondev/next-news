import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Newspaper</h1>
        <p className={styles.pronouciation}>noo͞z′pā″pər, nyoo͞z′-</p>
        <p className={styles.description}>Containing intelligence or reports of passing events, issued at short but regular intervals, and either sold or distributed gratis; a public print, or daily, weekly, or semi-weekly periodical, that presents the news of the day, such as the doings of political, legislative, or other public bodies, local, provincial, or national current events, items of public interest on science, religion, commerce, as well as trade, market, and money reports, advertisements and announcements, etc.</p>
      </div>
    </>
  )
}