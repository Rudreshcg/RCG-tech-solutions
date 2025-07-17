"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Divider,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const GOLD_COLOR = "#bfa055";
const BLACK_COLOR = "#000";
const GRAY_COLOR = "#595959";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();

  // Get the height of the AppBar dynamically
  // This helps position the drawer correctly
  const appBarHeight = { xs: "70px", md: "90px" }; // Match minHeight from Toolbar

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky" // Keep sticky for scroll behavior
        color="default"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: GRAY_COLOR,
          width: "100%",
          borderBottom: "1px solid #eee",
          // Set a high zIndex for the AppBar to ensure it's always on top
          // A value like 1301 or higher than the Drawer's default is good
          zIndex: theme.zIndex.drawer + 1, // Ensures AppBar is always above the Drawer
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            minHeight: `${appBarHeight.xs} !important`, // Use dynamic height for consistency
            [theme.breakpoints.up('md')]: {
              minHeight: `${appBarHeight.md} !important`,
            },
            px: { xs: 3, md: 2 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/home"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/RCG-tech-solution-black-gold.png"
              alt="RCG Tech Solutions Logo"
              width={100}
              height={100}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: pathname === link.href ? GOLD_COLOR : BLACK_COLOR,
                    fontWeight: pathname === link.href ? 700 : 500,
                    fontSize: 18,
                    px: 3,
                    backgroundColor: "inherit",
                    borderRadius: 0,
                    textTransform: "none",
                    "&:hover": {
                      color: GOLD_COLOR,
                      backgroundColor: "inherit",
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            aria-label={
              drawerOpen ? "close navigation menu" : "open navigation menu"
            }
            aria-expanded={drawerOpen}
            sx={{
              display: { xs: "flex", md: "none" },
              color: drawerOpen ? GOLD_COLOR : BLACK_COLOR,
              // The IconButton should also be on top of the drawer if the drawer is full height
              zIndex: theme.zIndex.drawer + 2, // Even higher than AppBar
            }}
            onClick={toggleDrawer}
          >
            {drawerOpen ? (
              <CloseIcon fontSize="large" sx={{ color: GOLD_COLOR }} />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </IconButton>
        </Toolbar>
        <Divider sx={{ width: "100%" }} />
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            bgcolor: "black",
            width: "100vw",
            height: `calc(100vh - ${appBarHeight.xs})`, // Calculate height to start below AppBar
            mt: appBarHeight.xs, // Margin top to position below AppBar
            zIndex: theme.zIndex.drawer, // Default Drawer zIndex
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // For larger mobile screens (md breakpoint), adjust the height/mt if minHeight changes
            [theme.breakpoints.up('md')]: {
              height: `calc(100vh - ${appBarHeight.md})`,
              mt: appBarHeight.md,
            },
          },
        }}
        transitionDuration={300}
      >
        <Box sx={{ width: "100vw", height: "100vh" }}>
          <List sx={{ pt: 4 }}>

            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <Link
                  href={link.href}
                  style={{ textDecoration: "none", width: "100%" }}
                  passHref
                >
                  <ListItemButton
                    selected={pathname === link.href}
                    onClick={handleLinkClick}
                    sx={{
                      color: pathname === link.href ? GOLD_COLOR : "white",
                      justifyContent: "center",
                      py: 2,
                      fontSize: 22,
                      "&:hover": {
                        color: GOLD_COLOR,
                        backgroundColor: "inherit",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        align: "center",
                        fontWeight: pathname === link.href ? 700 : 500,
                        fontSize: 22,
                        color: pathname === link.href ? GOLD_COLOR : "white",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}