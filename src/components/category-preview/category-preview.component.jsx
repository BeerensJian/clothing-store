import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  TitleLink,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <TitleLink to={title}>
      <Title>{title.toUpperCase()}</Title>
    </TitleLink>
    <Preview>
      {products
        .filter((_, index) => index < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
