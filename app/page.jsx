import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-enter">Discover and share <br className="max-md:hidden" /> 
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Promptopia is an open-source AT prompting tool for modern world to discover, create and share creative promptsCoops</p>
      <Feed />
    </section>
  )
}

export default Home
