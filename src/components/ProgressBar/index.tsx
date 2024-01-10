import { ProgressBarI } from "../../types/progressBar.types";
import { Progress, ProgressBarContainer } from "./styled";


const ProgressBar: React.FC<ProgressBarI> = ({ percentage, color }) => {
  return (
    <ProgressBarContainer>
      <Progress percentage={percentage} color={color} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
