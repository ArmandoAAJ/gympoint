import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import api from '../../services/api'

import { MdPersonAdd, MdCheckCircle } from "react-icons/md"
import { Container, Content, Table } from './styles'
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify'

export default function Register() {
  const [registers, setRegisters] = useState([])

  useEffect(() => {
    async function loadRegister() {
      const response = await api.get('registrations')
      setRegisters(response.data)
    }
    loadRegister()
  }, [setRegisters])

  async function handlePlanDelete(id) {
    try {
      await api.delete(`registrations/${id}`)
      toast.success('Registro deletado com sucesso')
    } catch (err) {
      toast.error('Estudante não encontrado!')
    }
  }

  function confirmRegisterDelete(id) {
    confirmAlert({
      title: 'Deletar Registro',
      message: 'Deseja realmente deletar este Registro?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handlePlanDelete(id),
        },
        {
          label: 'Não',
          onClick: () => { },
        }
      ]
    });
  }





  return (
    <Container>
      <Content>
        <nav>
          <h2>Registro de Alunos</h2>
        </nav>
        <div>
          <Link to={`/`}>
            <button><MdPersonAdd />&nbsp;Cadastrar</button>
          </Link>
        </div>
      </Content>
      <Table>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>PREÇO</th>
            <th>ATIVA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {registers.map(register => (
            <tr key={register.id} >
              <td>{register.student.name}</td>
              <td>{register.plan.title}</td>
              <td>{format(new Date(register.start_date), "dd 'de' MMMM 'de' yyyy", { locale: pt })}</td>
              <td>{format(new Date(register.end_date), "dd 'de' MMMM 'de' yyyy", { locale: pt })}</td>
              <td>{register.price}</td>
              <td>{register.active ? <MdCheckCircle size={20} color="green" /> : <MdCheckCircle size={20} color="#000" />}</td>
              <td>
                <Link
                  to={{
                    pathname: `/registerEdit/${register.id}`,
                    state: {
                      register: register
                    }
                  }}
                  className="blue"
                >
                  <span>Editar</span>
                </Link>
                <Link className="red" onClick={() => confirmRegisterDelete(register.id)} > Excluir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
