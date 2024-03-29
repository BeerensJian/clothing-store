import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleLink = styled(Link)`
  width: fit-content;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

// .category-preview-container {

//   .title-link {
//     width: fit-content;
//   }

//   .title {
//     font-size: 28px;
//     margin-bottom: 25px;
//     cursor: pointer;
//   }

//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
