import { BaseResponseModel } from "@/models/base";

const initialState: BaseResponseModel<any> = {
  data: null,
  status: "success",
  message: "",
};

export default initialState;
