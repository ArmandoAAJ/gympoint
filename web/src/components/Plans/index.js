import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';
import { MdPersonAdd } from "react-icons/md"

import { Container, Content, Table } from './styles';

export default function Plans() {

  const [plans, setPlans] = useState([])

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get('plans')
      setPlans(response.data)
    }
    loadPlan()
  }, [setPlans])

  async function handlePlanDelete(id) {
    try {
      await api.delete(`plans/${id}`)
      toast.success('Plano deletado com sucesso')
    } catch (err) {
      toast.error('Estudante não encontrado!')
    }
  }

  function confirmPlanDelete(id) {
    confirmAlert({
      title: 'Deletar Plano',
      message: 'Deseja realmente deletar este Plano?',
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
  };

  return (
    <Container>
      <Content>
        <nav>
          <h2>Gerenciando Planos</h2>
        </nav>
        <div>
          <Link to={`/planCreate`}>
            <button><MdPersonAdd />&nbsp;Cadastrar</button>
          </Link>
        </div>
      </Content>
      <Table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>DURAÇÃO</th>
            <th>VALOR</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id} >
              <td>{plan.title}</td>
              <td>{plan.duration} Mês</td>
              <td>{plan.price},00</td>
              <td>
                <Link
                  to={{
                    pathname: `/planEdit/${plan.id}`,
                    state: {
                      plan: plan
                    }
                  }}
                  className="blue"
                >
                  <span>Editar</span>
                </Link>
                <Link className="red" onClick={() => confirmPlanDelete(plan.id)} > Excluir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
