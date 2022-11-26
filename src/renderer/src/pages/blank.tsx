import { Link } from "react-router-dom";
export function Blank() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Select or Create a new document
      <Link to="/document">Document Test</Link>
    </main>
  );
}
