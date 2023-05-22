import axios from 'axios';
import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import ExportCsvButton from '../components/ExportCsvButton';
import Reports from "../components/Reports";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getAllReports = async () => {
      try {
        const { data } = await axios.get('/api/reports');
        setReports(data);
      } catch (error) {
        console.error('Could not fetch reports', error);
      }
    }
    getAllReports();
  }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      <ExportCsvButton reports={reports} />
      <Link to="/create-report">Create report</Link>
      <Reports reports={reports} />
    </div>
  );
}