import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';

const HeroPage = () => {
  const navigate = useNavigate();
  //   коли не знаємо адресу використовуємо useNavigate, коли знаємо - Link
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button propClick={goBack}>Go back</Button>
      heropage
    </>
  );
};

export default HeroPage;
