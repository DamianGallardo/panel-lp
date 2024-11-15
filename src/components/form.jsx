'use client'
import { Box, Container, Grid, Paper, TextField, Typography, Autocomplete, Button } from '@mui/material'
import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
export default function Form() {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');
  
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      numero: '',
      ciudad: '',
      mensaje: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  

    const clearForm = () => {
      setFormData({
        nombre: '',
        email: '',
        numero: '',
        ciudad: '',
        material: '',
        mensaje: ''
      });
      setSelectedImage(null); // Limpia la imagen seleccionada
    };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
    //   Configura tu Service ID, Template ID y User ID desde EmailJS
      emailjs.send('service_gctu3t4', 'template_2au8zzb', formData, 'ZLLf8eWbAHeReko05')
        .then((result) => {
          setAlertMessage('Mensaje enviado correctamente');
          setAlertSeverity('success'); // Alerta de éxito
          clearForm();
          setTimeout(() => {
              setAlertMessage('');
            }, 3000); // 3000 ms = 3 segundos
          })
        .catch((error) => {
          setAlertMessage('Error al enviar el mensaje');
          setAlertSeverity('error'); // Alerta de error
          setTimeout(() => {
              setAlertMessage('');
            }, 3000); // 3000 ms = 3 segundos
          })
    };
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Paper
          elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              bgcolor: "transparent",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                {/* <img
                  src="/assets/icons/TENSABUILDINGS-H.png"
                  alt="img"
                  style={{ borderRadius: "5px", width: "250px" }}
                /> */}
                <Typography
                  sx={{
                    fontSize: "2rem",
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    // color: "#FCBC00",
                    color: "#241E46",

                  }}
                >
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.4rem",
                    textAlign: "justify",
                    fontFamily: "Gilroy, sans-serif",
                    color: "#ffff",
                    fontWeight: 700,
                  }}
                >
                  Estamos listos para ayudarte a llevar tus ideas al siguiente
                  nivel. Ya sea que necesites más información, una cotización
                  personalizada o simplemente resolver tus dudas, nuestro equipo
                  está aquí para ti.
                </Typography>
                <form onSubmit={handleSubmit} id="form-section">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} >
                    <TextField
                      label="Nombre"
                      name="nombre"
                      variant="filled"
                      fullWidth
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      sx={{ bgcolor: "white" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      variant="filled"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ bgcolor: "white" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Número de Teléfono"
                      name="numero"
                      variant="filled"
                      type="tel" // Cambiado de "number" a "tel" para aceptar cualquier formato de teléfono
                      fullWidth
                      value={formData.numero}
                      onChange={handleChange}
                      required
                      inputProps={{ pattern: "[0-9]{10}" }} // Valida que sean solo números y con longitud de 10
                      sx={{ bgcolor: "white" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Ciudad"
                      name="ciudad"
                      variant="filled"
                      fullWidth
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                      sx={{ bgcolor: "white" }}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <TextField
                      label="Mensaje"
                      name="mensaje"
                      variant="filled"
                      multiline
                      rows={4}
                      fullWidth
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      sx={{ bgcolor: "white" }}
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ 
                          borderRadius: "5px", 
                          padding: "10px 30px", 
                          backgroundColor: "#323750",
                          color: "white",
                          transition: "all 0.3s",
                          '&:hover': {
                            color: "#fff", 
                            backgroundColor: "#323750",
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        Enviar
                      </Button>
                    </Box>
                    {alertMessage && <SimpleAlert>{alertMessage}</SimpleAlert>}
                  </Grid>
                </Grid>
              </form>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

function SimpleAlert({children, alert}) {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity={alert}>
        {children}
      </Alert>
    );
  }
