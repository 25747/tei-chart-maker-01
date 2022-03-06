import { intervalToDuration, parse } from "date-fns";

export const calculateFullAge = (dob) => {
  const today = new Date();
  const birthDate = parse(dob, "MMMM d, yyyy", today);
  console.log(birthDate);
  const { years, months, days } = intervalToDuration({
    start: birthDate,
    end: today,
  });
  return `${years} Years, ${days} Days Old`;
};
