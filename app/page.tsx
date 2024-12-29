"use client";

import Link from "next/link";
import { Box, Typography, Grid, Button } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      component="section"
      // Emula "grid grid-cols-1 gap-8"
      // Notar que "mb, mt, py" etc. se pueden ajustar según tu gusto o tu theme.
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 8,
        p: 2, // padding global opcional
      }}
    >
      {/* Sección Hero */}
      <Box
        // Emula "hero bg-white-200 p-8 text-center"
        sx={{
          backgroundColor: "#ffffff", // Ajusta si deseas un tono gris claro
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Bienvenido a Cortinas Siglo XXI
        </Typography>
        <Typography variant="body1">
          Decoración de interiores y exteriores con estilo y calidad.
        </Typography>
      </Box>

      {/* Sección ¿Quiénes Somos? */}
      <Box
        // Emula "gallery bg-white p-8"
        sx={{
          backgroundColor: "#fff",
          p: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          ¿Quiénes Somos?
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>

      {/* Sección Nuestros Trabajos */}
      <Box
        // Emula "gallery bg-white p-8"
        sx={{
          backgroundColor: "#fff",
          p: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Nuestros Trabajos
        </Typography>

        {/* Emula "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" */}
        <Grid container spacing={2}>
          {/* Imágenes */}
          <Grid item xs={12} sm={6} md={4}>
            <AspectRatioImage
              src="/assets/test2.jpeg"
              alt="Trabajo 1"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AspectRatioImage
              src="/assets/test1.jpeg"
              alt="Trabajo 2"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AspectRatioImage
              src="/assets/test3.jpeg"
              alt="Trabajo 3"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Sección Contacto */}
      <Box
        // Emula "contact bg-white p-8 text-center text-black"
        sx={{
          backgroundColor: "#fff",
          p: 4,
          textAlign: "center",
          color: "#000",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          ¿Quieres Contactarnos?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Estamos aquí para ayudarte. Haz clic en el botón de abajo para
          contactarnos.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            ":hover": { backgroundColor: "#1565c0" },
          }}
        >
          <Link
            href="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            Ir a Contacto
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

/**
 * Componente auxiliar para simular la relación de aspecto (aspect-w-16 aspect-h-9)
 * con un contenedor 16:9
 */
function AspectRatioImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        pt: "56.25%", // 16:9
        backgroundColor: "gray", // Emula el bg-gray-200
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
