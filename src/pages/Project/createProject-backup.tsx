import React, {
  useCallback,
  ChangeEvent,
  useRef,
  useState,
  InputHTMLAttributes,
  useEffect,
} from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { useToast } from '../../components/hooks/provider/toast'

import getValidationErrors from '../../utils/getValidationsErros'
import { FormHandles, useField } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../services/api'

import { BiText } from 'react-icons/bi'
import {
  FaTrash,
  FaImage,
  FaFileImport,
  FaPlus,
  FaFile,
  FaSave,
} from 'react-icons/fa'
import Button from '../../components/Shared/Button'
import Header from '../../components/Portal/Header'

import {
  Badge,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Input as InputChakra,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import BoxForms from '../../components/Portal/BoxForms'
import { Panel } from '../../components/Portal/Panel'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { CancelButton, FormFooter } from '../Config/styles'
import { IconBaseProps } from 'react-icons'

import Input from '../../components/Shared/Input'

interface CreateProjectProps {
  id: string
  name: string
  description: string
  active: boolean
  date_start: Date
  date_end: Date
  progress: string
  negotiated: string
  real_cost: string
  status_id: string
  user_id: string
}

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   name: string;
//   containerStyle?: object;
//   icon?: React.ComponentType<IconBaseProps>;
// }

const CreateProject: React.FC = () => {
  // style colors customTheme
  const bg = useColorModeValue('hoverDark', 'hoverLight')
  const navigate = useNavigate()
  const { addToast } = useToast()

  // formRef
  const inputRef = useRef(null)
  const emailRef = useRef(null)
  const formRef = useRef<FormHandles>(null)

  console.log('formRef current', formRef.current?.getData)
  // const name = (e: any) => e.target.getAttribbute("name");
  // const [name, setName] = useState('')

  // const handleInputChange = (e: any) => setName(e.target.value)

  // const isError = name === ''

  // if (inputRef.current?.name != null) {

  //   const { fieldName, defaultValue, error, registerField } = useField(inputRef.current?.name);

  //   console.log("inputRef value", inputRef.current?.value);
  //   console.log("emailRef value", emailRef.current?.value);
  //   console.log("fieldName", fieldName);

  //   useEffect(() => {
  //     registerField({
  //       name: fieldName,
  //       ref: inputRef?.current,
  //       path: 'value'
  //     });
  //   }, [fieldName, registerField])
  // }
  // console.log("inputRef", inputRef.current?.value);
  // console.log("fieldName", fieldName);

  // const [input, setInput] = useState('');
  //  const [name, setName] = useState('');

  // const isError = input === ''
  // console.log("input", input);
  // console.log("formRef", formRef.current?.getData);
  // console.log("input", (e: any) => setInput(e.target.value));

  const handleSubmitCreateProject = useCallback(
    async (data: CreateProjectProps) => {
      try {
        // console.log("data", data);
        // console.log("formRef", inputRef.current?.value);
        // console.log("email", emailRef.current?.value);

        // setName(data.name);
        // setName(e.target.value);

        formRef.current?.setErrors({})
        // data.name = inputRef.current?.value;
        // data.user_id = emailRef.current?.value;
        console.log(data.name)

        const schema = Yup.object().shape({
          id: Yup.string(),
          name: Yup.string().required('Nome do Projeto é Obrigatório'),
          description: Yup.string(),
          date_start: Yup.date().required('Data é obrigatório'),
          date_end: Yup.date().required('Data é obrigatório'),
          progress: Yup.string(),
          negotiated: Yup.string().required('Valor negociado é obrigatório'),
          real_cost: Yup.string().required('Valor negociado é obrigatório'),
          status_id: Yup.string().required('Status é obrigatório'),
          user_id: Yup.string().required('Usuário é obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          id: data.id,
          name: data.name,
          description: data.description,
          active: data.active,
          date_start: data.date_start,
          date_end: data.date_end,
          progress: data.progress,
          negotiated_value: data.negotiated,
          real_cost: data.real_cost,
          status_id: data.status_id,
          user_id: data.user_id,
        }

        const result = await api.post(`/v1/project/create/`, formData)

        console.log('formData', result)

        navigate('/project')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
      } catch (err) {
        console.log('error', err)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          return
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro cadastro, tente novamente',
        })
      }
    },
    [addToast, navigate],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  return (
    <>
      <Panel title="Create a new Project">
        <Flex>
          <Flex flex={1} justify="left" align="center">
            <Flex justifyContent="space-between" borderRadius={10}>
              <Link
                as={RouterLink}
                to="/dashboard"
                bg={bg}
                mr={1}
                p={2}
                borderRadius={10}
              >
                <FiArrowLeft />
              </Link>
              <Link
                as={RouterLink}
                to="/dashboard"
                bg={bg}
                mr={1}
                p={2}
                borderRadius={10}
              >
                <FiArrowRight />
              </Link>
            </Flex>
          </Flex>

          <Flex flex={1} justify="right" align="center">
            <Flex borderRadius={10}>
              <Link
                as={RouterLink}
                to={'/create-project'}
                bg={bg}
                mr={1}
                p={2}
                borderRadius={10}
              >
                <FaPlus />
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Form
          ref={formRef}
          onSubmit={handleSubmitCreateProject}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Flex direction="column" ml={10} mr={10} mt={5} w={585}>
            {/* <FormLabel htmlFor='name'>Nome</FormLabel> */}
            {/* <Input id='name' type='name' name='name' placeholder='Nome' /> */}
            <InputChakra
              ref={inputRef}
              id="name"
              type="name"
              name="name"
              mb="2rem"
              placeholder="Nome"
            />
            <InputChakra
              ref={emailRef}
              id="email"
              type="email"
              name="email"
              mb="2rem"
              placeholder="Nome"
            />
          </Flex>

          <Flex align="center" ml={10} w="100%">
            <Button type="submit">
              <FaSave style={{ marginRight: '0.5rem' }} />
              Salvar Registro
            </Button>
            <CancelButton onClick={handleResetForm}>
              <FaTrash size={25} />
            </CancelButton>
          </Flex>
        </Form>
      </Panel>
    </>
  )
}

export default CreateProject
