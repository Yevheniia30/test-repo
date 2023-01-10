import styled from 'styled-components';
import { theme } from 'themes/theme';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[3]}px;
`;

export const StyledButton = styled(ButtonContainer).attrs({
  as: 'button',
})`
  gap: ${({ theme }) => theme.spaces[2]}px;

  background-color: ${props =>
    props.disabled ? theme.colors.muted : theme.colors.primary};
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${props =>
      props.add ? theme.colors.accentGreen : theme.colors.accentRed};
  }
`;
