import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { MdKeyboardBackspace, MdSave } from "react-icons/md"
import { Container, Content, PlanContent } from './styles'

import { updateInRequest } from '../../sagaReducer/modules/plan/action'

const schema = Yup.object().shape({
  title: Yup.string().required('O nome é obrigatório'),
  duration: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('Duração'),
  price: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('Preço '),
  finalPrice: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('Preço Final'),
})

export default function StudentsEdit({ location }) {
  const state = ((location.state) ? location.state.plan : null)

  const [plans, setPlans] = useState(state)

  const dispatch = useDispatch();

  const { id } = useParams()

  function handleSubmit({ ...data }) {
    dispatch(updateInRequest({ ...data, id }));
  }

  return (
    <Container>
      <Form initialData={plans} onSubmit={handleSubmit} schema={schema}>
        <Content>
          <nav>
            <h2>Gerenciando Planos</h2>
          </nav>
          <div>
            <Link to={`/plans`}><button><MdKeyboardBackspace size={20} />&nbsp;Voltar</button></Link>
            <button ><MdSave size={20} />&nbsp;Salvar</button>
          </div>
        </Content>
        <PlanContent>
          <label>Títitulo</label>
          <Input name="title" />
          <div >
            <label>Duração em Meses
              <Input name="duration" placeholder="Exemplo: 1" />
            </label>
            <label>Preço Mensal
              <Input name="price" />
            </label>
            <label>Preço Total
              <Input name="totals" className="dark" readOnly="true" />
            </label>
          </div>
        </PlanContent>
      </Form>
    </Container >
  );
}
