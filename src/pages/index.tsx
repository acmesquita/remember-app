import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const timeDefault = 10 * 60
  const [time, setTime] = useState(timeDefault)
  const min = Math.floor(time / 60).toString().padStart(2, '0')
  const sec = Math.floor(time % 60).toString().padStart(2, '0')

  function notify() {
    if (Notification.permission === "granted") {
      navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'Vá lá beber água!',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification('Hora de ir ali', options);
    });
    } else {
      Notification.requestPermission();
    }
    setTime(timeDefault)
  }

  useEffect(() => {
    Notification.requestPermission();
    const voiceBR = speechSynthesis.getVoices().filter(voice => voice.lang.includes('BR'))[0]

    function play() {
      const text = document.getElementById('time').innerText
      const utterance = new SpeechSynthesisUtterance(`Faltam 00:${text} para beber outro copão d'água`)
      utterance.voice = voiceBR
      speechSynthesis.speak(utterance)
    }

    window.addEventListener('focus', play)
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
      <h1 className={styles.title}>Próximo Gole D'água</h1>
      <p id="time" className={styles.time}>{min}:{sec}</p>
    </main>
  )
}