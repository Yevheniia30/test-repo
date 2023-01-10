import styled from 'styled-components';
import { theme } from 'themes/theme';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces[4]}px;
`;

export const Item = styled.li`
  text-align: center;
  width: ${({ theme }) => theme.sizes.s * 0.75}px;
  padding: ${({ theme }) => theme.spaces[3]}px;
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  background-color: ${props =>
    props.active ? theme.colors.accentRed : theme.colors.background};
`;
