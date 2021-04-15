import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const timeDefault = 10 * 60
  const [time, setTime] = useState(timeDefault)
  const min = Math.floor(time / 60).toString().padStart(2, '0')
  const sec = Math.floor(time % 60).toString().padStart(2, '0')

  function notify() {
    if (Notification.permission === "granted") {
      new Notification('Hora de ir ali', {
        body: "Vá lá beber água."
      })
    } else {
      Notification.requestPermission();
    }
    setTime(timeDefault)
  }
  useEffect(() => {
    Notification.requestPermission();
  },[])

  useEffect(()=>{
    if(time <= 0) {
      notify()
      return
    }

    setTimeout(()=>{
      setTime(time - 1)
    }, 1000)
  }, [time])

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Próxima atividade</h1>
      <p className={styles.time}>{min}:{sec}</p>
    </main>
  )
}