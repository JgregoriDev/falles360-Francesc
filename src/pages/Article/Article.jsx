import "./Article.css";
import MockNews from "@/store/MockNews.json";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import setTitle from "@/utils/setTitle";
import Tooltip from "@components/Tooltip/Tooltip.jsx"
const Article = () => {
  const [New, setNew] = useState({});
  const { news } = MockNews;
  const [location] = useLocation(); // Obtiene la ubicación actual
  const lastPart = location.split("/").pop(); // Filtra la última parte de la URL
  let article = news.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") === lastPart.toLowerCase()
  );
  setTitle(`${article.title}`);
  console.log(article.comments);
  if (article.comments!==undefined) {
    
  }
  let comments = article.comments ?? null;
  const articletHasComments = () => {
    return comments.length > 0;
  };

  const commentsMap = () => {
    return (
      <>
        {articletHasComments() ? (
          comments.map((comment) => (
            <div key={comment.id}>
              {" "}
              {/* Asegúrate de tener una clave única para cada comentario */}
             <a className="" href="" title={comment.author}> <p>{comment.author}</p></a>
              <p className="">{comment.text}</p>
            </div>
          ))
        ) : (
          <p>No hay comentarios.</p> // Mensaje alternativo si no hay comentarios
        )}
      </>
    );
  };

  return (
    <div className={`Article`}>
      <h2>Articulo {article ? article.title : "No encontrado"}</h2>
      <article>
        {article && (
          <>
            <img
              className="Article__Hero"
              src={article.image}
              alt={article.title}
            />
            <p className="Article__p">{article.article}</p>
          </>
        )}
      </article>
      <div className="comments">
        <h2>Comentarios</h2>
        
          <p>Total de comentarios {comments.length}</p>
        {commentsMap()}
        <form method="POST" action="">
        
        <label htmlFor="messatge">Introduce tu comentario:</label><Tooltip tooltipText={"Introduce tu comentario"} />
          <textarea name="messatge" id=""></textarea>
          <button onClick={(e)=>{e.preventDefault()}} className="button button-primary">Enviar datos</button>
        </form>
      </div>
    </div>
  );
};

export default Article;
