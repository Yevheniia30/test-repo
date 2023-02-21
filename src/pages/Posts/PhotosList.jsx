import PhotosItem from './PhotosItem';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 30px;
`;

const PhotosList = ({ photos = [] }) => {
  return (
    <List id="list">
      {photos.map(item => (
        <PhotosItem key={item.id} {...item} />
      ))}
    </List>
  );
};

export default PhotosList;
