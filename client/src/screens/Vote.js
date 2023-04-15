import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Candidate from "../components/CandidateCard";

export default function Vote({ role, contract, web3, currentAccount }) {
  // const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [vote, setVote] = useState(null);
  const [electionState, setElectionState] = useState(0);
  const [winner, setWinner] = useState(null);
  const [Cand, setCand] = useState(null);
  const [open, setOpen] = useState(false);

  const getCandidates = async () => {
    if (contract) {
      const count = await contract.methods.candidatesCount().call();
      const temp = [];
      var maxx = 0;
      for (let i = 0; i < count; i++) {
        const candidate = await contract.methods.getCandidateDetails(i).call();
        temp.push({ name: candidate[0], votes: candidate[1] });
        if(candidate[1] > maxx){
          setWinner(candidate[0]);
        }
      }
      setCandidates(temp);
      // setLoading(false);
    }
  };

  const getVotedCandDetails = async () => {
    const candidate = await contract.methods.getVotedCand(currentAccount).call();
    console.log(`voted candidate is : ${Cand}`);
    setCand(candidate);
  };

  const voteCandidate = async (candidate) => {
    try {
      if (contract) {
        await contract.methods.vote(candidate).send({ from: currentAccount });
        getCandidates();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getElectionState = async () => {
    if (contract) {
      const state = await contract.methods.electionState().call();
      setElectionState(parseInt(state));
    }
  };

  useEffect(() => {
    getElectionState();
    getCandidates();
  }, [contract]);

  const handleVoteChange = (event) => {
    setVote(event.target.value);
  };

  const handleVote = (event) => {
    event.preventDefault();
    voteCandidate(vote);
    getVotedCandDetails();
  };

  return (
    <Box>
      <form onSubmit={handleVote}>
        <Grid container sx={{ mt: 0 }} spacing={6} justifyContent="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h6">
              {electionState === 0 &&
                "Election has not started yet."}
              {(electionState === 1 && Cand == null) && "VOTE FOR YOUR FAVOURITE CANDIDATE"}
              {(electionState === 1 && Cand != null) && (<Typography align="center" variant="h6">You Voted to {Cand}</Typography>)}         
             {electionState === 2 &&
                "Election has ended."}
            </Typography>
            <Divider />
          </Grid>
          {electionState === 1 && (
            <>
              <Grid item xs={12}>

                <FormControl>
                  <RadioGroup
                    sx={{
                      overflowY: "hidden",
                      overflowX: "auto",
                      display: "flex",
                      width: "98vw",
                      justifyContent: "center",
                    }}
                    value={vote}
                    onChange={handleVoteChange}
                  >
                    {candidates.map((candidate, index) => (
                    <Box display="flex" alignContent={"center"} paddingLeft={"500px"}>
                      <FormControlLabel
                        key={index}
                        labelPlacement="start"
                        control= {<Radio />}
                        value= {index.toString()}
                        label={<Candidate id={index} name={candidate.name} />}
                        style={{ margin: '8px 0' }}
                      />
                    </Box>
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <div style={{ margin: 20, marginLeft : "100px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "80%" }}   
                  >
                    Vote
                  </Button>
                </div>
              </Grid>
            </>
          )}

          {electionState === 2 && (
            <Grid
              item
              xs={12}
              sx={{
                overflowY: "hidden",
                overflowX: "auto",
                display: "flex",
                width: "98vw",
                justifyContent: "center",
              }}
            >
              {candidates &&
                candidates.map((candidate, index) => (
                  <Box sx={{ mx: 2 }} key={index}>
                    <Candidate
                      id={index}
                      name={candidate.name}
                      voteCount={candidate.votes}
                    />
                  </Box>
                ))}

            </Grid>
          )}
        </Grid>
      </form>
      {electionState === 2 && (<Typography align="center" variant="h3" style={{marginTop : "50px"}}>Congrats! {winner} is the winner. </Typography>)}

    </Box>
  );
}
