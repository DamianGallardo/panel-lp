import React from 'react'
import { Box, Card, Container, Grid, Typography, CardMedia} from '@mui/material'

export default function Prod() {

    const Item = [
        {
            name: "Panel Tipo Sandwich",
            desc: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/glamet-.png.webp",
        },
        {
            name: "Panel Tipo Sandwich",
            desc: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/lamina-ondulada-o100-aceroscrea.png",
        },
        {
            name: "Panel Tipo Sandwich",
            desc: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/glamet-.png.webp",
        },
        {
            name: "Panel Tipo Sandwich",
            desc: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/glamet-.png.webp",
        },
    ]

return (
  <Box
    sx={{
      display: "flex",
      height: "100vh",
      width: "100%",
      flexDirection: "column",
      mt: "74px",
      pb: 8,
    }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            sx={{
              fontFamily: "Gasoek One",
              fontSize: "70px",
              fontWeight: 400,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Cotiza con el mejor del mercado
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              mt: 5,
              backgroundColor: "black",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gasoek One",
                fontSize: "30px",
                fontWeight: 200,
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Contamos un amplio stock de productos de la mejor calidad
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={'20px'}>
        {Item.map((item, index) => (
        <Grid item xs={12} sm={3} md={3} key={index} >
        <Card
        elevation={0}
        sx={{bgcolor:"transparent"}}
        >
        <Typography
          sx={{
            fontFamily: "Gasoek One",
            fontSize: "40px",
            fontWeight: 400,
            textAlign: "center",
            textTransform: "uppercase",
            color: "white",
            mt: 5,
          }}
        >
            {item.name}
        </Typography>
        <CardMedia
            component="img"
            height="140"
            image={item.img}
            alt={item.name}
        />
        </Card>
      </Grid>
        ))}
        </Grid>
    </Container>
  </Box>
);
}
