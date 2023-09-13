import { getDiscountsAPI } from "api/services/insuranceAPI";
import { useQuery } from "react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePersonDiscount, changeThirdDiscount } from "store";
import { thirdInsuranceStore } from "types/types";
type selectListType = {
  id: number;
  label: string;
}[];
const useSelectDiscount = () => {
  const dispatch = useDispatch();
  const { thirdDiscount, personDiscount } = useSelector(
    (state: { insurance: thirdInsuranceStore }) => {
      return {
        thirdDiscount: state.insurance.discount.insurance,
        personDiscount: state.insurance.discount.person,
      };
    }
  );
  const [selectList, setSelectList] = useState<selectListType>([]);
  const [show, setShow] = useState(false);
  const { isFetching } = useQuery(["/discounts"], getDiscountsAPI, {
    onSuccess: (data) => {
      const temp: selectListType = [];
      data?.map((item) => {
        return temp.push({
          id: item.id,
          label: item.title,
        });
      });
      setSelectList(temp);
    },
  });
  const handleSelectThirdDiscount = (discount: string) => {
    dispatch(changeThirdDiscount(discount));
  };
  const handleSelectPersonDiscount = (discount: string) => {
    dispatch(changePersonDiscount(discount));
  };
  return {
    isFetching,
    selectList,
    handleSelectThirdDiscount,
    handleSelectPersonDiscount,
    thirdDiscount,
    personDiscount,
    show,
    setShow,
  };
};

export default useSelectDiscount;
