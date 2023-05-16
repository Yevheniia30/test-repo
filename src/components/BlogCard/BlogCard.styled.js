import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${p => p.theme.colors.background};
  padding: ${({ theme }) => theme.spaces[5]}px;
`;

export const Tag = styled.span`
  /* color: red; */
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  /* background-color: ${p => p.theme.colors.background}; */
  border-radius: ${p => p.theme.radii.normal};
  ${Card}:hover & {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.muted};
  }
  font-family: ${p => p.theme.fonts.monospace};
`;

export const Title = styled.h3`
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.body};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.colors.primary};
`;
