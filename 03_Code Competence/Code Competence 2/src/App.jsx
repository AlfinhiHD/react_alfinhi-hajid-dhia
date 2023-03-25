import './App.css'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800;900&display=swap"
        rel="stylesheet"
      />

      <ProfilePage />
    </div>
  )
}

export default App
