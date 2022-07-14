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

import { Loading } from '../../components/Site/WidgetForm/Loading';
import { Badge, Box, Image } from '@chakra-ui/react';
import BoxForms from '../../components/Portal/BoxForms';

interface CreateMenuProps {
  title: string;
  description: string;
  progress: string;
  date: Date;
  negotiated: string;
}

const UpdateProject: React.FC = () => {
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

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <>
      <Header />
      <BoxForms title='Create a new Projects'>
        <span>Olá tudo bem</span>
        <span>Olá tudo bem</span>
        <span>Olá tudo bem</span>
        <span>Olá tudo bem</span>
      </BoxForms>
    </>
  );
}

export default UpdateProject;

