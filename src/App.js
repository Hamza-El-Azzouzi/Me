
import './App.css';
import About from './composant/About';
import Experience from './composant/Experience';
import Me from './composant/Me';
import './style/Me.css'
import Project from './composant/project';
import SideBar from './composant/sidebar';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div id="ME-nav">
          <Me />
        </div>
        <div id="About-nav">
          <About />
        </div>
        <div id="Experience-nav">
          <Experience />
        </div>
        <div id="Project-nav">
          <Project />
        </div>
        <SideBar />
        <div className='footer'>
          <div className='owner'> Built by Hamza el Azzouzi</div>
          <div className='rights'> All rights riserved</div>
        </div>
      </div>
    </div>
  );
}

export default App;
