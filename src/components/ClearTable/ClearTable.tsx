import { Button } from "@mui/material";
import React from "react";

interface ClearTableProps {
  onClick: () => void;
}

const ClearTable = ({ onClick }: ClearTableProps) => {
  return (
    <Button variant={"outlined"} color={"error"} onClick={onClick}>
      Clear Table
    </Button>
  );
};

export default ClearTable;
