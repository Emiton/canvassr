import axios from 'axios';
import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import styled from 'styled-components'
import ExportCsvButton from '../components/ExportCsvButton';
import Reports from "../components/Reports";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getAllReports = async () => {
      try {
        const response = await axios.get('/api/reports');
        if (response.status === 200) {
          setReports(response.data);
        }
      } catch (error) {
        console.error('Could not fetch reports', error);
      }
    }
    getAllReports();
  }, [])
  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
      <Link className="report-link" to="/create-report">Create report</Link>
      <Link className="search-link" to={"/search"}>Search reports</Link>
      <ExportCsvButton reports={reports} />
      <Reports reports={reports} />
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
