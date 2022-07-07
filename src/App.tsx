import { Container, Box } from '@mui/material'
import DetailsForm from './components/DetailsForm';

function App() {
  return (
    <Container component={Box} py={4}>
      <DetailsForm />
    </Container>
  );
}

export default App;
