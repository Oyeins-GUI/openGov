import {
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Stack,
   Card,
   CardContent,
   CardActions,
} from "@mui/material";
import {
   ExpandMore,
   ThumbUpOffAlt,
   ThumbDownOffAlt,
   Share,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { tupleToObject } from "../utils/tupleToObject";
import { splitProposalId } from "../utils/splitId";
import { likeProposal, dislikeProposal } from "../utils/ContractCall";
import { useState, useEffect } from "react";

export default function GetProposals() {
   const contractId = "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N.open-gov-v2";
   const [contractEvents, setContractEvents] = useState([]);

   useEffect(() => {
      const getContractEvents = async () => {
         const req = await fetch(
            `https://api.testnet.hiro.so/extended/v1/contract/${contractId}/events`
         );
         const res = await req.json();
         setContractEvents(res.results);
      };
      getContractEvents();
   }, []);

   return (
      <>
         <Typography
            sx={{
               marginTop: "80px",
               marginBottom: "10px",
               textAlign: "center",
            }}
            variant="h4"
         >
            All Proposals
         </Typography>
         <Stack
            sx={{
               margin: "auto",
               maxWidth: "620px",
               paddingInline: "20px",
            }}
            direction="column"
         >
            {contractEvents.map((event, i) => {
               const tupleObject = tupleToObject(event.contract_log.value.repr);
               const desc = tupleObject.tuple.split("(desc ")[1];
               const id = tupleObject.id;

               if (id === undefined) return;

               return (
                  <div key={i}>
                     <Accordion sx={{ marginTop: "15px" }}>
                        <AccordionSummary
                           expandIcon={<ExpandMore />}
                           sx={{
                              textTransform: "capitalize",
                              display: "flex",
                              alignItems: "center",
                           }}
                        >
                           <Typography variant="h6">
                              {tupleObject.title}{" "}
                              <Typography
                                 variant="body1"
                                 sx={{
                                    textTransform: "lowercase",
                                    display: "flex",
                                    alignItems: "center",
                                 }}
                              >
                                 id: {splitProposalId(id)}
                              </Typography>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <Card>
                              <CardContent>{desc}</CardContent>
                              <CardActions>
                                 <IconButton onClick={() => likeProposal(id)}>
                                    <ThumbUpOffAlt />
                                    <Typography>0</Typography>
                                 </IconButton>
                                 <IconButton
                                    onClick={() => dislikeProposal(id)}
                                 >
                                    <ThumbDownOffAlt />
                                    <Typography>0</Typography>
                                 </IconButton>
                                 <IconButton>
                                    <LanguageIcon />
                                 </IconButton>
                                 <IconButton>
                                    <Share />
                                 </IconButton>
                              </CardActions>
                           </Card>
                        </AccordionDetails>
                     </Accordion>
                  </div>
               );
            })}
         </Stack>
      </>
   );
}
