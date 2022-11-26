import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getAllCharacter } from "../services/api";
import CharacterCard from "../components/CharacterCard";
import EpisodesTable from "../components/EpisodesTable";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getAllCharacter(id)
      .then((res) => {
        setCharacter((prev) => (prev = res));
      });
  }, []);
  return (
       <>
      <CharacterCard key={character.id} character={character} />
      <EpisodesTable character={character} />
    </>
  );
};

export default Character;
