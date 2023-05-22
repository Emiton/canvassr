import { Link } from 'react-router-dom';
import ReportForm from '../components/ReportForm';


export default function CreateReport() {
  return (
    <main>
      <h1>Create report</h1>
      <Link to="/">Return to dashboard</Link>
      <section>
        <ReportForm />
      </section>
    </main>
  );
}