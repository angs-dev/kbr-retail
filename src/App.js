import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Modal, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const products = [
    { id: 1, name: 'Stone Vinayagar', description: 'Stone Vinayagar.', img:"https://lh3.googleusercontent.com/glsgmb/AMnFcuq-hNqI0eGfaezGpTgB4LqiW0KSnHQzpoaC28G7gmIvZjBeKzdETX_OZmPEXcb8zK1cjL7D9xLej6rtEyrHGJR2kQ=w671-h608-k-rw-no-sc0x00ffffff" },
    { id: 2, name: 'MANIPURI DOLL', description: 'MANIPURI DOLL.', img: 'https://lh3.googleusercontent.com/glsgmb/AMnFcuoeH6p3waWksOHIN_Z_Exh7tlOpAtKoY8XyxJ5oqjNuxOwYMko6CGEcNQIWi2MQ8wuJK6MK0geW10bc281HOhQgXQ=w1335-h608-k-rw-no-sc0x00ffffff' },
    { id: 3, name: 'TANJORE DANCING DOLL', description: 'Tanjore Dancing Doll.', img: 'https://lh3.googleusercontent.com/glsgmb/AMnFcuoeH6p3waWksOHIN_Z_Exh7tlOpAtKoY8XyxJ5oqjNuxOwYMko6CGEcNQIWi2MQ8wuJK6MK0geW10bc281HOhQgXQ=w1335-h608-k-rw-no-sc0x00ffffff' },
    { id: 4, name: 'Golu Dolls', description: 'Golu Dolls.', img: 'https://lh3.googleusercontent.com/glsgmb/AMnFcuqqmb3YyVPtGUVOYshUP-ZbpnQdHBV0yr5TVQIRsi_56UDVsXjYIclZ6rgcvcDiipzeiBga6E3vXH_tv-xaZPWfuQ=w608-h811-k-rw-no-sc0x00ffffff' },
  ];

  // Slick carousel settings with faster speed
  const settings = {
    dots: true,
    infinite: true,
    speed: 300, // Faster transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Faster autoplay speed
  };

  return (
    <div style={{ background: 'linear-gradient(to right, #f8eec7, #e0c3fc)', minHeight: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" style={{ backgroundColor: '#3f2a2a' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ fontFamily: 'Georgia, serif', color: '#fff' }}>
            KBR Retail
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f5f5dc', marginBottom: 4, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        <Typography variant="h2" color="primary" gutterBottom style={{ fontFamily: 'Georgia, serif', color: '#3f2a2a' }}>
          Welcome to KBR Retail
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph style={{ fontFamily: 'Georgia, serif' }}>
          Explore a wide range of Hinduism-related products.
        </Typography>
      </Box>

      {/* Products Carousel */}
      <Container>
        <Typography variant="h4" color="primary" gutterBottom align="center" style={{ fontFamily: 'Georgia, serif', color: '#3f2a2a' }}>
          Our Products
        </Typography>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <Box sx={{ textAlign: 'center', padding: '20px' }}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'contain', // Ensures the image is fully visible without distortion
                    cursor: 'pointer',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  }}
                  onClick={() => handleOpen(product.img)}
                />
                <Typography variant="h5" sx={{ mt: 2, fontFamily: 'Georgia, serif' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
              </Box>
            </div>
          ))}
        </Slider>
      </Container>

      {/* Google Search Button */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h4" color="primary" gutterBottom style={{ fontFamily: 'Georgia, serif', color: '#3f2a2a' }}>
          Check KBR Trading on Google
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="https://www.google.com/search?q=kbr+trading&sca_esv=7ffb7a96b4e8ce9c&sca_upv=1&sxsrf=ADLYWIIlqjedRK0O_rOdyrIaCD-FAZdC8w%3A1726825723385&ei=-0TtZvueF_vy4-EP3dXSmQY&oq=kbr+trad&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGticiB0cmFkKgIIADIKECMYgAQYJxiKBTILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSPYVUABY3QxwAHgAkAEAmAGZAaABgQiqAQMwLji4AQPIAQD4AQGYAgigAqQIwgIEECMYJ8ICCxAAGIAEGJECGIoFwgIIEC4YgAQYsQPCAgsQABiABBixAxiDAcICEBAuGIAEGNEDGEMYxwEYigXCAg0QABiABBixAxhDGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICDBAAGIAEGEMYigUYCsICFhAuGIAEGLEDGNEDGIMBGBQYxwEYhwLCAgoQABiABBhDGIoFwgIEEAAYA8ICChAAGIAEGBQYhwLCAggQABiABBixA8ICFhAuGIAEGLEDGNEDGIMBGBQYhwIYxwGYAwCSBwMwLjigB_FO&sclient=gws-wiz-serp#lpc=lpc&scso=_F0ftZtz5Np7l4-EP3dXAo_42:358" 
          target="_blank"
          style={{ backgroundColor: '#8b0000', color: 'white', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
        >
          View KBR Trading on Google
        </Button>
      </Box>

      {/* Contact Information Section */}
      <Box sx={{ padding: 4, backgroundColor: '#f8f0e3', textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom style={{ fontFamily: 'Georgia, serif', color: '#3f2a2a' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary" style={{ fontFamily: 'Roboto, sans-serif' }}>
          No.6F MEETU, Mettu St, Kundrathur, Chennai, Sikkarayapuram, Tamil Nadu 600069
        </Typography>
        <Typography variant="body1" color="textSecondary" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Phone: +91 98408 08388
        </Typography>
      </Box>

      {/* Modal to show full image */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={selectedImage} alt="Full size" style={{ width: '100%', objectFit: 'contain' }} />
        </Box>
      </Modal>

      {/* Footer */}
      <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#8b0000', color: 'white', marginTop: 4 }}>
        <Typography variant="body1">© 2024 KBR Retail | All Rights Reserved</Typography>
      </Box>
    </div>
  );
}

export default App;
