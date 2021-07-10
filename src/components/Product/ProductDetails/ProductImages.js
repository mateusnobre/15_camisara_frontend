import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactImageZoom from "react-image-zoom";
import firstImage from "../../../assets/images/test_product.jpg";
import secondImage from "../../../assets/images/test_product2.jpg";
import colors from "../../Colors";

export default function Images() {
  const [availableImages, setAvailableImages] = useState([]);
  const [mainImage, setMainImage] = useState(firstImage);
  const bigImageOptions = { ...bigImage, img: mainImage };

  useEffect(() => {
    setAvailableImages([
      firstImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
      secondImage,
    ]);
    setMainImage(firstImage);
    console.log(bigImageOptions);
  }, []);

  return (
    <Container>
      <AllImages>
        {availableImages.map((img) => (
          <SmallImage
            src={img}
            alt="Product Image"
            selected={img === mainImage}
            onClick={() => setMainImage(img)}
          />
        ))}
      </AllImages>
      <ReactImageZoom {...bigImageOptions}></ReactImageZoom>
    </Container>
  );
}

const Container = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  padding-top: 40px;
`;

const AllImages = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  overflow: scroll;
`;

const SmallImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border: ${(props) =>
    props.selected ? `4px ${colors.greenLight} solid` : ""};
  border-radius: 5px;
  cursor: pointer;
`;

const bigImage = {
  width: 400,
  zoomWidth: 400,
  zoomStyle: { opacity: 0.5 },
};
