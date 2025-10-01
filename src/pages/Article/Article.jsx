import "./Article.css";
import MockNews from "@/store/MockNews.json";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import setTitle from "@/utils/setTitle";
import Comments from "@components/Comments/Comments";

const Article = () => {
  const [article, setArticle] = useState(null);
  const { news } = MockNews;
  const [location] = useLocation();
  const lastPart = location.split("/").pop();

  useEffect(() => {
    const foundArticle = news.find(
      (item) => item.title.toLowerCase().replace(/\s+/g, "-") === lastPart.toLowerCase()
    );
    setArticle(foundArticle);
    if (foundArticle) {
      const id=foundArticle.id ?? 1;
      setTitle(id);
    }
  }, [lastPart, news]);

  return (
    <div className="Article">
      <h2>Articulo {article ? article.title : "No encontrado"}</h2>
      {article && (
        <article>
          <img className="Article__Hero" src={article.image} alt={article.title} />
          <p className="Article__p">{article.article}</p>
        </article>
      )}
      {article && <Comments comments={article.comments} />}
    </div>
  );
};

export default Article;
