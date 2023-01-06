import "./directory-item.styles.scss";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <div
      className='directory-item-container'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className='background-image' />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
