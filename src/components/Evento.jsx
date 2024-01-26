import Button from "./Button"

function Evento() {
  function meuEvento() {
    console.log('Ativando primeiro evento!')
  }

  return (
    <>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro Evento" />
    </>
  )
}

export default Evento