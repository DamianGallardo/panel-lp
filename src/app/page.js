import React from "react";
import Banner from "@/components/banner";
import { Box } from "@mui/material";

export default function Home() {
  return (
   <>
   <Box sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
   }} >
   <Banner  img={"/assets/DSC_0573.JPG"} />
   <Banner  img={"/assets/DSC_0573.JPG"} />

    </Box>
   </>
  );
}
