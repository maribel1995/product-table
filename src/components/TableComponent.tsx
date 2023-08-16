import { Link } from "react-router-dom";
import { shoes as tenis, eletronicos } from "../data";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

interface TableProps {
  productName: 'tenis' |'eletronicos' | 'maquiagens';
}
function TableComponent({ productName }: TableProps) {
    const products = {
        tenis,
        eletronicos,
        maquiagens: []
    }
    const productList = products[productName]
  return (
    <Stack direction="row">
      {productList.map((product, index) => (
        <Card key={index} sx={{ width: 200, margin: "5px" }}>
          <CardMedia
          component={Link} to={`/${productName}/${product.value}`}
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
