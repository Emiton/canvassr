import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';

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
              <ReportName>{report.client_name}</ReportName>
              <ReportEntry>{report.canvas_entry}</ReportEntry>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const ReportName = styled.h2`
  word-wrap: break-word;
`;

const ReportEntry = styled.p`
  word-wrap: break-word;
`;