import './App.css';
import { Project } from './Projects';
import { Rtl } from './assets/Rtl/RtlComponent';
import { CssBaseline} from '@mui/material';

function App() {
  return (
    <Rtl>
      <CssBaseline />      
      <Project />
    </Rtl>
  );
}

export default App;
