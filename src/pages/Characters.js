import React, { useEffect, useState } from "react";
import { getAllCharacters, searchCharacter } from "../services/api";
import { Container } from "../components/common/PageContainer";
import SearchCharacter from "../components/SearchCharacter";

function AllCharacters() {
  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      const data = await getAllCharacters();
      setCharacters(data);
    }
    fetchCharacters();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    const value = event.target.value;
    setSearchInput((prev) => value);
  }

  async function submitSearch(event) {
    event.preventDefault();
    if (!searchInput) return;
    const searchData = await searchCharacter(searchInput);
    if (!searchData) return;

    setCharacters((prev) => (prev = searchData));
  }

  return (
    <Container>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Characters</h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <SearchCharacter
          handleSearch={handleSearch}
          submitSearch={submitSearch}
        />
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-slate-700 hover:bg-slate-800"
              key={key}
            >
              <a href={items.href}>
                <img
                  width={"300px"}
                  src={items.image}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-t-md"
                />
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <a
                    href={
                      "https://rickandmortyapi.com/api/character/" + items.id
                    }
                  >
                    <h3 className="text-xl hover:text-amber-500">
                      {items.name}
                    </h3>
                  </a>
                  <p className="text-white text-sm mt-1">
                    <span className="font-bold">Status:</span> {items.status}
                  </p>
                  <p className="text-white text-sm mt-1">
                    <span className="font-bold">Type:</span> {items.type}
                  </p>
                  <p className="text-white text-sm mt-1">
                    <span className="font-bold">Species:</span> {items.species}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default AllCharacters;
