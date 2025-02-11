import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  MenuItem,
  Paper,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { SelectChangeEvent } from "@mui/material/Select";

import { Player } from "../../../types/players";
import PlayersTableBody from "./PlayersTableBody";

const columns = ["GROUP", "NAME", "AVERAGE", "FAMILY", "FRIEND", "ACTION"];
const groups = ["Church", "Sarah", "Esther", "Daniel", "John", "Y.A.", "Youth"];

interface PlayersTableProps {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

const emptyPlayer: Player = {
  group: undefined,
  name: undefined,
  average: undefined,
  family: undefined,
  friend: undefined,
};

const PlayersTable = ({ players, setPlayers }: PlayersTableProps) => {
  const [manualEntryPlayer, setManualEntryPlayer] =
    useState<Player>(emptyPlayer);

  useEffect(() => {
    console.log("- - - - - - - useEffect - - - - - - -");
  }, []);

  const RenderTableHeaders = () => (
    <>
      {columns.map((heading) => (
        <TableCell key={heading}>{heading}</TableCell>
      ))}
    </>
  );

  const RenderPlayerInfoInput = () => (
    <>
      <TableCell>
        <Select
          value={manualEntryPlayer.group?.toLowerCase()}
          onChange={handleSelectChange}
        >
          {groups.map((group) => (
            <MenuItem value={group.toLowerCase()}>{group}</MenuItem>
          ))}
        </Select>
      </TableCell>
      {columns.slice(1, -1).map((heading) => (
        <TableCell key={heading}>
          <TextField
            name={heading.toLowerCase()}
            placeholder={heading}
            variant={"outlined"}
            onChange={handleFieldChange}
            value={manualEntryPlayer[heading.toLowerCase() as keyof Player]}
          />
        </TableCell>
      ))}
    </>
  );

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const key = name.toLowerCase() as keyof Player;

    console.log("name", name);
    console.log("value", value);

    const draftPlayerInfo = {
      ...manualEntryPlayer,
      [key]: value,
    };

    setManualEntryPlayer((prev) => ({ ...prev, [key]: value }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setManualEntryPlayer({
      ...manualEntryPlayer,
      group: event?.target.value as
        | "church"
        | "sarah"
        | "esther"
        | "daniel"
        | "john"
        | "Y.A."
        | "youth",
    });
  };

  const onDeleteClick = () => {
    console.log("- - - - - - - TODO: - - - - - - - \n on delete click");
    setManualEntryPlayer(emptyPlayer);
  };

  const onAddClick = () => {
    console.log("- - - - - - - TODO: - - - - - - - \n on save click");
  };

  console.log("manualEntryPlayer", manualEntryPlayer);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <RenderTableHeaders />
          </TableRow>
          <TableRow>
            <RenderPlayerInfoInput />
            <TableCell>
              <ButtonGroup variant="outlined">
                <Button
                  startIcon={<DeleteOutlinedIcon />}
                  color={"error"}
                  onClick={() => onDeleteClick()}
                >
                  DELETE
                </Button>
                <Button
                  endIcon={<AddCircleOutlineOutlinedIcon />}
                  onClick={() => onAddClick()}
                >
                  ADD
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        </TableHead>
        {players && <PlayersTableBody players={players} />}
        <TableFooter></TableFooter>
      </Table>
    </TableContainer>
  );
};

export default PlayersTable;
