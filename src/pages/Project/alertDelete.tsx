import { Box, CloseButton, Flex } from '@chakra-ui/react';
import { Popover } from '@headlessui/react';
import { AxiosError } from 'axios';
import React, { Dispatch, MouseEventHandler, SetStateAction, useRef } from 'react';
import { useMutation } from 'react-query';
import { useToast } from '../../components/hooks/provider/toast';
import Button from '../../components/Shared/Button';
import api from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { ButtonAlertClose } from './styles';

interface AlertDeleteProps {
  id: string;
  actualProjectName: string;
}

const AlertDelete: React.FC<AlertDeleteProps> = ({ id, actualProjectName }) => {
  const { addToast } = useToast();

  const removeProject = useMutation(
    async (id: string) => {
      const response = await api.delete(`/v1/project/delete/${id}`);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('projects');
      },
      onError: (error: AxiosError) => {
        addToast({
          type: 'error',
          title: 'Erro ao deletar registro',
          description:
            'Ocorreu um erro ao deletar registro, tente novamente',
        });
      }
    },
  );

  async function handleRemoveTag(id: string) {
    try {
      await removeProject.mutateAsync(id);

      addToast({
        type: 'success',
        title: 'Deletado com Sucesso!',
      });

    } catch {
      console.log('Error happened')
    }
  }


  return (
    <Flex bg='quaternary' color='black' direction='column' p='2rem' borderRadius='10px' gap='2rem' align='center'>
      <p>Tem certeza que deseja excluir este registro?</p>
      <span>{actualProjectName}</span>
      <Flex justify='center' align='center' gap='1rem'>
        <Button onClick={() => handleRemoveTag(String(id))}>
          Excluir
        </Button>
        <ButtonAlertClose>
          Cancelar
        </ButtonAlertClose>
      </Flex>
    </Flex>
  );
}

export default AlertDelete;