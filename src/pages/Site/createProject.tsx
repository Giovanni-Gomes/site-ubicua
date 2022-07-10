import React, { useCallback, ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';
import Input from '../../components/Shared/Input';
import { BiText } from 'react-icons/bi';
import { FaTrash, FaImage } from 'react-icons/fa';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';
import { CancelButton, Container, FormFooter } from './styles';
import { Loading } from '../../components/Site/WidgetForm/Loading';

interface CreateMenuProps {
  title: string;
  description: string;
  progress: string;
  date: Date;
  negotiated: string;
}

const CreateProject: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [title, setTitle] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {


      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string()
            .required('Título é Obrigatório'),
          description: Yup.string(),
          progress: Yup.string(),
          date: Yup.date().required('Data é obrigatório'),
          negotiated: Yup.string().required('Valor negociado é obrigatório')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          name: data.title,
          description: data.description,
          progress: data.progress,
          negotiated_value: data.negotiated,
          date_start: data.date
        }
       

        setIsSendingFeedback(true);

        const result = await api.post('/v1/project/create', formData);

        console.log("formData", result);

        navigate('/Dashboard');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        });
        setIsSendingFeedback(false);
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro cadastro, tente novamente',
        });
      }
    },
    [addToast, navigate],
  );


  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault();
    formRef.current?.reset();
  }

  return (
    <>
      <Header />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmitCreateMenu} className="simple-form">
          <h1>Criar Novo Projeto</h1>
          <span className='subtitle'>preencha o formulário abaixo</span>

          <Input name="title" type="text" placeholder='Título' icon={BiText} onChange={event => setTitle(event.target.value)} />
          <Input name="description" type="text" placeholder='Descrição' icon={BiText} />
          <Input name="progress" type="text" placeholder='Progresso' icon={BiText}  />
          <Input name="date" type="date"   />
          <Input name="negotiated" type="text" placeholder='Valor negociado' icon={BiText}  />


          <FormFooter>
            <Button
              type="submit"
              disabled={title.length === 0 || isSendingFeedback}
              className="submit"
            >
              {isSendingFeedback ? <Loading /> : 'Salvar Registro'}
            </Button>

            <CancelButton onClick={handleResetForm}>
              <FaTrash />
            </CancelButton>
          </FormFooter>
        </Form>
      </Container>
    </>
  );
}

export default CreateProject;

