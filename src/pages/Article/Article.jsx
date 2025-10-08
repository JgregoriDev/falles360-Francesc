import style from "./Article.module.css";
import MockNews from "@/store/MockNews.json";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import setTitle from "@/utils/setTitle";
import Comments from "@components/Comments/Comments";
import CircleProgressBar from "@components/CircleProgressBar/CircleProgressBar";
const Article = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { news } = MockNews;
  const [location] = useLocation();
  const lastPart = location.split("/").pop();

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(setTitle);

        const foundArticle = news.find(
          (item) =>
            item.title.toLowerCase().replace(/\s+/g, "-") ===
            lastPart.toLowerCase()
        );
        setArticle(foundArticle);

        if (foundArticle) {
          setTitle({ title: foundArticle.title });
        }
      } catch (error) {
        console.error("Error al cargar el artículo:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [lastPart, news]);

  if (isLoading) {
    return <CircleProgressBar />;
  }

  return (
    <div className={style.Article}>
      <h2>Artículo {article ? article.title : "No encontrado"}</h2>
      {article && (
        <article>
          <img
            className={style.Article__Hero}
            src={article.image}
            alt={article.title}
          />
          <p className={Article.Article__p}>{article.article}</p>
        </article>
      )}
      {article.comments?.legth == 0 ? (
        <p>No se han encontrado comentarios</p>
      ) : (
        <Comments comments={article.comments} />
      )}
    </div>
  );
};

export default Article;
