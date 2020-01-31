import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'
import SigIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import StudentsEdit from '../components/StudentsEdit'
import StudentsCreate from '../components/StudentsCreate'

import Plans from '../components/Plans'
import PlansEdit from '../components/PlansEdit'
import PlansCreate from '../components/PlansCreate'

import Register from '../components/Register'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/students/:id" component={StudentsEdit} isPrivate />
      <Route path="/students" component={StudentsCreate} isPrivate />

      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/planEdit/:id" component={PlansEdit} isPrivate />
      <Route path="/planCreate" component={PlansCreate} isPrivate />

      <Route path="/register" component={Register} isPrivate />



    </Switch>
  )
}
