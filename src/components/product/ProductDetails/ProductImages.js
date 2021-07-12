import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactImageZoom from "react-image-zoom";
import colors from "../../Colors";
import Zoom from "react-img-zoom";
import firstImage from "../../../assets/images/logo_symbol.png";

export default function Images({ product }) {
  const [mainImage, setMainImage] = useState(product.main_image);
  const [bigImageOptions, setBigImageOptions] = useState({
    ...bigImage,
    img: firstImage,
  });
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    Boolean(product.main_image) &&
      setBigImageOptions({ ...bigImage, img: product.main_image });
  }, [product.main_image]);

  function selectImage(imgSelected) {
    setMainImage(imgSelected);
    setBigImageOptions({ ...bigImage, img: imgSelected });
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
      {Boolean(product.main_image) && (
        <ReactImageZoom {...bigImageOptions}></ReactImageZoom>
      )}
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
