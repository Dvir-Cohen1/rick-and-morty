export const characterEpisodesColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "name", width: 130 },
  { field: "air_date", headerName: "Air Date", width: 130 },
  { field: "episode", headerName: "episode", width: 130 },
  { field: "characters", headerName: "characters", width: 190 },
  {
    field: "url",
    headerName: "url",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.name || ""} ${params.row.episode || ""}`,
  },
];

export const characterEpisodesRow = [
  { id: 1, name: "Snow", air_date:'test', episode: "Jon", characters: 35 },
  { id: 2, name: "Lannister", air_date:'test', episode: "Cersei", characters: 42 },
  { id: 3, name: "Lannister", air_date:'test', episode: "Jaime", characters: 45 },
  { id: 4, name: "Stark", air_date:'test', episode: "Arya", characters: 16 },
  { id: 5, name: "Targaryen", air_date:'test', episode: "Daenerys", characters: null },
  { id: 6, name: "Melisandre", air_date:'test', episode: null, characters: 150 },
  { id: 7, name: "Clifford", air_date:'test', episode: "Ferrara", characters: 44 },
  { id: 8, name: "Frances", air_date:'test', episode: "Rossini", characters: 36 },
  { id: 9, name: "Roxie", air_date:'test', episode: "Harvey", characters: 65 },
];
