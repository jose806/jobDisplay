import { getAppList_State } from "../../store/selectors/globalSelectors";
import { RootState } from "../../store/store";
import { connect } from "react-redux";
import AppSelectPage from "./AppSelectPage";

const mapState = (state: RootState) => {
  return {
    appList: getAppList_State(state.globalSlice),
  };
};

export default connect(mapState, {})(AppSelectPage);
