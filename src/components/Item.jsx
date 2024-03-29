import PropTypes from 'prop-types'

export default function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  )
}

Item.PropTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number
}

Item.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 0
}