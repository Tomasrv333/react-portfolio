import { HomeHero, HomeWhatIDo, HomeProjects, HomeBlog, HomeContact, HomeAbout } from './Sections/index';

const Home = () => {
  return (
    <main>
      <HomeHero/>
      <HomeWhatIDo/>
      <HomeProjects/>
      <HomeAbout/>
      <HomeBlog/>
      <HomeContact/>
    </main>
  )
}

export default Home