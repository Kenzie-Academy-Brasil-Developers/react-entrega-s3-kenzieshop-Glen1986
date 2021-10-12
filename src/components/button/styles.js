

import styled from 'styled-components';

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#2b6fed")};
  color: ${(props) => (props.whiteSchema ? "#2b6fed" : "#f5f5f5")};
  height: 45px;
  border-radius:5px;
  border:2px solid black;
  font-family: 'Robotto Mono', monospace;
  margin-top:16px;
  width:6rem;
  transition:0.5s;
    :hover{
  border:2px solid #002699;
}
`;
