import * as yup from "yup";

export const TO_DO_LIST_SCHEME = yup.object({
  text: yup
    .string()
    .matches(/^.{3,75}$/, "You need to write something longer than 2 symbols")
});
