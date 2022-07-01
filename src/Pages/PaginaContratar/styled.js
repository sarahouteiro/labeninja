import styled from "styled-components";

export const Contratar = styled.div`
    color: black;
    text-align: center;
    margin: 40px;
    input {
        margin-left: 20px;
        margin-right: 20px;
        height: 30px;
        width: 200px;
        padding-left: 10px;
        border: solid 1px #7c65ab;
        border-radius: 20px;
        background-color: #f4f5fb;
    }
    select {
        margin-left: 20px;
        margin-right: 20px;
        height: 35px;
        width: 217px;
        padding-left: 10px;
        border: solid 1px #7c65ab;
        border-radius: 20px;
        background-color: #f4f5fb;
        cursor: pointer;
    }
    @media (max-width: 560px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            margin-bottom: 8px;
        }
    }
`
export const Container = styled.div`
  margin:0 auto;
  max-width: 1500px;
`
export const Header = styled.div`
  background-color:#F5F4FC;
  /* border:1px solid black; */
  height:80px;
  padding:10px;  
`
export const Logo = styled.div`
  img{
    height:80px;    
  }
  button{
    border: 0;
    background-color:#F5F4FC;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 50px;
`

export const GridServicos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;
    margin-top: 50px;
    @media (max-width: 560px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
`