"use client";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

/**
 * Página de Productos
 */
export default function ProductosPage() {
  return (
    <Box component="section">
      {/* Título principal */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Nuestros Productos
      </Typography>

      {/* Descripción */}
      <Typography variant="body1" sx={{ mb: 4 }}>
        Explora nuestra gama de productos de interior y exterior.
      </Typography>

      {/* Emula: `grid grid-cols-1 md:grid-cols-2 gap-8` */}
      <Grid container spacing={4}>
        {/* Productos de Interior */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Productos de Interior
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Cortinas blackout, romanas, paneles japoneses.
              </Typography>

              {/* Emula: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4` */}
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
            </CardContent>
          </Card>
        </Grid>

        {/* Productos de Exterior */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Productos de Exterior
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Persianas enrollables, cortinas de PVC, toldos.
              </Typography>

              {/* Emula: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4` */}
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

/**
 * Componente auxiliar para simular "aspect-w-16 aspect-h-9"
 * (relación de aspecto 16:9) en MUI.
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
        pt: "56.25%", // 16:9 ratio => (9 / 16) * 100 = 56.25%
        backgroundColor: "gray", // Emula bg-gray-200
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
