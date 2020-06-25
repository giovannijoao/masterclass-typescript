import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../services/api';

interface IForm {
    name: string;
    email: string;
}

const initialState = {
    name: '',
    email: ''
};

const Form = () => {
    const [form, setForm] = useState<IForm>(initialState);

    const handleSubmit = (ev: FormEvent) => {
        const currentState = form;
        ev.preventDefault();
        api.post('/users', currentState).then(() => {
            setForm(initialState);
        });
    }

    const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
        const name = ev.target.name;
        const value = ev.target.value;
        setForm(state => ({
            ...state,
            [name]: value
        }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" onChange={handleInput} value={form.name} />
            <input type="email" name="email" id="email" onChange={handleInput} value={form.email} />
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default Form;