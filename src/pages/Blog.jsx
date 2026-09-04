import { Link } from 'react-router-dom'
import { blogList } from '../data/blogPosts'

// Fiel a blog.html: page-title-layout1 + grid de 12 .post-item.
// En el listado original cada tarjeta muestra las mismas dos categorías.
export default function Blog() {
  return (
    <>
      <section className="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img">
          <img src="/assets/images/page-titles/11.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
              <h1 className="pagetitle__heading mb-0">Blog de Protección Contra Incendios: Tu Guía Esencial</h1>
              <a href="#careers" className="scroll-down">
                <i className="icon-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="post-grid">
        <div className="container">
          <div className="row">
            {blogList.map((post) => (
              <div key={post.slug} className="col-sm-12 col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="post__img">
                    <Link to={`/blog/${post.slug}`}>
                      <img src={post.image} alt="post image" />
                    </Link>
                    <span className="post__date">{post.date}</span>
                  </div>
                  <div className="post__body">
                    <div className="post__meta d-flex align-items-center">
                      <div className="post__cat">
                        <a href="#">Prevención</a>
                        <a href="#">Incendios</a>
                      </div>
                      <a className="post__author" href="#">
                        AFC Pro Fire
                      </a>
                    </div>
                    <h4 className="post__title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <p className="post__desc">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="btn btn__custom">
                      <i className="icon-arrow-right"></i>
                      <span>Ver blog</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
