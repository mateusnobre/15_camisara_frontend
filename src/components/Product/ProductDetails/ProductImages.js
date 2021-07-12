import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactImageZoom from "react-image-zoom";
import colors from "../../Colors";
import Zoom from "react-img-zoom";

export default function Images({ product }) {
  const [mainImage, setMainImage] = useState(product.main_image);
  const [bigImageOptions, setBigImageOptions] = useState({
    ...bigImage,
    img: product.main_image,
  });

  function selectImage(imgSelected) {
    setMainImage(imgSelected);
    setBigImageOptions({ ...bigImage, img: imgSelected });
    <Zoom img={mainImage} width={400} height={400} zoomScale={2}></Zoom>;
  }

  return (
    <Container>
      <AllImages>
        {product.images.map((img, i) => (
          <SmallImage
            src={img}
            alt="Product Image"
            selected={img === mainImage}
            onClick={() => selectImage(img)}
            key={i}
          />
        ))}
      </AllImages>
      {Boolean(bigImageOptions.img) && (
        <ReactImageZoom {...bigImageOptions}></ReactImageZoom>
      )}

      {/* {mainImage && (
        <Zoom img={mainImage} width={400} height={400} zoomScale={2}></Zoom>
      )} */}
    </Container>
  );
}

const Container = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
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
};
