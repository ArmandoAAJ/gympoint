import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginOut } from '../../sagaReducer/modules/autenticacao/action'

import { Container, Content, Profile } from './styles'
import headerLogo from '../../img/logoheader.svg'


export default function Header() {
  const dispatch = useDispatch();

  function handleLoginOut() {
    dispatch(loginOut())
  }

  const profile = useSelector(state => state.user.profile)
  return (
    <Container>
      <Content>
        <nav>
          <img src={headerLogo} alt="Logo Header" />
          <NavLink to={`/dashboard`} activeClassName="nav-color" >ALUNOS</NavLink>
          <NavLink to={`/plans`} activeClassName="nav-color" >PLANOS</NavLink>
          <NavLink to={`/register`} activeClassName="nav-color" >MATRÍCULAS</NavLink>
          <NavLink to={`/pedido`} activeClassName="nav-color" >PEDIDOS DE AUXÍLIO </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <NavLink to="/" onClick={handleLoginOut}>Sair do Sistema</NavLink>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
