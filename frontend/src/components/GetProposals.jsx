import {
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Stack,
} from "@mui/material";
import { tupleToObject } from "../utils/tupleToObject";
import { useState, useEffect } from "react";

export default function GetProposals() {
   const contractId = "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N.open-gov";
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
            style={{
               marginTop: "80px",
               marginBottom: "10px",
               textAlign: "center",
            }}
            variant="h4"
         >
            All Proposals
         </Typography>
         <Stack
            sx={{ margin: "auto", maxWidth: "620px", paddingInline: "20px" }}
            direction="column"
         >
            {contractEvents.map((event, i) => {
               const tupleObject = tupleToObject(event.contract_log.value.repr);
               const desc = tupleObject.tuple.split("(desc ")[1];

               return (
                  <Accordion key={i} sx={{ marginTop: "15px" }}>
                     <AccordionSummary>{tupleObject.title}</AccordionSummary>
                     <AccordionDetails>{desc}</AccordionDetails>
                  </Accordion>
               );
            })}
         </Stack>
      </>
   );
}
