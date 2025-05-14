
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { updateQuantity } from "../Components/Slices/cartSlice"; 
import { menuItems } from "../Menulist";
const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (product, id) => {
  dispatch(
    updateQuantity({
      ...product,
      id,
      price: parseInt(product.price.replace(/[^0-9]/g, "")), // remove ₹ symbol
      quantity: 1,
    })
  );
  navigate("/cart");
};


  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(180deg, #fffefb 0%, #fff6e5 100%)",
        py: 6,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Container>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#00796b", mt: 10 }}
        >
          Our Menu
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          Curated delights to satisfy every craving
        </Typography>
        <Divider
          sx={{ mb: 4, borderColor: "#C69320", borderBottomWidth: 2 }}
        />

        {menuItems.map((section, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: "#C69320",
                borderBottom: "2px solid #C69320",
                display: "inline-block",
                mb: 3,
              }}
            >
              {section.category}
            </Typography>
            <Grid container spacing={4}>
              {section.items.map((item, itemIdx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={itemIdx}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      backgroundColor: "#fffefb",
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
                        size="small"
                        variant="contained"
                     onClick={() => addToCart(item, `${index}-${itemIdx}`)}

                        sx={{
                          backgroundColor: "#C69320",
                          color: "#00796b",
                          fontWeight: "bold",
                          borderRadius: "20px",
                          px: 3,
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            backgroundColor: "#b1811c",
                            color: "#005f56",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Menu;
