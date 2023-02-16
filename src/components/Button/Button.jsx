import Prop from 'prop-types';
import { FancyButton, StyledButton } from './Button.styled';

const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  add = false,
  children,
  propClick,
  fancy = false,
}) => {
  return (
    <>
      {fancy ? (
        <FancyButton>{children}</FancyButton>
      ) : (
        <StyledButton type={type} add={add} disabled={disabled} onClick={propClick}>
          {Icon && <Icon width="50px" />}
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;

Button.propTypes = {
  children: Prop.node.isRequired,
  // коли потрібно вказати можливі варіанти (іноді потрібно вказати всі можливі варіанти)
  type: Prop.oneOf(['submit', 'reset', 'button']).isRequired,
  // type: Prop.string.isRequired,
};
