import Button from 'components/Button/Button';
import { ButtonContainer, FancyButton } from 'components/Button/Button.styled';
import { formatDistanceToNow } from 'date-fns';

import { Text, Tag, Title, Card } from './BlogCard.styled';
import { AiOutlineUserAdd, AiOutlineSearch } from 'react-icons/ai';

// formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"

export const BlogCard = ({ poster, tag, title, description, userName, avatar, postedAt }) => {
  return (
    <Card>
      <img src={poster} alt="userphoto" width={200} />
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <img src={avatar} alt="userphoto" />
      <p>{userName}</p>
      {/* <p>{postedAt}</p> */}
      <p>{formatDistanceToNow(new Date(postedAt), { addSuffix: true })}</p>
      <ButtonContainer>
        <Button type="submit" add={true} icon={AiOutlineUserAdd}>
          Add new user
        </Button>
        <Button disabled>
          <AiOutlineSearch />
          Search
        </Button>
        <Button fancy={true}>Fancy</Button>
      </ButtonContainer>
    </Card>
  );
};

// export default BlogCard;
