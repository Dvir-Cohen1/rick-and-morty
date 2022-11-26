export default function getEpisodesNumbersFromArray(arr = []) {
  if (!arr) return;
  const episodesNumber = arr.map((item) => item.match(/\d+/g).join("")).join(",");
  return episodesNumber;
}

