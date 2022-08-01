import {
  Box,
  Button,
  Flex,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/Portal/Header'
import { Panel } from '../../components/Portal/Panel'
import { Link as RouterLink } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { deleteUser, useUsers } from './useUsers'
import { FaFileImport, FaPlus } from 'react-icons/fa'
import { queryClient } from '../../services/queryClient'
import api from '../../services/api'
import { PencilSimpleLine, TrashSimple } from 'phosphor-react'

const ListUsers: React.FC = () => {
  // style colors customTheme
  const bg = useColorModeValue('hoverDark', 'hoverLight')
  const { data, isLoading, isFetching, error } = useUsers()

  async function handlePrefetchSectioOne(userId: string) {
    await queryClient.prefetchQuery(
      ['users', userId],
      async () => {
        const response = await api.get(`/users/${userId}`)
        return response.data
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      },
    )
  }

  return (
    <>
      <Header />
      <Panel title="List Users">
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
            {/* <Input maxW={250} placeholder='search' size='sm' name="search" borderRadius={20} color='tomato' _placeholder={{ opacity: 0.6, color: 'gray.600' }} backgroundColor={bg} focusBorderColor={bg} /> */}
          </Flex>

          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}

          <Flex flex={1} justify="right" align="center">
            <Flex borderRadius={10}>
              <Link
                as={RouterLink}
                to={'/import'}
                bg={bg}
                mr={1}
                p={2}
                borderRadius={10}
              >
                <FaFileImport />
              </Link>
              <Link
                as={RouterLink}
                to={'/create-user'}
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
            <Table variant="simple" color="black" mt={2}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Avatar</Th>
                  <Th>Active</Th>
                  <Th>Created</Th>
                  <Th>#</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.users.map((user) => (
                  <Tr key={user.id}>
                    <Td paddingTop="2" paddingBottom="2" minW="8rem">
                      <Box>
                        <Link
                          onMouseEnter={() => handlePrefetchSectioOne(user.id)}
                        >
                          <Text fontWeight="bold">{user.name}</Text>
                        </Link>
                      </Box>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW="8rem">
                      <Flex justify="space-between" align="center">
                        <Text noOfLines={1}>{user.email}</Text>
                      </Flex>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{user.avatar}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{user.active}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      {user.created_at}
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW="1rem">
                      <Flex justify="center" align="center" gap="1">
                        <RouterLink to={`/update-user/${user.id}`}>
                          <PencilSimpleLine size={24} />
                        </RouterLink>
                        <Button onClick={() => deleteUser(user.id)} p={0}>
                          <TrashSimple size={24} color="#c53030" />
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </Panel>
    </>
  )
}

export default ListUsers
