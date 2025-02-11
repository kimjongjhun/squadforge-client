import React, { useState } from "react";
import Grid from "@mui/material/Grid2";

import UploadFile from "../UploadFile/UploadFile";
import PlayersTable from "../PlayersTable/PlayersTable";
import { Player } from "../../../types/players";

const Homepage = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Grid size={8}>
        <UploadFile />
      </Grid>
      <Grid size={8}>
        <PlayersTable players={players} setPlayers={setPlayers} />
      </Grid>
    </Grid>
  );
};

export default Homepage;
