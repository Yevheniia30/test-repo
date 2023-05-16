import defaultImage from 'assets/default.jpg';
import { List } from './PhotosList';
import { Item } from './PhotosItem';

const PhotosView = ({ limit = 12, q }) => {
  const generateSceleton = () => {
    let arr = [];
    for (let i = 0; i < limit; i++) {
      arr.push(i);
    }
    return arr.map((item, idx) => (
      <Item key={idx}>
        <img src={defaultImage} alt="default" />
      </Item>
    ));
  };

  return (
    <>
      <p>...Searching {q}</p>
      <List>{generateSceleton()}</List>;
    </>
  );
};

export default PhotosView;
