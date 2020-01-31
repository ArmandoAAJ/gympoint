import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import * as Yup from 'yup'
import { MdKeyboardBackspace, MdSave } from "react-icons/md"
import { Container, Content, PlanContent } from './styles'

import { storeInRequest } from '../../sagaReducer/modules/plan/action'

const schema = Yup.object().shape({
  title: Yup.string().required('O nome é obrigatório'),
  duration: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('Valor é obrigatório'),
  price: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('Preço é obrigatório'),
})


export default function Plans() {

  const dispatch = useDispatch()

  function handleSubmit(data) {
    dispatch(storeInRequest(data))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} >
        <Content>
          <nav>
            <h2>Cadastrando Planos</h2>
          </nav>
          <div>
            <Link to="/plans"><button><MdKeyboardBackspace size={20} />&nbsp;Voltar</button></Link>
            <button><MdSave size={20} />&nbsp;Salvar</button>
          </div>
        </Content>
        <PlanContent>
          <label>Título do Plano</label>
          <Input name="title" />
          <div>
            <label>Duração em Meses
              <Input name="duration" placeholder="Exemplo: 1" />
            </label>
            <label>Preço Mensal
              <Input name="price" />
            </label>
            <label>Preço Total
              <Input name="finalPrice" className="dark" readOnly="true" />
            </label>
          </div>
        </PlanContent>
      </Form>
    </Container>
  );
}
