import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { callCreateProposal } from "../utils/ContractCall";

export default function ProposalForm() {
   const form = useForm({
      defaultValues: {
         title: "",
         niche: "",
         description: "",
      },
   });
   const { register, handleSubmit, formState } = form;
   const { errors } = formState;
   const onSubmit = (data) => {
      const { title, niche, description } = data;
      callCreateProposal(title, niche, description);
   };

   return (
      <>
         <div
            style={{
               marginTop: "80px",
               textAlign: "center",
            }}
         >
            <h1>Create A Proposal</h1>
            <form
               noValidate
               onSubmit={handleSubmit(onSubmit)}
               autoComplete="false"
               style={{
                  margin: "auto",
                  width: "100%",
                  maxWidth: "600px",
               }}
            >
               <Stack spacing={3} style={{ paddingInline: "10px" }}>
                  <TextField
                     label="Proposal Title"
                     type="text"
                     placeholder="Improving Clarity"
                     {...register("title", {
                        required: "Email is required",
                     })}
                     error={!!errors.title}
                     helperText={errors.title?.message}
                  />
                  <TextField
                     label="Proposal Niche"
                     type="text"
                     placeholder="Development, Governance"
                     {...register("niche", {
                        required: "Niche is required",
                     })}
                     error={!!errors.niche}
                     helperText={errors.niche?.message}
                  />
                  <TextField
                     label="Proposal Description"
                     type="text"
                     placeholder="An insight about the proposal"
                     multiline
                     maxRows={10}
                     {...register("description", {
                        required: "Description is required",
                     })}
                     error={!!errors.description}
                     helperText={errors.description?.message}
                  />
                  <Button type="submit" variant="contained">
                     Create
                  </Button>
               </Stack>
            </form>
         </div>
      </>
   );
}
