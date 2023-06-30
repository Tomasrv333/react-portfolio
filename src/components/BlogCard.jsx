const BlogCard = (props) => {
  return (
    <div className="blog-card__content">
      <div className="blog-card__img">

      </div>
      <div className="blog-card__text">
        <span>{props.category}</span>
        <h4>{props.title}</h4>
      </div>
    </div>
  )
}

export default BlogCard