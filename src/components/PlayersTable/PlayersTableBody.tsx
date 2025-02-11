import React from "react";
import { Player } from "../../../types/players";
import { TableBody, TableRow, TableCell } from "@mui/material";

interface PlayersTableBodyProps {
  players: Player[];
}

const PlayersTableBody = ({ players }: PlayersTableBodyProps) => {
  const RenderTableRows = () => (
    <>
      {players.map((player) => (
        <TableRow>
          <TableCell>{player.group}</TableCell>
          <TableCell>{player.name}</TableCell>
          <TableCell>{player.average}</TableCell>
          <TableCell>{player?.family}</TableCell>
          <TableCell>{player?.friend}</TableCell>
        </TableRow>
      ))}
    </>
  );
  return (
    <TableBody>
      <RenderTableRows />
    </TableBody>
  );
};

export default PlayersTableBody;
