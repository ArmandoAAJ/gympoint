import styled from 'styled-components';
export const Container = styled.div` max-width: 1000px;
margin: 50px auto;
border: 2px solid #eee;
padding: 20px;
`;
export const Content = styled.div` min-width: 600px;
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

button:first-child {
  margin-right: 10px;
  background-color: #A9A9A9;
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

export const RegisterContent = styled.div`
min-width: 600px;
display: flex;
flex-direction: column;
margin-top: 15px;
height: 0 auto;
border: 1px transparent #eee;
border-radius: 4px;
background: white;
padding: 30px;
input {
  margin-top: 5px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  height: 40px;
  width: 100%;
}

select{
  margin-top: 5px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  height: 40px;
  width: 100%;
}

span {
  margin-bottom: 5px;
  color: red;
  font-size: 10px;
  font-weight: bold;
  align-self: center;
}

div {
  display: flex;
  flex-direction: row;
  label {
    width: 100%;
  }
  label+label {
    margin-left: 3%;
  }
  .dark {
    background: #eee;
  }
  }

`;

