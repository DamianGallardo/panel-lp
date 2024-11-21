import React from 'react'
import { Box, Card, Container, Grid, Typography, CardMedia} from '@mui/material'
import AnimatedBox from './genericsComponents/AnimatedBox';

export default function Prod() {

    const Item = [
        {
            name: "Panel Tipo Sandwich",
            title: "Contamos con un amplio stock de productos de la mejor calidad",
            description: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/glamet-.png.webp",
        },
        {
            name: "Panel Tipo Sandwich",
            title: "Contamos con un amplio stock de productos de la mejor calidad",
            description: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/lamina-ondulada-o100-aceroscrea.png",
        },
        {
            name: "Panel Tipo Sandwich",
            title: "Contamos con un amplio stock de productos de la mejor calidad",
            description: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/medidas-galvatecho.png",
        },
        {
            name: "Panel Tipo Sandwich",
            title: "Contamos con un amplio stock de productos de la mejor calidad",
            description: "Contamos con un amplio stock de productos de la mejor calidad",
            img: "/assets/cards/glamet-.png.webp",
        },
    ]

return (
  <Box
    sx={{
      display: "flex",
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
            <Grid item xs={12} sm={12} md={12} key={index}>
            <AnimatedBox>
        <Box
            sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            mt: 5,
            }}
        >
            <Card
            elevation={0}
            sx={{
                bgcolor:"transparent",
                width: "500px",
            }}
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
                image={item.img}
                alt={item.name}
                />
            </Card>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                mt: 5,
                }}
            >
            <Typography sx={{color: "white", mt: 5, textAlign: "left",fontSize:"30px" }}>
                {item.title}
            </Typography>
            <Typography sx={{color: "white", mt: 5, textAlign: "left"}}>
                {item.description}
            </Typography>
            </Box>
        </Box>
      </AnimatedBox>
      </Grid>
        ))}
        </Grid>
    </Container>
  </Box>
);
}
