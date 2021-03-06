import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import api from '../../services/api'

import { MdKeyboardBackspace, MdSave } from "react-icons/md"
import { Container, Content, StudentsContent } from './styles'

import { updateInRequest } from '../../sagaReducer/modules/student/action'

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

export default function StudentsEdit() {
  const [students, setStudents] = useState([])

  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get(`students/${id}`)
      setStudents(response.data)
    }
    loadStudent()
  }, [id])

  function handleSubmit({ ...data }) {
    dispatch(updateInRequest({ ...data, id }))
  }

  return (
    <Container>
      <Form initialData={students} onSubmit={handleSubmit} schema={schema}>
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
            <Input name="age" />
            </label>
            <label>Peso
            <Input name="weight" />
            </label>
            <label> Altura
            <Input name="height" />
            </label>
          </div>
        </StudentsContent>
      </Form>
    </Container >
  );
}
