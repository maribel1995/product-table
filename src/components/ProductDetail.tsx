import { Box } from "@mui/material";
import { useParams } from "react-router";

interface ProductDetailProps {
  products:  {
    url: string;
    name: string;
    value: string;
    price: string;
}[]
}
function ProductDetail({ products }: ProductDetailProps) {
    const {id} = useParams()
    const productIndex = products.findIndex((product) => product.value === id)
    const product = products[productIndex]
  return (
    <Box sx={{width: "380px"}}>
   <img src={product.url} alt={product.name} style={{width: "100%"}}/>
   </Box>
  );
}

export default ProductDetail;
