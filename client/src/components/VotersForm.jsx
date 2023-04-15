import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

export default function VotersForm({ contract, web3, currentAccount }) {
  const [name, setName] = useState("");

  const handleThisForm = async (event) => {
    event.preventDefault();
    try {
      await contract.methods.addVoter(name).send({ from: currentAccount });
      console.log("New voter is added");
    } catch (error) {
      console.log(error);
    }
    setName("");
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        width: "40%",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleThisForm}
    >
      <Stack direction = "row" spacing={2}>
        <TextField
          id="outlined-basic"
          label="Voter Address"
          variant="outlined"
          value={name}
          onChange={nameChange}
          style={{width:"340px"}}
          helperText="e.g.0x09df682317AFDb9326257950066BE815131D213C"
        />
        <Button variant="contained" type="submit" style={{height:"50px"}}>
          Add Voter
        </Button>
      </Stack>
    </Box>
  );
}
