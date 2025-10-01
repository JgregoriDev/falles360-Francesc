import React from "react";
import CommentForm from "@components/CommentForm/CommentForm";

const Comments = ({ comments }) => {
  const hasComments = comments && comments.length > 0;

  return (
    <div className="comments">
      <h2>Comentarios</h2>
      <p>Total de comentarios: {hasComments ? comments.length : 0}</p>
      {hasComments ? (
        comments.map((comment) => (
          <div key={comment.text}>
            <a href="#" title={comment.author}>
              <p>{comment.author}</p>
            </a>
            <p>{comment.text}</p>
          </div>
        ))
      ) : (
        <p>No hay comentarios.</p>
      )}
      <CommentForm />
    </div>
  );
};

export default Comments;
