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

export const searchCharacter = async (name) => {
  try {
    const res = await fetch(`${END_POINT}/character/?name=${name}`, DEFAULT_OPTIONS);
    console.log(name)
    const { results: characters } = await res.json();
    console.log(characters)
    return characters;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
