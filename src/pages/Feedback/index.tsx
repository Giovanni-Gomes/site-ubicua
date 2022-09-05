import { PencilSimpleLine, PlusCircle, TrashSimple } from 'phosphor-react';
import React, { useState } from 'react';
import { Translator } from '../../components/Portal/I18n/Translator';
import { Panel } from '../../components/Portal/Panel';
import { TableCustom } from '../../components/Portal/Table/styles';
import { Loading } from '../../components/Site/WidgetForm/Loading';
import { Actions, ButtonAlert, ButtonDetails, PopContainer, PopPanelAlert, PopPanelDetails } from './styles';
import { useFeedbacks } from './useFeedback';
import { Link as RouterLink } from 'react-router-dom'
import AlertDelete from './AlertDelete';
import DetailsFeedback from './DetailsFeedback';


// import { Container } from './styles';

const Feedback: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useFeedbacks(
    page,
    10,
    searchQuery,
  )

  return (
    <Panel
      title={<Translator path="feedback.title" />}
      back="/dashboard"
      search={true}
      searchState={setSearchQuery}
      importFile="/import"
      create="/create-feedback"
    >
      <div>{!isLoading && isFetching && <Loading />}</div>

      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : error ? (
        <div>failed to get the data!</div>
      ) : (
        <TableCustom color="black">
          <thead>
            <tr>
              <th><Translator path="feedback.tr.th_one" /></th>
              <th><Translator path="feedback.tr.th_two" /></th>
              <th><Translator path="feedback.tr.th_three" /></th>
              <th><Translator path="feedback.tr.th_four" /></th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {data?.feedbacks.map((feedback: any) => (
              <tr key={feedback.id}>
                <td>
                  <PopContainer>
                    <PopPanelDetails>
                      {/* <DetailsFeedback id={feedback.id} /> */}
                    </PopPanelDetails>
                    <ButtonDetails>
                      {/* <Link onMouseEnter={() => handlePrefetchProject(project.id)}> */}
                      <p style={{ fontWeight: 'bold' }}>{feedback.type}</p>
                      {/* </Link> */}
                    </ButtonDetails>
                  </PopContainer>
                </td>

                <td>{feedback.comment}</td>
                <td>{feedback.screenshot}</td>
                <td>{feedback.createdAt}</td>
                <td>
                  <Actions>
                    {/* <RouterLink to={`/update-project/${feedback.id}`}>
                      <PencilSimpleLine size={24} />
                    </RouterLink> */}

                    <PopContainer>
                      <PopPanelAlert>
                        <AlertDelete
                          id={feedback.id}
                          actualProjectName={feedback.type}
                        />
                      </PopPanelAlert>
                      <ButtonAlert>
                        <TrashSimple size={24} color="#c53030" />
                      </ButtonAlert>
                    </PopContainer>
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </TableCustom>
      )}
    </Panel>
  );
}

export default Feedback;