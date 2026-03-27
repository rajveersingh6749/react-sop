import { Helmet } from 'react-helmet'

const Blog = () => {
  const post = {
    title: 'React',
    description: 'Learn Basics of React',
  }

  return (
    <div>
      <Helmet>
        <title>Blog Page | MyApp</title>
        <meta name='description' content="This is a page to help you learning React" />
      </Helmet>
      <p>
        <b>Title: </b>
        {post.title}
      </p>
      <p>
        <b>Description: </b>
        {post.description}
      </p>
    </div>
  )
}

export default Blog
