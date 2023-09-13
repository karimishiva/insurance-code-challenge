import { getVehiclesAPI } from "api/services/insuranceAPI";
import { useEffect, useState, useCallback } from "react";
import { useQuery } from "react-query";
import { getVehicleType, thirdInsuranceStore, vehicleUsage } from "types/types";
import { useDispatch, useSelector } from "react-redux";
import { changeVehicleType, changeVehicleUsage } from "store";
import { useNavigate } from "react-router-dom";
type selectListType = {
  label: string | number;
  value: string | number;
  id: string | number;
}[];
const useSelectVehicle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { vehicleType, vehicleUsage } = useSelector(
    (state: { insurance: thirdInsuranceStore }) => {
      return {
        vehicleType: state.insurance.vehicle.type,
        vehicleUsage: state.insurance.vehicle.usage,
      };
    }
  );
  const [typeList, setTypeList] = useState<selectListType>([]);
  const [usageList, setUsageList] = useState<selectListType>([]);

  const { data, isFetching } = useQuery(["/getVehicles"], getVehiclesAPI, {
    onSuccess: (response: getVehicleType["data"]) => {
      const temp: selectListType = [];
      response?.map((item) => {
        return temp.push({ id: item.id, value: item.title, label: item.title });
      });
      setTypeList(temp);
    },
  });
  const handleChangeVehicleType = useCallback(
    (val: string) => {
      const filterVehicle = data?.filter((item) => item.title === val);
      if (filterVehicle) {
        dispatch(changeVehicleType(filterVehicle[0].title));
        handleSetUsageList(filterVehicle[0].usages);
      }
    },
    [data, dispatch]
  );

  useEffect(() => {
    vehicleType && handleChangeVehicleType(vehicleType);
  }, [vehicleType, handleChangeVehicleType]);
  const handleSetUsageList = (list: vehicleUsage) => {
    const temp: selectListType = [];
    list?.map((item) => {
      return temp.push({ id: item.id, value: item.title, label: item.title });
    });
    setUsageList(temp);
  };

  const handleChangeVehicleUsage = (val: string) => {
    dispatch(changeVehicleUsage(val));
  };

  const handleNavigate = (route: string) => {
    navigate(route);
  };
  return {
    typeList,
    vehicleType,
    handleChangeVehicleType,
    usageList,
    vehicleUsage,
    handleChangeVehicleUsage,
    handleNavigate,
    isFetching,
  };
};

export default useSelectVehicle;
