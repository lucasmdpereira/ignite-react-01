import { Post } from './Post'

function App() {
  return (
    <div>
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

