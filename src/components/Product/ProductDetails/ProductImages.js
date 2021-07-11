import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactImageZoom from "react-image-zoom";
import colors from "../../Colors";

export default function Images({ product }) {
  const [mainImage, setMainImage] = useState(product.main_image);
  const [bigImageOptions, setBigImageOptions] = useState({
    ...bigImage,
    img: "https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
  });

  useEffect(() => {
    console.log(product.main_image);
    console.log(Boolean(product.main_image));
  }, []);

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
  zoomStyle: { opacity: 0.5 },
};
