import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Reports(props) {
  const { reports } = props;

  return (
    <div>
      {
        reports.map(report => (
          <ReportWrapper key={report.id}>
            <ReportName>{report.client_name}</ReportName>
            <ReportEntry>{report.canvas_entry}</ReportEntry>
            <Link to={`/report/${report.id}`}>View Report</Link>
          </ReportWrapper>
        ))
      }
    </div>
  )
}

const ReportWrapper = styled.div`
  &:not(:last-child)  {
    border-bottom: 2px solid gray;
    padding-bottom: 16px;
  }
`;

const ReportName = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReportEntry = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;