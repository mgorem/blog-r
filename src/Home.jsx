import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  // State was initialized here

  // useEffect was here

  return (
    <div className='home'>
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
    </div>
  )
}

export default Home
