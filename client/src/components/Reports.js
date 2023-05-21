export default function Reports(props) {
  const { reports } = props;

  return (
    <div>
      {
        reports.map(report => (
          <div key={report.id}>
            <h2>{report.client_name}</h2>
            <p>{report.canvas_entry}</p>
          </div>
        ))
      }
    </div>
  )
}