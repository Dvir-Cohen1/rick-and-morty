import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../components/common/Loader";

import { fetchSingleEpisodes, fetchAllEpisodes } from "../services/api";
import {
  characterEpisodesColumns,
  characterEpisodesRow,
} from "../constant/character.const";

const EpisodesTable = ({ character }) => {
  const [episodes, setEpisodes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isEpisodesPage = useLocation().pathname === "/episodes" ? true : false;

  useEffect(() => {
    setLoading(true);

    async function fetch() {
      try {
        let response = isEpisodesPage
          ? await fetchAllEpisodes()
          : await fetchSingleEpisodes(character.episode);
        setEpisodes(response);
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(true);
        throw Error(error);
      }
    }
    fetch();
  }, []);

  // useEffect(() => {
  //   setLoading(true);

  //   isEpisodesPage
  //     ? fetchAllEpisodes()
  //     : fetchSingleEpisodes(character.episode)
  //         .then((res) => {
  //           setEpisodes((pre) => res);
  //           setLoading(false);
  //         })
  //         .catch((err) => {
  //           setHasError(true);
  //           setLoading(true);
  //         });
  // }, []);

  // const fetchData = useCallback(async () => {
  //   const data = await fetchSingleEpisodes(character.episode);
  //   setEpisodes(data);
  // }, []);

  // // the useEffect is only there to call `fetchData` at the right time
  // useEffect(() => {
  //   fetchData().catch(console.error);
  // }, [fetchData]);

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
