import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Form, Input, Select } from '@rocketseat/unform'
import { addMonths, format, subDays } from 'date-fns'
import DatePiker from 'react-datepicker'

import api from '../../services/api'

import { MdKeyboardBackspace, MdSave } from "react-icons/md"
import { Container, Content, RegisterContent } from './styles'

import { updateInRequest } from '../../sagaReducer/modules/register/action'

export default function RegisterEdit({ location }) {
  const { id } = useParams()
  const state = ((location.state) ? location.state.register : null)
  const [registers, setRegisters] = useState(state)
  const [plans, setPlans] = useState([])
  const [planId, setPlanId] = useState()
  const [auxPlan, setAuxPlan] = useState(state.plan)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [totals, setTotals] = useState(0)

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans')
      setPlans(response.data)
    }
    loadPlans()
  }, [])

  function handleSelect(e) {
    e.preventDefault()
    const respUser = e.target.value;
    setAuxPlan(plans.find(i => String(i.id) === String(respUser)))
    setPlanId(respUser)
  }

  useMemo(() => {
    function calculaPrice() {
      if (auxPlan && startDate) {
        setEndDate(addMonths(startDate, auxPlan.duration));
        setTotals(auxPlan.totals)
      } else {
        setEndDate(format(new Date(), 'dd/MM/yyyy'));
      }
    }
    calculaPrice();
  }, [startDate, auxPlan]);

  const dispatch = useDispatch()
  function handleSubmit() {
    dispatch(updateInRequest({ id, planId, startDate }))
  }

  return (
    <Container>
      <Form initialData={registers} onSubmit={handleSubmit} >
        <Content>
          <nav>
            <h2>Gerenciando Planos</h2>
          </nav>
          <div>
            <Link to={`/register`}><button><MdKeyboardBackspace size={20} />&nbsp;Voltar</button></Link>
            <button ><MdSave size={20} />&nbsp;Salvar</button>
          </div>
        </Content>
        <RegisterContent>
          <label>Aluno</label>
          <Input name="student.name" readOnly="true" />
          <div >
            <label>Plano
            <Select
                name=""
                options={plans}
                value={planId}
                onChange={handleSelect}
                placeholder="Plano"
              />
            </label>
            <label>Data Inicial
          <DatePiker
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={subDays(new Date(), 0)}
                value={format((startDate), 'dd/MM/yyyy')}
                name=""
              />
            </label>
            <label>Data Final
              <Input name="" value={format((endDate), 'dd/MM/yyyy')} className="dark" readOnly="true" />
            </label>
            <label>Preço Total
            <Input name="price" value={totals} className="dark" readOnly="true" />
            </label>
          </div>
        </RegisterContent>
      </Form>
    </Container>
  );
}
