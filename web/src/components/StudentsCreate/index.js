import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import api from '../../services/api'

import { MdKeyboardBackspace, MdSave } from "react-icons/md"
import { toast } from 'react-toastify'
import { Container, Content, StudentsContent } from './styles'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup
    .string()
    .email()
    .required('Insira um e-mail válido'),
  age: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('A idade é obrigatória'),
  weight: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('O peso é obrigatório'),
  height: Yup.number('Insira um número válido')
    .positive('Números negativos não são aceitos')
    .typeError('A altura é obrigatória'),
})

export default function StudentsCreate() {

  async function handleSubmitCreateStudent(data) {
    try {
      await api.post('students', data)
      toast.success('Estudante cadastrado com sucesso')

    } catch (error) {
      toast.error('Erro ao cadastrar o estudante verifique os dados')
    }

  }

  return (
    <Container>
      <Form onSubmit={handleSubmitCreateStudent} schema={schema} >
        <Content>
          <nav>
            <h2>Gerenciando Alunos</h2>
          </nav>
          <div>
            <Link to="/"><button><MdKeyboardBackspace size={20} />&nbsp;Voltar</button></Link>
            <button><MdSave size={20} />&nbsp;Salvar</button>
          </div>
        </Content>
        <StudentsContent>
          <label>Nome</label>
          <Input name="name" />
          <label>E-mail</label>
          <Input name="email" type="email" />
          <div>
            <label>Idade
            <Input name="age"/>
            </label>
            <label>Peso
            <Input name="weight"/>
            </label>
            <label>Altura
            <Input name="height"/>
            </label>
          </div>
        </StudentsContent>
      </Form>
    </Container >
  )
}
