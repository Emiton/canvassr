import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate ,useParams } from "react-router-dom";

export default function ViewReport() {
  const { id } = useParams();
  const navigate = useNavigate();
  const defaultReport = {
    client_name: 'Client not found',
    canvasEntry: '-'
  }

  const [report, setReport] = useState(defaultReport);

  useEffect(() => {
    const getReport = async () => {
      try {
        const { data } = await axios.get(`/api/reports/published/${id}`)
        console.log(data);
        setReport({clientName: data.client_name, canvasEntry: data.canvas_entry})
      } catch (error) {
        alert('Could not load report');
        navigate('/');
      }
    }
    getReport();
  }, []);


  return (
    <div>
      <Link to="/">Return to dashboard</Link>
      <h1>{report.clientName}</h1>
      <p>{report.canvasEntry}</p>
    </div>
  );
}