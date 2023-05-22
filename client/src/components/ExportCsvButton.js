export default function ExportCsvButton(props) {
  const DEFAULT_FILENAME = 'reports.csv';
  const { reports } = props;

  async function exportToCsv() {
    if(reports.length !== 0) {
      const csvBody = convertToCsv(reports);
      const blob = new Blob([csvBody], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', DEFAULT_FILENAME);
      link.click();
    } else {
      alert('This is no data to export.')
    }
  }

  function convertToCsv(reports) {
    const headers = Object.keys(reports[0]).join(',');
    const data = reports.map(report => Object.values(report).join(','));
    return `${headers}\n${data.join('\n')}`;
  }

  return (
    <button onClick={exportToCsv}>Export data to CSV</button>
  )
}