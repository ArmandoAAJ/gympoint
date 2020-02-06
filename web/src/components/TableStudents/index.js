import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';

import api from '../../services/api'

import { Container } from './styles'

export default function TableStudents() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students')

      setStudents(response.data)
    }
    loadStudents()
  }, [setStudents])

  async function handleStudentDelete(id) {
    try {
      await api.delete(`students/${id}`)
      toast.success('Estudante deletado com sucesso')
    } catch (err) {
      toast.error('Estudante não encontrado!')
    }
  }

  function confirmStudentDelete(id) {
    confirmAlert({
      title: 'Deletar Estudante',
      message: 'Deseja realmente deletar este usuário?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleStudentDelete(id),
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
      <thead>
        <tr>
          <th>NOME</th>
          <th>E-MAIL</th>
          <th>IDADE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id} >
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.age}</td>
            <td>
              <Link
                to={`students/${student.id}`}
                className="blue"
              >
                <span>Editar</span>
              </Link>
              <Link className="red" onClick={() => confirmStudentDelete(student.id)} > Excluir</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
