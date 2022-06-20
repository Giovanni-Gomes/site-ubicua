import api from "../../../services/api";

interface IHeaderProps {
  id: string;
  name: string;
  description: string;
}

interface IHeaderResponse {
  listHeader: IHeaderProps[]
}

export async function useFooter(): Promise<IHeaderResponse> {
  const { data } = await api.get('v1/footer/titles');
  //console.log("data" + data);

  const result = data.map((listHeader: IHeaderProps) => ({
    id: listHeader.id,
    name: listHeader.name,
  }))
  console.log("result" + result);
  return result;
}