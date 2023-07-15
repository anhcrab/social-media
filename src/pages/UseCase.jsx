import Communities from "../components/usecases/Communities.jsx";
import People from "../components/usecases/People.jsx";
import Plan from "../components/usecases/Plan.jsx";
import Questions from "../components/usecases/Question.jsx";
import Dao from "../components/usecases/DaoCave.jsx";
const UseCase = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Communities />
      <People />
      <Plan />
      <Questions />
      <Dao />
    </div>
  );
};
export default UseCase;
