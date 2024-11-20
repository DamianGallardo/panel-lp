'use client'
import Box from '@mui/material/Box';
import { Grid, Typography, Divider, Link, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer>
      <Box 
      sx={{
        padding: '20px',
        backgroundColor: '#353535',
        borderTop: '1px solid #e0e0e0',
        marginTop: '20px',
        color: 'white',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Container maxWidth='xl' >
        <Grid container spacing={1} >
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ paddingTop: '30px' }}>
              <Typography variant="h6" sx={{paddingBottom:"10px"}} >
                <Link href="/" color="inherit" underline="none" >
                Inicio  
                </Link>
              </Typography>
              <Typography variant="h6" sx={{paddingBottom:"10px"}}>
                <Link href="/nosotros" color="inherit" underline="none" >
                Nosotros
                </Link>
                </Typography>
              <Typography variant="h6" sx={{paddingBottom:"10px"}}>
                Contacto
                </Typography>
              </Box> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ paddingTop: '30px' }}>
              <Typography variant="h6" sx={{paddingBottom:"10px"}}>
              <Link href="/productos" color="inherit" underline="none"  >
              Poductos
              </Link></Typography>
              <Typography variant="h6" sx={{paddingBottom:"10px"}}>
                <Link href="/blog" color="inherit" underline="none" >
                Blog
                </Link>
                </Typography>
              <Box sx={{display:"flex",gap:"30px" }} >
                <Link href="" target="_blank" color="inherit">
                  <InstagramIcon />
                </Link>
                <Link href="" color="inherit">
                  <FacebookIcon />
                </Link>
                <Link href="" color="inherit">
                  <TwitterIcon />
                </Link>
              </Box>
              </Box> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            logo
            </Grid>
          <Grid item xs={12}>
            <Box sx={{width:'100%', height:'50px',}} >
        <Divider sx={{ backgroundColor: 'white', marginTop: '20px' }} />
        <Typography variant="body2" align="center" sx={{paddingTop:"10px"}}>
          © 2024 PanelTipoSandwich. All rights reserved.
          </Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
