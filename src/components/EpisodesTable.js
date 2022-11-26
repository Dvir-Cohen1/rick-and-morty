import React, { useEffect, useState, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../components/Loader";

import { FetchEpisodes } from "../services/api";
import {
  characterEpisodesColumns,
  characterEpisodesRow,
} from "../constant/character.const";

const EpisodesTable = ({ character }) => {
  const [episodes, setEpisodes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FetchEpisodes(character.episode)
      .then((res) => {
        setEpisodes((pre) => res);
        setLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setLoading(true);
      });
  }, []);

  const fetchData = useCallback(async () => {
    const data = await FetchEpisodes(character.episode);
    setEpisodes(data);
  }, []);

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <div style={{ height: 600, width: "75%" }}>
      <div className="text-3xl mb-3">Episodes:</div>
      <>
        {loading ? (
          <Loader />
        ) : hasError ? (
          <div>Error occured.</div>
        ) : (
          <DataGrid
            rows={episodes}
            columns={characterEpisodesColumns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            sx={{
              border: 1,
              borderColor: "white",
              color: "inherit",
            }}
          />
        )}
      </>
    </div>
  );
};

export default EpisodesTable;
