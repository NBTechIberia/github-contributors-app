import axios from "axios";
import { IContributor } from "../reducers/dashboardReducer/types";

class DashboardServices {
  getDashboard() {
    return axios.get<IContributor[]>(
      "https://api.github.com/repos/facebook/react/contributors"
    );
  }
}

export default new DashboardServices();
