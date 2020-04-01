import { useState } from 'react'


export const useFormHooks = (initialValue) => {

    const [form, setForm] = useState(initialValue)

    const updateForm = (e) => {
        setForm(
            {
                ...form,
                [e.target.name]: (e.target.type === 'number') ? Number(e.target.value) : e.target.value
            })
    }

        return [form, updateForm, () => setForm(initialValue)]
}


