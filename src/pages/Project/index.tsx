import { Box, Button, Flex, Input as InputChakra, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { PencilSimpleLine, TrashSimple } from 'phosphor-react';
import React, { useCallback, useRef, useState } from 'react';
import Header from '../../components/Portal/Header';
import { Pagination } from '../../components/Portal/Pagination';
import { Panel } from '../../components/Portal/Panel';
import api from '../../services/api';
import { queryClient } from "../../services/queryClient";
import { useProjects } from './useProjects';
import { Link as RouterLink } from 'react-router-dom';

import { useToast } from '../../components/hooks/provider/toast';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMutation } from "react-query"
import { AxiosError } from 'axios';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Shared/Input';

const Project: React.FC = () => {
  //style colors customTheme
  const bg = useColorModeValue('hoverDark', 'hoverLight');

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { register, handleSubmit } = useForm();

  const { data, isLoading, isFetching, error } = useProjects(page, 10, searchQuery);

  const { addToast } = useToast();

  const [actualId, setActualId] = useState<String>()
  const [actualProjectName, setActualProjectName] = useState<String>()
  const [alert, setAlert] = useState(false)

  //const { register, handleSubmit } = useForm();
  const formRef = useRef<FormHandles>(null);

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
      setAlert(false)
    } catch {
      console.log('Error happened')
    }
  }

  function showAlert(id: string, name: string) {
    setActualId(id)
    setActualProjectName(name)
    setAlert(true)
  }

  type SearchContactsFormData = {
    search?: string;
  };
  // const handleSearchContacts: SubmitHandler<SearchContactsFormData> = async ({ search }) => {
  //   setSearchQuery(String(search));
  // };
  // async function handleSearchContacts({ data }: SearchContactsFormData) {
  //   event?.preventDefault();
  //   console.log("formRef", formRef);
  //   console.log("data", data);
  //   console.log("data.search", data.search);
  //   setSearchQuery(String(data.search));
  // };

  const handleSearchContacts = useCallback(
    async () => {
      try {
        const inputSearchValue = (document.getElementById('search') as HTMLInputElement).value;
        setSearchQuery(inputSearchValue);
      } catch (e) {
        console.log(e);
      }
    }, [])

  //console.log(setSearchQuery(String(searchQuery)));


  return (
    <>
      <Header />
      {alert &&
        <Flex position='fixed' bg={'transparent'} w='100%' h='100%' zIndex='10' justify='center' align='center'>
          <Flex bg='quaternary' color='black' direction='column' p='2rem' borderRadius='10px' gap='2rem' align='center'>
            <p>Tem certeza que deseja excluir este registro?</p>
            <span>{actualProjectName}</span>
            <Flex justify='center' align='center' gap='1rem'>
              <Button onClick={() => handleRemoveTag(String(actualId))}>
                Excluir
              </Button>
              <Button onClick={() => setAlert(false)}>
                Cancelar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      }
      <Panel title="List Projects" back='/dashboard' next='/dashboard' search={true} importFile='/import' create='/create-project'>
        {/* <Input
          name="search"
          onChange={(e: any) => setSearchQuery(e.target.value)}
          placeholder="Buscar contatos"
        //{...register('search')}
        /> */}


        <Form ref={formRef} onSubmit={handleSearchContacts}>
          {/* <Input
            id='search'
            type='text'
            name="search"
            placeholder="Buscar contatos"
          /> */}
          <InputChakra
            id='search'
            type='text'
            name="search"
          />

        </Form>
        {/* <Input
            placeholder="Buscar contatos"
            {...register('search')}
          /> */}
        {/* <Input
            //name="search"
            placeholder="Buscar contatos"
            {...register('search')}
          /> */}



        <Flex>
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Flex>


        {isLoading ? (
          <Flex py="10" justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex py="10" justify="center">
            <Text>failed to get the data!</Text>
          </Flex>
        ) : (
          <>
            <Table variant='simple' color='black' mt={2} size='sm' >
              <Thead >
                <Tr>
                  <Th>Nome</Th>
                  <Th>Desc</Th>
                  <Th>Ativo</Th>
                  <Th>Início</Th>
                  <Th>Fim</Th>
                  <Th>Progresso</Th>
                  <Th>R$-VN</Th>
                  <Th>R$-CR</Th>
                  <Th>Status</Th>
                  <Th>Resp</Th>
                  <Th>#</Th>
                </Tr>
              </Thead>
              <Tbody >
                {data?.projects.map((project: any) => (
                  <Tr key={project.id}>
                    <Td paddingTop="2" paddingBottom="2" >
                      <Box>
                        {/* <Link onMouseEnter={() => handlePrefetchProject(project.id)}> */}
                        <Text fontWeight="bold">{project.name}</Text>
                        {/* </Link> */}
                      </Box>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <Flex justify='space-between' align='center'>
                        <Text noOfLines={1}>{project.description}</Text>
                      </Flex>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.active}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      {project.date_start}
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.date_end}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.progress}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <Text>{project.negotiated_value}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.real_cost}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.status.name}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.user.name}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='1rem'>
                      <Flex justify='center' align='center'>
                        <RouterLink to={`/update-project/${project.id}`} >
                          <PencilSimpleLine size={24} />
                        </RouterLink>
                        <Button onClick={() => showAlert(project.id, project.name)} p={0}>
                          <TrashSimple size={24} color='#c53030' />
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
        <Pagination
          registersPerPage={10}
          totalCountOfRegisters={data?.totalPage}
          currentPage={page}
          onPageChange={setPage}
        />

      </Panel >

    </>
  );
}

export default Project;
