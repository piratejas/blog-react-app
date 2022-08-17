import styles from "./BlogPost.module.css";

function BlogPost({ title, author, datePosted, content, imageSrc, imageAlt }) {
  return (
    <div className={styles.postContainer}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.author}>by {author}</h2>
      <h4 className={styles.date}>{datePosted}</h4>
      <figure>
        <img className={styles.image} src={imageSrc} alt={imageAlt} />
        <figcaption className={styles.caption}>{imageAlt}</figcaption>
      </figure>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
