import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate ,useParams } from "react-router-dom";
import styled from "styled-components";
import ReportForm from "../components/ReportForm";

export default function ViewReport() {
  const { id } = useParams();
  const navigate = useNavigate();
  const defaultReport = {
    client_name: 'Client not found',
    canvasEntry: '-'
  }

  const [report, setReport] = useState(defaultReport);
  const [isEditable, setIsEditable] = useState(false);
  const [viewModeText, setViewModeText] = useState('Edit report');

  useEffect(() => {
    const getReport = async () => {
      try {
        const response = await axios.get(`/api/reports/published/${id}`)
        if (response.status === 200) {
          const { data } = response;
          setReport({clientName: data.client_name, canvasEntry: data.canvas_entry})
        }
      } catch (error) {
        alert('Could not load report');
        navigate('/');
      }
    }
    getReport();
  }, []);

  function switchViewModes() {
    setIsEditable(!isEditable);
    viewModeText === 'Edit report' ? 
    setViewModeText('Cancel changes') :
    setViewModeText('Edit report');
  }

  return (
    <div>
      <Link to="/">Return to dashboard</Link>
      <button onClick={switchViewModes}>{viewModeText}</button>
      {
        isEditable ? (
          <div>
            <ReportForm reportName={report.clientName} reportEntry={report.canvasEntry} reportId={id}/>

          </div>
          ) : (
          <div>
            <ReportName>{report.clientName}</ReportName>
            <ReportEntry>{report.canvasEntry}</ReportEntry>
          </div>
        )
      }
      
    </div>
  );
}

const ReportName = styled.h2`
  word-wrap: break-word;
`;

const ReportEntry = styled.p`
  word-wrap: break-word;
`;