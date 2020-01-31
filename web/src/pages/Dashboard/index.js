import React from 'react'
import { Link } from 'react-router-dom'

import { MdPersonAdd } from "react-icons/md"

import TableStudents from '../../components/TableStudents'
import { Container, Content, ContentTable } from './styles'


export default function Dashboard() {

  return (
    <Container>
      <Content>
        <nav>
          <h2>Gerenciando Alunos</h2>
        </nav>
        <div>
          <Link to="/students" >
            <button><MdPersonAdd />&nbsp;Cadastrar</button>
          </Link>
          <input type="text" placeholder="Buscar Aluno" />
        </div>
      </Content>
      <ContentTable>
        <TableStudents />
      </ContentTable>
    </Container >
  );
}
