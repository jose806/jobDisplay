import AppCard from "../../components/AppCard";
import types from "../../types";

const AppSelectPage = ({ appList }: Props) => {
  return (
    <div>
      {appList.map((app, index) => {
        return (
          <div key={index}>
            <AppCard
              name={app.name}
              url={app.image}
              description={app.description}
            />
          </div>
        );
      })}
    </div>
  );
};

interface Props {
  appList: types.AppState[];
}

export default AppSelectPage;
