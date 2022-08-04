import { PaginationItem } from './PaginationItem'
import { Container, WrapperButton } from './styles'

interface PaginationProps {
  totalCountOfRegisters?: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatesPageArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 20,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.round(Number(totalCountOfRegisters) / registersPerPage)

  const previousPage =
    currentPage > 1
      ? generatesPageArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPage =
    currentPage < lastPage
      ? generatesPageArray(
        currentPage,
        Math.min(currentPage + siblingsCount, lastPage),
      )
      : []

  return (
    <Container>
      <p>
        <strong>
          {' '}
          {registersPerPage > Number(totalCountOfRegisters)
            ? totalCountOfRegisters
            : registersPerPage}
        </strong>{' '}
        de <strong>{totalCountOfRegisters}</strong>
      </p>

      <WrapperButton>
        {currentPage > 1 + siblingsCount && (
          <>
            {console.log(currentPage)}
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <p>
                ...
              </p>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <p>
                ...
              </p>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </WrapperButton>
    </Container>
  )
}
