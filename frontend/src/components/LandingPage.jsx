import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function LandingPage() {
   return (
      <>
         <div style={{ display: "grid", placeItems: "center" }}>
            <Typography
               variant="h3"
               style={{
                  marginTop: "80px",
                  textAlign: "center",
                  minWidth: "300px",
                  maxWidth: "500px",
               }}
            >
               Lorem ipsum dolor sit amet consectetur elit!
            </Typography>
         </div>
         <div
            style={{
               display: "grid",
               placeItems: "center",
            }}
         >
            <Typography
               variant="subtitle2"
               style={{
                  marginTop: "20px",
                  // textAlign: "",
                  fontSize: "18px",
                  paddingInline: "10px",
               }}
               sx={{ maxWidth: "600px", textAlign: "center" }}
            >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
               molestias dolores corrupti officiis quos architecto est deleniti
               quis cupiditate ratione autem facilis illo nihil eum porro
               accusantium fugit quam ipsa similique id facere, laudantium
               veritatis? Corporis neque laboriosam quo! Laborum quibusdam minus
               fugiat libero beatae explicabo neque corrupti asperiores maiores.
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Assumenda, eligendi Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Necessitatibus minus alias deleniti eius,
               asperiores repudiandae vero? Hic ipsum rerum neque molestiae quo
               impedit, ipsa reiciendis corrupti eveniet? Maxime, commodi
               veritatis.
            </Typography>
            <Button variant="outlined" style={{ marginBlock: "20px" }}>
               Get Started
            </Button>
         </div>
      </>
   );
}
