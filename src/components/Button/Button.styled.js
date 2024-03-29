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

  background-color: ${props => (props.disabled ? theme.colors.muted : theme.colors.secondary)};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  :disabled {
    cursor: not-allowed;
  }

  :hover:not(:disabled) {
    background-color: ${props => (props.add ? theme.colors.accentGreen : theme.colors.accentRed)};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: 'submit',
});
