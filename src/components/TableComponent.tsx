import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Tabs } from "../data/tabs";

interface TableProps {
  products:  {
    url: string;
    name: string;
    value: string;
    price: string;
}[]
productType: Tabs
}
function TableComponent({ products, productType }: TableProps) {
   
  return (
    <Grid container spacing={1}>
      {products.map((product, index) => (
        <Grid item xs={6} md={8} lg={3} xl={3}>
        <Card key={index} sx={{height: '350px'}}>
          <CardMedia
          component={Link} to={`/${productType}/${product.value}`}
            image={product.url}
            sx={{ height: 250, backgroundSize: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price}
            </Typography>
          </CardContent>
        </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TableComponent;
