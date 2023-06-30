import BlogCard from "../../../components/BlogCard";
import { FaArrowRight } from "react-icons/fa";

const HomeBlog = () => {
  return (
    <section className="container">
      <h2 className="blog__title">My Blog</h2>
      <div className="blog__content">
        <div className="blog__top-content">
          <div className="top-content__video">

          </div>
          <article className="top-content__info">
            <div className="top-content__text">
              <h3>Follow me</h3>
              <p>I am also a content creator, remember to check my different channels</p>
              <p>Get notified every time I upload a new article to my blog so you can be the first to check it out.</p>
              <form id="form__blog" action="">
                <input type="email" placeholder="example@email.com" />
                <button className="button--primary">Subscribe</button>
              </form>
            </div>
            <div>

            </div>
          </article>
        </div>
        <div className="blog__cards-content">
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
        <div className="more-frame">
          <a href="" className="more-link">View All <FaArrowRight size={14}/></a>
        </div>
      </div>
    </section>
  )
}

export default HomeBlog