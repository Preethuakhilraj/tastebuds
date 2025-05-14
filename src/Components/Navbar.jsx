import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'; 
const theme = createTheme({
  palette: {
    primary: {
      main: '#C69320'
    },
    secondary: {
      main: '#0000FF', 
    },
  },
});

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, margin: 0, marginBottom:5,padding:0}}>
        <AppBar position="static" color="primary">
         <Toolbar>
  {/* Logo or left-side content */}
  <img
    src="https://us.123rf.com/450wm/emcrea14/emcrea142102/emcrea14210201369/164594933-tb-letter-logo-design-with-restaurant-concept-modern-letter-logo-design-with-circular-fork-and.jpg?ver=6"
    alt="logo"
    height={60}
    width={60}
    className="logo-img"
  />

  {/* Right side controls */}
  <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }} className="nav-actions">
    <Button color="inherit" sx={{ mx: 1 }} className="btn" onClick={() => navigate("/")}>Home</Button>
    <Button color="inherit" sx={{ mx: 1 }} className="btn" onClick={() => navigate("/menu")}>Menu</Button>
    <Button color="secondary" variant="outlined" className="btn" sx={{ mx: 1 }} onClick={() => navigate("/login")}>Login</Button>

    <Link to="/cart" className="cart-icon-wrapper">
      <ShoppingCartIcon style={{ fontSize: 30, color: "#fff" }} />
      {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </Link>
  </Box>
</Toolbar>

        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
