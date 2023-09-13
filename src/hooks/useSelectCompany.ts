import { getCompaniesAPI } from "api/services/insuranceAPI";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCompaniesType } from "types/types";
type selectListType = {
  id: number;
  label: string;
  description?: string;
}[];
const useSelectCompany = () => {
  const [companiesList, setCompaniesList] = useState<selectListType>([]);
  const { data, isFetching } = useQuery(["/companies"], getCompaniesAPI, {
    onSuccess: (response: getCompaniesType["data"]) => {
      const temp: selectListType = [];
      response?.map((item) => {
        return temp.push({
          id: item.id,
          label: item.title,
          description: item.description,
        });
      });
      setCompaniesList(temp);
    },
  });
  return {
    companiesList,
    isFetching,
  };
};

export default useSelectCompany;
