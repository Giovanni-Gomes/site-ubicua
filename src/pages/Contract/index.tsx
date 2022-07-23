import { Box, Button, Flex, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { PencilSimpleLine, Trash, TrashSimple } from 'phosphor-react';
import React, { useState } from 'react';
import Header from '../../components/Portal/Header';
import { Pagination } from '../../components/Portal/Pagination';
import { Panel } from '../../components/Portal/Panel';
import api from '../../services/api';
import { queryClient } from "../../services/queryClient";
import { deleteContract, useContracts } from './useContracts';
import { Link as RouterLink } from 'react-router-dom';

import { useToast } from '../../components/hooks/provider/toast';

import { useMutation } from "react-query"
import { AxiosError } from 'axios';

interface ITableContract {
  id: string;
  name: string;
  description: string;
  progress: string;
}

const Contract: React.FC = () => {
  //style colors customTheme
  const bg = useColorModeValue('hoverDark', 'hoverLight');

  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useContracts(page, 10);

  const { addToast } = useToast();

  const [actualId, setActualId] = useState<String>()
  const [actualContractName, setActualContractName] = useState<String>()
  const [alert, setAlert] = useState(false)


  const removeContract = useMutation(
    async (id: string) => {
      const response = await api.delete(`/v1/contract/delete/${id}`);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('contracts');
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
      await removeContract.mutateAsync(id);

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
    setActualContractName(name)
    setAlert(true)
  }


  return (
    <>
      <Header />
      {alert &&
        <Flex position='fixed' bg={'transparent'} w='100%' h='100%' zIndex='10' justify='center' align='center'>
          <Flex bg='quaternary' color='black' direction='column' p='2rem' borderRadius='10px' gap='2rem' align='center'>
            <p>Tem certeza que deseja excluir este registro?</p>
            <span>{actualContractName}</span>
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
      <Panel title="List Contracts" back='/dashboard' next='/dashboard' search={true} importFile='/import' create='/create-project'>
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
                  <Th>Nº | Name</Th>
                  <Th>Desc</Th>
                  <Th>Ativo</Th>
                  <Th>Início</Th>
                  <Th>Fim</Th>
                  <Th>R$ VN</Th>
                  <Th>Fase</Th>
                  <Th>Resp</Th>
                  <Th>#</Th>
                </Tr>
              </Thead>
              <Tbody >
                {data?.contracts.map((contract: any) => (
                  <Tr key={contract.id}>
                    <Td paddingTop="2" paddingBottom="2" >
                      <Box>
                        {/* <Link onMouseEnter={() => handlePrefetchcontract(contract.id)}> */}
                        <Text fontWeight="bold">{contract.name}</Text>
                        {/* </Link> */}
                      </Box>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <Flex justify='space-between' align='center'>
                        <Text noOfLines={1}>{contract.description}</Text>
                      </Flex>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{contract.active}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      {contract.date_start}
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{contract.date_end}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{contract.progress}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <Text>{contract.negotiated_value}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{contract.status.name}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{contract.user.name}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='1rem'>
                      <Flex justify='center' align='center'>
                        <RouterLink to={`/update-contract/${contract.id}`} >
                          <PencilSimpleLine size={24} />
                        </RouterLink>
                        <Button onClick={() => showAlert(contract.id, contract.name)} p={0}>
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

export default Contract;
