import styled from 'styled-components';
import { color, space, layout, flexbox, typography } from 'styled-system';

// export const Box = styled.div`
//   ${color}
// `;

export const Box = styled('div')(color, space, layout, flexbox, typography);
