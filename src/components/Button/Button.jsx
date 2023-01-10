import { StyledButton } from './Button.styled';

const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  add = false,
  children,
  propClick,
}) => {
  return (
    <StyledButton type={type} add={add} disabled={disabled} onClick={propClick}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};

export default Button;
