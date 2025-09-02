import { useState } from 'react'
import BasicSelect from './components/BasicSelect'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import WeatherInfo from './components/WeatherInfo'

function App() {
  const [city, setCity] = useState("Monterrey")

  const images = {
    "New York": "https://www.nobletransfer.com/upload/news/aric1jm529.png",
    "Monterrey": "https://xenpal.com.mx/wp-content/uploads/2024/06/atracciones-monterrey-nuevo-leon.jpg",
    "Chicago": "https://digital.ihg.com/is/image/ihg/intercontinental-chicago-5377570366-2x1"
  }


  return (
    <>      
      <Container 
        maxWidth={'sm'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 3,
          borderRadius: '4px',
          minHeight: '80vh',
          margin: '32px auto'
        }}
      >
        <Typography variant="h3" gutterBottom>
          Weather App
        </Typography>
        <img
          src={images[city]}
          alt="Random"
          style={{
            width: "100%",
            minHeight: "50vh",
            maxHeight: "50vh",
            borderRadius: "16px",
            marginBottom: "24px"
          }}
        />
        <WeatherInfo city={city}/>
        <BasicSelect city={city} setCity={setCity}/>
      </Container>
    </>
  )
}

export default App
