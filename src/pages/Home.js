import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <main>
      <Banner />
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
