import styled from 'styled-components';

export const Container=styled.div`
max-width: 1000px;
margin: 50px auto;
border: 2px solid #eee;
padding: 20px;
`;

export const Content=styled.div`
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
  border: none;
  background: #EE4D64;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
}

input {
  height: 35px;
  padding: 5px;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);
  padding: 4px;
}

`;
export const Table=styled.table`
min-width: 600px;
margin-top: 15px;
height: 300px;
border: 1px solid #eee;
border-radius: 5px;
background-color: #fff;
padding: 30px 20px;

td {
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

th {
  width: 500px;
  padding-bottom: 10px;
  text-align: left;
}

td .blue {
  color: blue;
  font-weight: bold;
}

td .red {
  color: red;
  font-weight: bold;
  margin-left: 10px;
}

`;
