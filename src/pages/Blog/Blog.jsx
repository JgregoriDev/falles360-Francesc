import { useEffect,useState } from "react";
import "./Blog.css";
import setTitle from "@/utils/setTitle";
import getDataNews from "@/utils/getDataNews";
import Categories from "@/store/MockCategories.json";
import News from "@/store/MockNews.json";
const Blog = () => {
  const { categories } = Categories;
  const [currentPage, setcurrentPage] = useState(1);
  useEffect(() => {
    setTitle({ title: "Blog" });
    // console.log(getDataNews());
    
  }, []);
  const linkPost = ({post}) => `/falles360-Francesc/blog/noticia/${post.title.toLowerCase().split(" ").join("-")}`;
  return (
    <section className="blog">
      <div className="blog__feed">
        <h2>Blogs app Falla 360</h2>
        <div className="blog__post">
          {/* News Feed */}
          {News.news.map((post) => (
            <article className="blog__post--item" key={post.id}>
              <a title={post.title} className="blog__post--link" href={linkPost({post})}>
                <h3 className="blog__post--title">{post.title}</h3>
              </a>
              <a title={post.title} href={linkPost({post})}>
                <img
                  className="blog__post--image"
                  src={post.image}
                  loading="lazy"
                  alt={post.titulo}
                />
              </a>
              <p className="blog__post--date">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="blog__post--content">{post.content}</p>
              <a
              title="Leer más"
                className="blog__post--link"
                href={linkPost({post})}
              >
                Leer más...
              </a>
            </article>
          ))}

          {/* News Feed */}
          {/* Pagination */}
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#!">
                  Anterior
                </a>
              </li>
              <li className={`page-item ${currentPage === 1 ? "page-item--active" : ""}`}>
                <a className="page-link" href="#!">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="blog__categories">
        <h2>Categories</h2>
        <nav className="blog__categories--nav">
          <ul className="blog__categories--list">
            {categories.map((category) => (
              <li className="blog__categories--item" key={category.id}>
                <a
                  className="footer__link"
                  title={`Categoria ${category.name}`}
                  href={`/falles360-Francesc/blog/categoria/${category.name}`}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Blog;
