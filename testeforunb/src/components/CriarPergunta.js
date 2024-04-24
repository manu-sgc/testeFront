import React, { useState } from 'react';

function CriarPergunta() {
    const [pergunta, setPergunta] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com a pergunta, como enviar para um servidor ou armazenar localmente
        console.log('Pergunta criada:', pergunta);
        // Limpar o campo de pergunta depois de submeter
        setPergunta('');
    };

    return (
        <div className="criar-pergunta-container"> 
            <h2>Criar Pergunta</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={pergunta}
                    onChange={(e) => setPergunta(e.target.value)}
                    placeholder="Digite sua pergunta..."
                    rows="4"
                    cols="50"
                    required
                ></textarea>
                <br />
                <button type="submit">Enviar Pergunta</button>
            </form>
        </div>
    );
}

export default CriarPergunta;