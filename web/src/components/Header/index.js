import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to={`/dashboard`} className="first" >ALUNOS</Link>
          <Link to="/plans" >PLANOS</Link>
          <Link to={`/register`} >MATRÍCULAS</Link>
          <Link to={`/dashboard`} >PEDIDOS DE AUXÍLIO </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/" onClick={handleLoginOut}>Sair do Sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
