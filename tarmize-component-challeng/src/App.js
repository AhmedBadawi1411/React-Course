// import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/postComponent/PostComponent';
import SideMenu from './components/SideMenu';

function App() {
  const data = [
    {
      "title": "The Future of Technology",
      "content": "Technology is evolving rapidly, shaping the future of every industry. From AI to quantum computing, innovations are transforming the way we live and work.",
      "imageUrl": "https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960"
    },
    {
      "title": "Top 10 Travel Destinations in 2025",
      "content": "Planning your next vacation? Check out these top travel spots that are gaining popularity in 2025. From tropical beaches to historic cities, there's something for everyone.",
      "imageUrl": "https://nypost.com/wp-content/uploads/sites/2/2024/10/newspress-collage-nad8sy0qw-1729728287137.jpg?quality=75&strip=all&1729713989"
    },
    {
      "title": "Healthy Eating Habits",
      "content": "Eating a balanced diet helps you maintain good health and feel your best. It doesn't have to be difficult either. Include fruits, vegetables, and whole grains in your daily meals."
    },
    {
      "title": "Beginner's Guide to Investing",
      "content": "Investing can be intimidating at first, but with the right guidance, anyone can start building their financial future. Learn the basics of stocks, bonds, and mutual funds.",
      "imageUrl": "https://www.publicfinanceinternational.org/wp-content/uploads/A-Beginners-Guide-To-Investing-In-Stocks.jpg"
    },
    {
      "title": "Mastering Remote Work",
      "content": "Working from home comes with its own set of challenges and perks. Learn how to stay productive, manage your time, and create a healthy work-life balance."
    },
  ];

  const tags = [
    'New',
    'Trending',
    'Technology',
    'Travel'
  ]

  return (
    <div className="App">
     <HeaderComponent/>
     <main>
     <div className='page-body'>
        {
          data.map((articl) => (
            <PostComponent title={articl.title} body={articl.content}>
            <div className='img-container'>
              <img src={articl.imageUrl} alt=''></img>
              </div>
            </PostComponent>
          ))
        }
     </div >
     <div className='side-section'>
     <SideMenu tags={tags}/>

     </div>
     </main>
    </div>
  );
}

export default App;
