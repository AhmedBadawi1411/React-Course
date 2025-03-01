// import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/postComponent/PostComponent';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
     <HeaderComponent/>
     <main>
     <div className='page-body'>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     <PostComponent/>
     </div >
     <div className='side-section'>
     <SideMenu/>

     </div>
     </main>
    </div>
  );
}

export default App;
