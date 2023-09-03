import { openContractCall } from "@stacks/connect";
import { uintCV, stringAsciiCV } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

const testnet = new StacksTestnet();

export async function callCreateProposal(title, niche, description) {
   const functionArgs = [
      stringAsciiCV(title),
      stringAsciiCV(niche),
      stringAsciiCV(description),
   ];

   const options = {
      network: testnet,
      contractAddress: "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N",
      contractName: "open-gov",
      functionName: "create-proposal",
      functionArgs,
      appDetails: {
         name: "openGov",
         icon: window.location.origin + "/my-app-logo.svg",
      },
      onFinish: (data) => {
         const explorerTransactionUrl = `https://explorer.stacks.co/txid/${data.txId}`;
         console.log("Stacks Transaction:", data.stacksTransaction);
         console.log("Transaction ID:", data.txId);
         console.log("Raw transaction:", data.txRaw);
         console.log("View transaction in explorer:", explorerTransactionUrl);
      },
   };

   await openContractCall(options);
}
