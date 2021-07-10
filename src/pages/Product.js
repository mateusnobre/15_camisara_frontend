import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import ProductDetails from "../components/Product/ProductDetails/ProductDetails";
import ProductDescription from "../components/Product/ProductDescription/ProductDescription";
import firstImage from "../assets/images/test_product.jpg";
import secondImage from "../assets/images/test_product2.jpg";

const product = {
  mainImage: firstImage,
  images: [firstImage, secondImage],
  title: "Camisa Moletom Flamengo",
  price: "50.00",
  description:
    "Os ídolos do Mengão treinam para dar o melhor em campo. Aqui fora, você pode se sentir como um deles usando a Blusa Flamengo Masculina da Adidas. O modelo da linha de treino da temporada 21/22 chega num tecido leve e respirável, além de fecho em meio zíper com abertura para os polegares, garantindo conforto durante o uso. Exiba sua paixão pelo rubro-negro dentro e fora do Maracanã com a Blusa Masculina do Flamengo. Garanta já a sua e marque esse golaço!",
  availations: "",
  sizes: ["PP", "P", "M", "G", "GG"],
};

export default function Product() {
  return (
    <Container>
      <Topbar></Topbar>
      <ProductDetails product={product}></ProductDetails>
      <ProductDescription product={product}></ProductDescription>
      <ProductEvaluation product={product}></ProductEvaluation>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
`;

const ProductEvaluation = styled.div`
  height: 100px;
  background-color: black;
  width: 100%;
`;
