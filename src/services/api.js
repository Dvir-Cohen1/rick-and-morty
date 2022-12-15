import getEpisodesNumbersFromArray from "../utils/extractEpisodeNumbers";

const DEFAULT_OPTIONS = {
  header: { "content-type": "application/json" },
};

const END_POINT = "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {
  try {
    const res = await fetch(`${END_POINT}/character`, DEFAULT_OPTIONS);
    const { results: characters } = await res.json();
    return characters;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const getAllCharacter = async (id) => {
  try {
    const res = await fetch(`${END_POINT}/character/${id}`, DEFAULT_OPTIONS);
    const character = await res.json();
    return character;
  } catch (error) {
    return Promise.reject(error), console.log(error);
  }
};

export const searchCharacter = async (name) => {
  try {
    const res = await fetch(
      `${END_POINT}/character/?name=${name}`,
      DEFAULT_OPTIONS
    );
    const { results: characters } = await res.json();

    return characters;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export async function fetchSingleEpisodes(episodesList) {
  try {
    const episodesNumbers = getEpisodesNumbersFromArray(episodesList);
    const res = await fetch(
      `${END_POINT}/episode/${episodesNumbers}`,
      DEFAULT_OPTIONS
    );
    const { results: episodes } = await res.json();

    return episodes;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchAllEpisodes() {
  try {

    const res = await fetch(
      `${END_POINT}/episode?page=1?page=2?page=3`,
      DEFAULT_OPTIONS
    );
    const { results: episodes } = await res.json();

    return episodes;
  } catch (error) {
    return console.log(error);
  }
}
