import { Categories, Header, Highlights, News, SalesHits } from "./components"

export const Home = () => {
  return (
    <div>
      <Header />
      <Highlights />
      <Categories />
      <SalesHits />
      <News />
    </div>
  )
}
