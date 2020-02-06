import styled from 'styled-components';

export const Container = styled.div`
max-width: 1000px;
margin: 50px auto;
border: 2px solid #eee;
padding: 20px;
`;

export const Content = styled.div`
min-width: 600px;
display:flex;
justify-content: space-between;
flex-direction: row;
align-items: center;

div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

button {
  height: 35px;
  width: 130px;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid #eee;
  background: #EE4D64;
  color: white;
  margin-right: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
}

input {
  height: 35px;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 4px;
}

`;
export const ContentTable = styled.div`
  width: 100%;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  height: 300px;
  margin-top: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px 20px;
`;
