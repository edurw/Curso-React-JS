export default function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, tude bem?`
  }
  return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}