import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReportForm(props) {
  const { reportName, reportEntry, reportId } = props;
  const navigate = useNavigate();
  const [name, setName] = useState(reportName || '');
  const [entry, setEntry] = useState(reportEntry || '');
  async function submitReport(event) {
    event.preventDefault();

    if (!name || !entry) {
      alert('Please input a name and some notes.');
      return;
    }

    const report = {
      client_name: name,
      canvas_entry: entry
    }
    if (reportId) {
      try {
        await axios.post(`/api/reports/published/${reportId}`, report);
        alert('Successully updated report.');
        navigate('/');
      } catch (error) {
        console.error(error);
        alert('Your report cannot be updated. Please try again later.')
      }
    } else {
      try {
        await axios.post('/api/reports', report);
        alert('Successully submitted new report.');
        navigate('/');
      } catch (error) {
        console.error(error);
        alert('Your report cannot be submitted. Please try again later.')
      }
    }
  }

  return (
    <form onSubmit={submitReport}>
      <label htmlFor="name">Client name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Please input a name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="notes">Notes</label>
      <textarea value={entry} onChange={e => setEntry(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}