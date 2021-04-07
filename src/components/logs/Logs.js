import { useState, useEffect } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

const useLogs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLogs = async () => {
    setIsLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();

    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getLogs();
  }, []);

  return { data, isLoading };
};

const Logs = () => {
  const { data: logs, isLoading } = useLogs();

  if (isLoading) return <Preloader />;

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>

      {!isLoading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
