import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
          <h2>Post no encontrado</h2>
          <Link to="/blog" className="btn btn__primary mt-20">Volver al Blog</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="wrapper only-info">

      <Navbar />

      <section className="blog blog-single pt-10 pb-40">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="row">
            <article className="col-12">
              <div className="post-item mb-0">
                <div className="post__img">
                  <img
                    src={`/assets/images/blog/grid/${post.image}`}
                    alt={post.title}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                  />
                </div>
                <div className="post__body">
                  <div className="post__meta d-flex align-items-center" style={{ marginTop: 16 }}>
                    <div className="post__cat">
                      {post.categories.map((cat, i) => (
                        <span key={cat} style={{ color: '#004062' }}>{cat}{i < post.categories.length - 1 ? ' • ' : ''}</span>
                      ))}
                    </div>
                    <time className="post__date ml-10" style={{ color: '#004062' }}>{post.date}</time>
                  </div>

                  <h1 className="post__title" style={{ color: '#004062', marginTop: 12 }}>{post.title}</h1>

                  <div
                    className="post__desc"
                    style={{ color: '#004062' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <div style={{ marginTop: 40 }}>
                    <Link to="/blog" className="btn btn__secondary">
                      <i className="icon-arrow-left"></i><span>Volver al Blog</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
      <button id="scrollTopBtn"><i className="fas fa-long-arrow-alt-up"></i></button>
    </div>
  )
}
