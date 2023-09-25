export function splitProposalId(id) {
   let splitId = id.split("");
   console.log(splitId);
   splitId.splice(0, 1);

   return splitId.join("");
}
