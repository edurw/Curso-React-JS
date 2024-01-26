export default function SeuNome({ setNome }) {
  return (
    <>
      <p>Digite o seu nome:</p>
      <input type="text" placeholder="Qual é seu nome?" onChange={(e) => setNome(e.target.value)} />
    </>
  )
}