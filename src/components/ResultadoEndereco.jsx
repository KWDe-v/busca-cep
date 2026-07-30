import './ResultadoEndereco.css'

// Mostra os dados do endereço retornados pela API ViaCEP.
function ResultadoEndereco({ endereco }) {
  return (
    <div className="resultado-cep">
      <Linha rotulo="CEP" valor={endereco.cep} />
      <Linha rotulo="Rua" valor={endereco.logradouro || 'Não informado'} />
      <Linha rotulo="Bairro" valor={endereco.bairro || 'Não informado'} />
      <Linha rotulo="Cidade" valor={endereco.localidade} />
      <Linha rotulo="Estado" valor={endereco.uf} />
    </div>
  )
}

// Componente pequeno e reutilizável para cada linha de dado.
function Linha({ rotulo, valor }) {
  return (
    <div className="resultado-cep__linha">
      <span className="resultado-cep__rotulo">{rotulo}</span>
      <span className="resultado-cep__valor">{valor}</span>
    </div>
  )
}

export default ResultadoEndereco
