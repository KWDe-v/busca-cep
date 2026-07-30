import { useState } from 'react'
import FormularioCep from './components/FormularioCep.jsx'
import ResultadoEndereco from './components/ResultadoEndereco.jsx'
import './App.css'

// Controla o estado da busca: carregando, erro e o endereço encontrado.
function App() {
  const [endereco, setEndereco] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarCep(cep) {
    // Remove tudo que não for número
    const cepLimpo = cep.replace(/\D/g, '')

    if (cepLimpo.length !== 8) {
      setErro('Digite um CEP válido com 8 números.')
      setEndereco(null)
      return
    }

    setCarregando(true)
    setErro('')
    setEndereco(null)

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const dados = await resposta.json()

      // A ViaCEP retorna { erro: true } quando o CEP não existe
      if (dados.erro) {
        setErro('CEP não encontrado.')
      } else {
        setEndereco(dados)
      }
    } catch {
      setErro('Erro ao buscar o CEP. Tente novamente.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="app">
      <section className="painel">
        <h1 className="painel__titulo">📍 Busca de CEP</h1>
        <p className="painel__subtitulo">Digite um CEP para encontrar o endereço.</p>

        <FormularioCep aoBuscar={buscarCep} carregando={carregando} />

        {erro && <p className="painel__erro">{erro}</p>}

        {endereco && <ResultadoEndereco endereco={endereco} />}
      </section>
    </main>
  )
}

export default App
