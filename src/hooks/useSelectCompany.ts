import { getCompaniesAPI } from "api/services/insuranceAPI";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeCompany } from "store";
import { getCompaniesType, thirdInsuranceStore } from "types/types";
type selectListType = {
  id: number;
  label: string;
  description?: string;
}[];
const useSelectCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const company = useSelector((state: { insurance: thirdInsuranceStore }) => {
    return state.insurance.company;
  });
  const [companiesList, setCompaniesList] = useState<selectListType>([]);
  const { isFetching } = useQuery(["/companies"], getCompaniesAPI, {
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
  const handleSelectCompany = (company: string) => {
    dispatch(changeCompany(company));
  };
  const handleNavigate = (route: string) => {
    navigate(route);
  };
  return {
    companiesList,
    isFetching,
    handleSelectCompany,
    company,
    handleNavigate,
  };
};

export default useSelectCompany;
