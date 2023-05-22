import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function CreateReport() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');

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

    try {
      await axios.post('/api/reports', report);
      alert('Successully submitted new report.');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Your report cannot be submitted. Please try again later.')
    }
  }

  return (
    <main>
      <h1>Create report</h1>
      <Link to="/">Dashboard</Link>
      <section>
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
      </section>
    </main>
  );
}