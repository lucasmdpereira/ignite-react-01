import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

function App() {
  return (
    <div>
      <Header />
      
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
    </div>
  )
}

export { App }

