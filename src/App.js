import './App.css';
import Student from './components/student';

function App() {
  return (
    <div className='App'>
      <div className='container-main'>
        <h1>Curso segundo A</h1>
        <Student
          name='Paula'
          age='10 years'
          address='cra 80'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit maiores perferendis eligendi voluptates, enim animi praesentium! Dolores voluptas ratione velit, exercitationem placeat, tempora animi provident est, maxime incidunt in tempore.'
          image='paula'/>

        <Student
        name='raul'
        age='9 years'
        address='Av siempre viva'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit maiores perferendis eligendi voluptates, enim animi praesentium! Dolores voluptas ratione velit, exercitationem placeat, tempora animi provident est, maxime incidunt in tempore.'
        image='raul'/>

      <Student
        name='roberto'
        age='11 years'
        address='Av 45 lsla'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit maiores perferendis eligendi voluptates, enim animi praesentium! Dolores voluptas ratione velit, exercitationem placeat, tempora animi provident est, maxime incidunt in tempore.'
        image='roberto'/>

      <Student
        name='sofia'
        age='10 years'
        address='Calle 34 45 -78'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit maiores perferendis eligendi voluptates, enim animi praesentium! Dolores voluptas ratione velit, exercitationem placeat, tempora animi provident est, maxime incidunt in tempore.'
        image='sofia'/>
      </div>
    </div>
  );
}


export default App;
