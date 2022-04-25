import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Header from './components/header/Header'
import db from './utils/firebase/firebaseConfig'

function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, 'usuarios'))
      data.forEach((doc) => {
        console.log(doc.data())
      })
    }
    getData()
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
