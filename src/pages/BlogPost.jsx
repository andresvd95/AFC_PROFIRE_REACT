// Stub temporal — se reconstruye fiel a blog1..12.html en la Fase 5.
import { useParams } from 'react-router-dom'
import { getPost } from '../data/blogPosts'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />
  return (
    <section className="blog blog-single pt-10 pb-40" data-testid="blog-post">
      <div className="container">
        <h1 className="post__title">{post.title}</h1>
      </div>
    </section>
  )
}
