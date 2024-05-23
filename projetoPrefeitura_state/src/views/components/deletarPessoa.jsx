import React, { useState, useEffect } from 'react';

function FormDeleta() {

    const [formValores, setFormValores] = useState({
        id: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Dados a serem enviados", formValores.id);
            const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });

            const json = await response.json();
            console.log(response);
            console.log(json);

        } catch (err) {
            console.error("Erro ao enviar", err)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            ID a ser deletado:
            <input type="text" name="id" value={formValores.id} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}> Deletar </button>
        </form>
    );
}

export default FormDeleta;