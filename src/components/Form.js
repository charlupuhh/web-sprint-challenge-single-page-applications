import React from 'react'

const Form = (props) => {
    
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
      } = props

    return (
        <form className = 'form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Make Your Pizza!</h2>

                <div className='form-group inputs'>
                    <label> Size
                        <select
                            onChange={onInputChange}
                            value={values.size}
                            name='size'
                        >
                            <option value=''> - Select a size - </option>
                            <option value='small'>S</option>
                            <option value='medium'>M</option>
                            <option value='large'>L</option>
                            <option value='extra-large'>XL</option>
                        </select>
                    </label>

                    <h3>Sauce</h3>
                    <label> Tomato
                        <input
                            checked={values.sauce==='Tomato'}
                            value='Tomato'
                            onChange={onInputChange}
                            name='sauce'
                            type='radio'
                        />
                    </label>
                    <label> Alfredo
                        <input
                            checked={values.sauce==='Alfredo'}
                            value='Alfredo'
                            onChange={onInputChange}
                            name='sauce'
                            type='radio'
                        />
                    </label>
                    <label> Pesto
                        <input
                            checked={values.sauce==='Pesto'}
                            value='Pesto'
                            onChange={onInputChange}
                            name='sauce'
                            type='radio'
                        />
                    </label>

                    <div className = 'form-group checkboxes'>
                        <h2>Toppings</h2>
                        <label>Pepperoni
                            <input
                                name='pepperoni'
                                type='checkbox'
                                onChange={onCheckboxChange}
                                checked={values.toppings.pepperoni}
                            />
                        </label>
                        <label>Ham
                            <input
                                name='ham'
                                type='checkbox'
                                onChange={onCheckboxChange}
                                checked={values.toppings.ham}
                            />
                        </label>
                        <label>Pineapple
                            <input
                                name='pineapple'
                                type='checkbox'
                                onChange={onCheckboxChange}
                                checked={values.toppings.pineapple}
                            />
                        </label>
                    </div>

                    <label> Special Instructions
                        <input
                            value={values.instructions}
                            onChange={onInputChange}
                            name='instructions'
                            type='text'
                        />
                    </label>

                </div>
                {/* 🔥 DISABLE THE BUTTON */}
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.civil}</div>
                    <div>{errors.role}</div>
                </div>
        </div>
        </form>
    )
}


export default Form