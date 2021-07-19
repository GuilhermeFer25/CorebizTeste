import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().min(2).required('Informe um nome válido'),
  email: yup.string().email().required('Informe um e-mail válido'),
})
