import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom"

export default function SearchReports() {
  const [queryString, setQueryString] = useState('');
  const [matchingReports, setMatchingReports] = useState([]);

  async function search(event) {
    event.preventDefault();
    try {
      if (!queryString) {
        alert('Please enter a search term.');
        return;
      }
      const response = await axios.get('/api/reports/search', {
        params: {
          queryString: queryString
        }
      });

      if (response.status === 200) {
        setMatchingReports(response.data);
      } else {
        setMatchingReports([]);
        alert('No matches found.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Link to="/">Return to dashboard</Link>
      <form onSubmit={search}>
        <label htmlFor="search">Search</label>
        <input
          id="name"
          type="text"
          name="search"
          placeholder="Search your reports"
          value={queryString}
          onChange={e => setQueryString(e.target.value)}
        />
        <input type="submit" value="Submit"/>
      </form>
      <div>
        {
          matchingReports.map(report => (
            <div key={report.id}>
              <h2>{report.client_name}</h2>
              <p>{report.canvas_entry}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}