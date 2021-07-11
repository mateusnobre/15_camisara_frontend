import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import ProductDetails from "../components/Product/ProductDetails/ProductDetails";
import ProductDescription from "../components/Product/ProductDescription/ProductDescription";
import ProductEvaluation from "../components/Product/ProductEvaluation/ProductEvaluation";
import firstImage from "../assets/images/test_product.jpg";
import secondImage from "../assets/images/test_product2.jpg";

const product = {
  mainImage: firstImage,
  images: [firstImage, secondImage],
  title: "Camisa Moletom Flamengo",
  price: "50.00",
  description:
    "Os ídolos do Mengão treinam para dar o melhor em campo. Aqui fora, você pode se sentir como um deles usando a Blusa Flamengo Masculina da Adidas. O modelo da linha de treino da temporada 21/22 chega num tecido leve e respirável, além de fecho em meio zíper com abertura para os polegares, garantindo conforto durante o uso. Exiba sua paixão pelo rubro-negro dentro e fora do Maracanã com a Blusa Masculina do Flamengo. Garanta já a sua e marque esse golaço!",
  sizes: ["PP", "P", "M", "G", "GG"],
  evaluations: {
    avgRating: 3.6,
    numberEvaluations: {
      1: 29,
      2: 11,
      3: 105,
      4: 186,
      5: 163,
      total: 494,
    },
    usersEvaluations: [
      {
        username: "Cesar",
        evaluated_at: "07-05-2021",
        rating: 5,
        opinion:
          "Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade.Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. ",
        title: "Recomendo!",
      },
      {
        username: "Cesar",
        evaluated_at: "07-05-2021",
        rating: 5,
        opinion:
          "Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade.Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. Produto muito bom, de bastante qualidade. ",
        title: "Recomendo!",
      },
    ],
  },
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
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.background};
`;
