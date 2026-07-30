import { useState } from 'react'
import './FormularioCep.css'

// Formulário com o campo de CEP. Desabilita o botão enquanto carrega.
function FormularioCep({ aoBuscar, carregando }) {
  const [cep, setCep] = useState('')

  function enviar(evento) {
    evento.preventDefault()
    aoBuscar(cep)
  }

  return (
    <form className="form-cep" onSubmit={enviar}>
      <input
        type="text"
        placeholder="Ex: 01001-000"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        maxLength={9}
      />
      <button type="submit" disabled={carregando}>
        {carregando ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  )
}

export default FormularioCep
