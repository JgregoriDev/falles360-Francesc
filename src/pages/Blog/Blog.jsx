import { useEffect,useState } from "react";
import "./Blog.css";
import setTitle from "@/utils/setTitle";
import getDataNews from "@/utils/getDataNews";
import {Link} from 'wouter';
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
              <Link title={post.title} className="blog__post--link" href={linkPost({post})}>
                <h3 className="blog__post--title">{post.title}</h3>
              </Link>
              <Link title={post.title} href={linkPost({post})}>
                <img
                  className="blog__post--image"
                  src={post.image}
                  loading="lazy"
                  alt={post.titulo}
                />
              </Link>
              <p className="blog__post--date">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="blog__post--content">{post.content}</p>
              <Link
              title="Leer más"
                className="blog__post--link"
                href={linkPost({post})}
              >
                Leer más...
              </Link>
            </article>
          ))}

          {/* News Feed */}
          {/* Pagination */}
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link page--previous" href="#!">
                  Anterior
                  <svg className="page--icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"/></svg>
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
                <a onClick={()=>prompt('Introduce la página a la que quieres ir')} className="page-link" href="#!">
                  ...
                </a>
              </li>
              <li className="page-item page--next">
                <a className="page-link" href="#!">
                  Siguiente
                  <svg className="page--icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
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
