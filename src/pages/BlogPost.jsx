import { useParams } from 'react-router-dom'
import '../styles/blog-single.css'
import { getPost } from '../data/blogPosts'
import NotFound from './NotFound'

// Fiel a blog1.html..blog12.html. El wrapper .only-info lo aplica el Layout
// para las rutas /blog/*. bodyHtml (generado) ya incluye el <h1 class="post__title">
// y cualquier bloque extra + el <div class="post__desc">.
export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />

  return (
    <section className="blog blog-single pt-10 pb-40" data-testid="blog-post">
      {post.styleCss ? <style dangerouslySetInnerHTML={{ __html: post.styleCss }} /> : null}
      <div className="container">
        <div className="row">
          <article className="col-12" itemScope itemType="https://schema.org/Article">
            <div className="post-item mb-0">
              <div className="post__img">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width="1280"
                  height="720"
                  itemProp="image"
                />
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat">
                    {post.categories.map((c, i) => (
                      <span key={c}>
                        {c}
                        {i < post.categories.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                  <time className="post__date ml-10" dateTime={post.dateTime} itemProp="datePublished">
                    {post.date}
                  </time>
                </div>

                <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
