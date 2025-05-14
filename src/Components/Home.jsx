import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { menuItems } from "../Menulist";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Box,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateQuantity } from "./Slices/cartSlice";
import Carousel from "./Carousel";

function Home() {
  const allItems = menuItems.flatMap((section) => section.items);
  const shuffledItems = allItems.sort(() => 0.5 - Math.random());
  const randomItems = shuffledItems.slice(0, 6);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (product, index) => {
    dispatch(
      updateQuantity({
        ...product,
        id: index,
        price: parseInt(product.price.replace(/[^0-9]/g, "")),
        quantity: 1,
      })
    );
    navigate("/cart");
  };

  return (
    <Box sx={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#00796b",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          At Tastebuds, flavor isn &apos;t just a taste — it &apos;s a feeling
        </Typography>
        <Typography variant="h6" mt={2}>
          Feel the Epic!
        </Typography>
      </Box>

      {/* Menu Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Today&apos;s Specials<hr/>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {randomItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  boxShadow: 3,
                  backgroundColor: "#fffefb",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "#00796b" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#C69320" }}
                    mt={1}
                  >
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00796b",
                      color: "#C69320",
                      borderRadius: "12px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#b1811c",
                        color: "#005f56",
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    size="small"
                    onClick={() => addToCart(item, index)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00c7b0",
                      color: "#846215",
                      borderRadius: "12px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#b1811c",
                        color: "#005f56",
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    size="small"
                    onClick={() => navigate('/menu')}
                  >
                   Go to Menu
                  </Button>
                             </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Carousel Section */}
      <Carousel />

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fdd835",
          py: 4,
          textAlign: "center",
          mt: 8,
          borderTop: "2px solid #fdd835",
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          &copy; {new Date().getFullYear()} Tastebuds. All rights reserved.
        </Typography>

        <Typography variant="body2" mt={1}>
          <Link
            href="mailto:info@tastebuds.com"
            sx={{
              color: "#fdd835",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            info@tastebuds.com
          </Link>{" "}
          | 1800-123-456
        </Typography>

        <Box
          mt={2}
          display="flex"
          justifyContent="center"
          gap={3}
          flexWrap="wrap"
        >
          {["Privacy Policy", "Terms of Service", "Help"].map((text, index) => (
            <Link
              key={index}
              href="#"
              sx={{
                color: "#fdd835",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline",
                  color: "#fff",
                },
              }}
            >
              {text}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
