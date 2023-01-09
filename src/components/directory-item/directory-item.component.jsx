import {
  BackgroundImage,
  DirectoryItemContainer,
  ItemBody,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer
      onClick={() => navigate(`shop/${title}`)}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <BackgroundImage />
      <ItemBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </ItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
