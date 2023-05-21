import { Link } from "react-router-dom";

export default function Reports(props) {
  const { reports } = props;

  return (
    <div>
      {
        reports.map(report => (
          <div key={report.id}>
            <h2>{report.client_name}</h2>
            <p>{report.canvas_entry}</p>
            <Link to={`/report/${report.id}`}>View Report</Link>
          </div>
        ))
      }
    </div>
  )
}