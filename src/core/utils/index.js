import moment from "moment";

export const getFormattedTime = (date) => {
  return  moment(date).format('MMMM Do YYYY, h:mm:ss a')
};
/*
export function calculateSumOfNumbers(arrDonates) {
    sumDonates = arrDonates.reduce((acc, item) => {
        return (acc + item.amount)
    }, 0)
    return sumDonates;
}
*/