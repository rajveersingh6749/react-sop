import BtnVariant from './components/BtnVariant'

const UsingVariant = () => {
  return (
    <div>
      <h1>Using Variant</h1>
      <BtnVariant variant='success'>Success!</BtnVariant>
      <BtnVariant variant='alert'>Error!</BtnVariant>
      <BtnVariant variant='normal'>Normal!</BtnVariant>
    </div>
  )
}

export default UsingVariant
