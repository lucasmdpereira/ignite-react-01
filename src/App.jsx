import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, distinctio sunt? Aspernatur suscipit nisi facere tenetur soluta, laboriosam temporibus quasi ea quod blanditiis commodi sapiente deserunt illo explicabo numquam odio! "
      />
      <Post 
        author="Gabrien Buzzi" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, distinctio sunt? Aspernatur suscipit nisi facere tenetur soluta, laboriosam temporibus quasi ea quod blanditiis commodi sapiente deserunt illo explicabo numquam odio! "
      />
      <Post />
      <Post />
        </main>
      </div>
    </div>
  )
}

export { App }

