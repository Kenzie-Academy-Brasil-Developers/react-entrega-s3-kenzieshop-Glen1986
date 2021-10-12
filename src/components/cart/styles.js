import styled from 'styled-components';
export const Container = styled.div`
display:flex;
min-height:40rem;
flex-direction:column;
flex-wrap:wrap;
top:-10rem;
padding:0 2rem;
justify-content:center;
border:2px solid #99ebff;
background-color:white;
margin: 0 6rem;
.products{
  position:relative;
  top:-20rem;
  margin-top:-4.25rem;;
}
  .products>div>h3, .products>div>div{
    margin-right:2rem;
  }
  .products>div{
    display:flex;
    width:40rem
  }
  .products>div, .products>div>img{
    display:flex;

    text-align:center;
  }
  .products>div> img{
    display:none;
  }
  .products>div>button{
    margin: 1rem;
  }

}
`;
