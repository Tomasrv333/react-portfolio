import BlogCard from "../../../components/BlogCard";

const HomeBlog = () => {
  return (
    <section className="container">
      <h2 className="blog__title">My Blog</h2>
      <div className="blog__content">
        <div>
          <div>

          </div>
          <article>
            <h3>Follow me</h3>
            <p>I am also a content creator, remember to check my different channels</p>
            <p>Get notified every time I upload a new article to my blog so you can be the first to check it out.</p>
          </article>
        </div>
        <div>
          <BlogCard
            img=""
            alt=""
            category="Web Development"
            title="Introducción a HTML y CSS"
          />
          <BlogCard
            img=""
            alt=""
            category="Web Development"
            title="Optimización de rendimiento web"
          />
          <BlogCard
            img=""
            alt=""
            category="Web Development"
            title="Responsive Web Design"
          />
          <BlogCard
            img=""
            alt=""
            category="Web Development"
            title="Introducción a Javascript"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeBlog