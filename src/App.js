import './App.css';
import DisplayItems from './components/DisplayItems';

function App() {

  function handleNavClick(num) {

    let items = document.getElementsByClassName("navItem")

    for (let i = 0; i < items.length; i++) {
      if (i === num) {
        items[i].classList.add("selectedItem")
      }
      else {
        items[i].classList.remove("selectedItem")
      }
    }

  }

  return (
    <div className='outerDiv'>
      <div className='navigation'>
        <div className='App-logo  '>
          <h3>YKC</h3>
        </div>
        <div className='navItem' onClick={() => handleNavClick(0)}>
          <a href='#home' >
            <h1>🏠</h1>
            <p>Home</p>
          </a>
        </div>
        <div className='navItem' onClick={() => handleNavClick(1)}>
          <a href='#about'>
            <h1>🧑</h1>
            <p>About</p>
          </a>
        </div>
        <div className='navItem' onClick={() => handleNavClick(2)}>
          <a href='#resume'>
            <h1>👨🏽‍🎓</h1>
            <p>Resume</p>
          </a>
        </div>
        <div className='navItem' onClick={() => handleNavClick(3)}>
          <a href='#projects'>
            <h1>🛠</h1>
            <p>Projects</p>
          </a>
        </div>
        <div className='navItem' onClick={() => handleNavClick(4)}>
          <a href='#contactMe'>
            <h1>📞</h1>
            <p>Contact Me</p>
          </a>
        </div>
      </div>
      <div className='rightContent'>
        <DisplayItems />
      </div>
    </div>
  );
}

export default App;
