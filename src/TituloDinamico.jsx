import { useState, useEffect } from 'react'

function TituloDinamico() {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    document.title = texto === '' ? 'Título Dinâmico' : texto
  }, [texto])

  return (
    <div>
      <h1>Título Dinâmico da Página</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
    </div>
  )
}

export default TituloDinamico
