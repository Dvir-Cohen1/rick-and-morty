import React, { useEffect, useState } from "react";
import { getAllCharacters, searchCharacter } from "../services/api";
import { Link } from "react-router-dom";
import { Container } from "../components/common/PageContainer";
import SearchCharacter from "../components/SearchCharacter";
import CharacterCard from "../components/CharacterCard";

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
          {characters.map((character) => (
            <Link key={character.id} to={"./" + character.id}>
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default AllCharacters;
