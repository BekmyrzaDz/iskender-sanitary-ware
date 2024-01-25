import {
  AuctionItems,
  Categories,
  Footer,
  Header,
  Highlights,
  News,
  SalesHits,
  StoreAddresses,
} from "./components"

export const Home = () => {
  return (
    <div>
      <Header />
      <Highlights />
      <Categories />
      <SalesHits />
      <News />
      <AuctionItems />
      <StoreAddresses />
      <Footer />
    </div>
  )
}
