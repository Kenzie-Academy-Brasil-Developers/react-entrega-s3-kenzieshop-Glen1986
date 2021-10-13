
import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
heigth:100vh;
display: flex;
align-items: stretch;
`;
export const Background = styled.div`
@media (min-width:900px){
  flex: 1;
  background-size: contain;
}`
  ;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
max-width:700px;
margin:0 auto;

`;

const appearFromUp = keyframes`
from {
  opacity: 0;
  transform: translateY(-50px)
}
to{
  opacity:1;
  transform: translateY(0px)
}
` ;

export const AnimationContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
animation:${appearFromUp} 1s;
form{
margin:4rem 0;
  width:340px;
  text-align: center;
  display: flex;
  flex-direction:column;
}
form>input{
    height:2rem;
    margin:1rem 0;
    border-radius:5px;
}
form>button{
  width:80%;
  height:2rem;
  margin: 0 auto;
  border-radius:5px;
  background-color: #99ebff;
  color:black;
}
`

