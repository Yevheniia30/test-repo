import styled from 'styled-components';
import { theme } from 'themes/theme';
// import { theme } from "themes/theme";

export const Item = styled.li`
  color: ${props =>
    props.active ? theme.colors.accentRed : theme.colors.text};
`;
