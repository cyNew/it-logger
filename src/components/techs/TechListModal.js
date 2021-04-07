import { useEffect, useState } from "react";
import TechItem from "./TechItem";

const useTechs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLogs = async () => {
    setIsLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getLogs();
  }, []);

  return { data, isLoading };
};

const TechListModal = () => {
  const { data: techs, isLoading } = useTechs();

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!isLoading &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
