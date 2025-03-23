import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import AppRouter from './pages/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {

    return  <MantineProvider>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
 
    </MantineProvider>;
  
   
}

export default App
 