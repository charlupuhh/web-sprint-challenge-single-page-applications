import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Switch, Link, Route, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import Home from './components/Home'
import Form from './components/Form'
import formSchema from './components/formSchema'


const initialFormValues = {
  size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    ham: false,
    pineapple: false
  },
  instructions: ''
}

const initialFormErrors = {
  size: '',
  sauce: '',
  instructions: ''
}

const initialDisabled = true



const App = () => {

  const history = useHistory();

  const toForm = () => {
      history.push('/pizza')
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {

    const {name, value} = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    
      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const onCheckboxChange = evt => {
    // 🔥 STEP 7- IMPLEMENT!
    // a) pull the `name` of the checkbox from the event
    // b) pull whether `checked` true or false, from the event
    const { name, checked } = evt.target
    // c) set a new state for the whole form
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newPizza = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      instructions: formValues.instructions.trim(),
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true))
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      console.log(valid)
      setDisabled(!valid);
    })
  }, [formValues])

  return (
    <div>
      <button id="orderPizza" onClick={toForm}>Pizza!</button>
      <div>
        <Switch>
          <Route path='/pizza'>
            <Form 
              values={formValues}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;


// const routeToHome = () => {
//   history.push('/')
// }