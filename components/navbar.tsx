"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

// Opcional: define un array con tus rutas para mapearlas fácilmente
const pages = [
  { label: "Inicio", path: "/" },
  { label: "Productos", path: "/products" },
  { label: "Contacto", path: "/contact" },
];

export default function Navbar() {
  // Para controlar el menú en móvil
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: "#04114e" }} // Color de fondo
    >
      <Toolbar>
        {/* Botón hamburguesa en MOBILE */}
        <Box 
          sx={{ 
            display: { xs: "flex", md: "none" }, 
            mr: 1 
          }}
        >
          <IconButton
            size="large"
            aria-label="menú"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                <Link 
                  href={page.path} 
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* LOGO + Título */}
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            flexGrow: { xs: 1, md: 0 } 
          }}
        >
          <Box
            component="img"
            src="/assets/logo.png"
            alt="logo"
            sx={{ 
              height: 40, 
              width: "auto", 
              mr: 1 
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              fontWeight: "bold", 
              color: "#ffffff" 
            }}
          >
            Cortinas Siglo XXI
          </Typography>
        </Box>

        {/* Menú en DESKTOP (oculto en móviles) */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: { xs: "none", md: "flex" }, 
            justifyContent: "flex-end" 
          }}
        >
          {pages.map((page) => (
            <Box 
              key={page.label} 
              sx={{ ml: 2 }}
            >
              <Link
                href={page.path}
                style={{
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 0.7)",
                  padding: "8px 16px",
                  borderRadius: 4,
                }}
              >
                {page.label}
              </Link>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
