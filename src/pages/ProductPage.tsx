import { Container } from "@mui/material";

const ProductPage = () => {
    return (
        <Container sx={{
            marginTop: "74px", 
            minWidth: "100%",
            marginRight: "0px",
            marginLeft: "0px",
            "@media (min-width:600px)": {
                paddingLeft: "0px",
                paddingRight: "0px",
            },
        }}>
            <p>this is product page</p>
        </Container>
    );
};


export default ProductPage;