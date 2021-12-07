import './App.css';
import Editor from './Editor';

function App() {
  return (
    <div style={{ boxSizing:'border-box', overflow:'hidden', width:'100%', height:'100vh', backgroundColor: '#1e1e1e' }}>
      <Editor/>
    </div>
  );
}

export default App;
