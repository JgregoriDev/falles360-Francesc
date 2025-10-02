import "./Article.css";
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
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundArticle = news.find(
          (item) => item.title.toLowerCase().replace(/\s+/g, "-") === lastPart.toLowerCase()
        );
        
        setArticle(foundArticle);
        
        if (foundArticle) {
          setTitle(foundArticle.title);
        }
      } catch (error) {
        console.error('Error al cargar el artículo:', error);
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
    <div className="Article">
      <h2>Artículo {article ? article.title : "No encontrado"}</h2>
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