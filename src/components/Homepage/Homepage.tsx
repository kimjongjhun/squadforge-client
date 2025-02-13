import React, { useState } from "react";
import Grid from "@mui/material/Grid2";

import UploadFile from "../UploadFile/UploadFile";
import PlayersTable from "../PlayersTable/PlayersTable";
import { Player } from "../../../types/players";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";
import GroupModal from "../GroupModal/GroupModal";

const Homepage = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | undefined>(undefined);

  const handleOpenModal = (type: string) => {
    setOpenModal(true);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalType(undefined);
  };

  return (
    <>
      <NavbarDrawer handleOpen={handleOpenModal} />
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
      <GroupModal
        open={openModal}
        handleClose={handleCloseModal}
        type={modalType}
      />
    </>
  );
};

export default Homepage;
