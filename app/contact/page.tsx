"use client";

import { Box, Typography, TextField, Button } from "@mui/material";

export default function ContactoPage() {
  return (
    <Box component="section">
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Contáctanos
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Puedes escribirnos para cotizaciones o consultas.
      </Typography>
      <Box
        component="form"
        sx={{
          backgroundColor: "#f5f5f5", // Equivale a "bg-gray-100"
          p: 2,
          borderRadius: 1,
          boxShadow: 1,
          maxWidth: 600,    // Ajusta el ancho máximo
          margin: "0 auto", // Centra el formulario horizontalmente
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
