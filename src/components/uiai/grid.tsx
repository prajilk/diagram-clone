import AIModelsCol from "./cols/ai-models-col/ai-models-col";
import PlaygroundCol from "./cols/playground-col/playground-col";

const Grid = () => {
  return (
    <div className="container mt-10 hidden gap-5 lg:grid lg:grid-cols-4">
      <AIModelsCol />
      <PlaygroundCol />
    </div>
  );
};

export default Grid;
