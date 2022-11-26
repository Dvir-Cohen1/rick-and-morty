import React from "react";

function CharacterCard({ character }) {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-slate-700 hover:bg-slate-800">
      <img
        width={"300px"}
        src={character.image}
        loading="lazy"
        alt={character.title}
        className="w-full rounded-t-md"
      />
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl hover:text-amber-500">{character.name}</h3>
        <p className="text-white text-sm mt-1">
          <span className="font-bold">Status:</span> {character.status}
        </p>
        <p className="text-white text-sm mt-1">
          <span className="font-bold">Type:</span> {character.type}
        </p>
        <p className="text-white text-sm mt-1">
          <span className="font-bold">Species:</span> {character.species}
        </p>
      </div>
    </article>
  );
}

export default CharacterCard;
