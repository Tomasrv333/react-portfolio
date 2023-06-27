const BlogCard = (props) => {
  return (
    <div className="blog-card__content">
      <img src="" alt="" />
      <div>
        <span>{props.category}</span>
        <h4>{props.title}</h4>
      </div>
    </div>
  )
}

export default BlogCard