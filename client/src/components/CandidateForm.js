import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

export default function CandidateForm({ contract, web3, currentAccount }) {
  const [name, setName] = useState("");

  const handleThisForm = async (event) => {
    event.preventDefault();
    try {
      await contract.methods.addCandidate(name).send({ from: currentAccount });
      console.log("New candidate is added");
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
      <Stack direction="row" spacing={2}>
        <TextField
          id="outlined-basic"
          label="Candiate Name"
          variant="outlined"
          value={name}
          onChange={nameChange}
          style={{width:"340px"}}
          helperText="e.g.Candidate Singh Dhillon"
        />
        <Button variant="contained" type="submit" style={{backgroundColor: '#54a3d6',height:"50px", fontWeight: 'bold'}}>
          Add Candiates
        </Button>
      </Stack>
    </Box>
  );
}
