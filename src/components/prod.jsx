import React from 'react'
import { Box, Container, Grid } from '@mui/material'

export default function Prod() {
  return (
    <Box
    sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        pt: 8,
        pb: 8,
        }}
    >
    <Container maxWidth="xl" >
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
                }}
            >
            <img
                src="/assets/DSC_0573.JPG"
                alt="product"
                style={{ width: "100%" }}
            />
            </Box>
        </Grid>
        </Grid>

    </Container>
    </Box>
  )
}
