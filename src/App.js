import './App.css';
import { Container, Stack, Button } from 'react-bootstrap';
import BudgetCard from './Components/BudgetCard';

function App() {
  return (
    <div className="App">
      <Container className='my-4'>
        <Stack direction='horizontal' gap="2" className='mb-4'>
          <h1 className='me-auto'>Bud<span className='text-success'>gify</span></h1>
          <Button variant='success'>Add Budget</Button>
          <Button variant='outline-success'>Add Expenses</Button>
        </Stack>
        <div style={{ display: "grid", gridTemplateColumns: "repeat()auto-fill, minmax(300px, 1fr)", gap: '1.2rem', alignItems: 'flex-start' }}>
          <BudgetCard name='Entertainment' amount={200} max={1000}></BudgetCard>
        </div>
      </Container>
    </div>
  );
}

export default App;
