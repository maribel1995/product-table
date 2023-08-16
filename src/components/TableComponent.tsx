import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
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
    <Stack direction="row">
      {products.map((product, index) => (
        <Card key={index} sx={{ width: 200, margin: "5px" }}>
          <CardMedia
          component={Link} to={`/${productType}/${product.value}`}
            image={product.url}
            sx={{ height: 250, backgroundSize: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default TableComponent;
