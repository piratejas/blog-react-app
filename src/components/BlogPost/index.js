function BlogPost({ title, author, datePosted, content, imageSrc, imageAlt }) {
  return (
    <div className="post-container">
      <h1 className="title">{title}</h1>
      <h2 className="author">by {author}</h2>
      <h4 className="date">{datePosted}</h4>
      <figure>
        <img
          className="image"
          width="100%"
          height="auto"
          src={imageSrc}
          alt={imageAlt}
        />
        <figcaption>{imageAlt}</figcaption>
      </figure>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
