import { ReactNode } from "react";
import { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import "./globals.css"; // Opcional, si aún necesitas estilos globales
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Cortinas Siglo XXI",
  description: "Decoración de interiores y exteriores con estilo.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>
        {/* Usamos Box (MUI) para simular min-h-screen flex flex-col */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", // Forzamos al footer a ir abajo
          }}
        >
          {/* Navbar (client component) */}
          <Navbar />

          {/* Main Container (emula container mx-auto p-4, flex-grow) */}
          <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
            {children}
          </Container>

          {/* Footer */}
          <Box
            component="footer"
            sx={{
              backgroundColor: "#04114e",
              color: "white",
              textAlign: "center",
              py: 2,
            }}
          >
            <Typography variant="body2">
              &copy; 2024 Cortinas Siglo XXI. Todos los derechos reservados.
            </Typography>
          </Box>
        </Box>
      </body>
    </html>
  );
}
