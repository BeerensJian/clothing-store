import {
  BackgroundImage,
  DirectoryItemContainer,
  ItemBody,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <DirectoryItemContainer
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
