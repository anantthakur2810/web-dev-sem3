import Header from '../components/Header'
import Footer from '../components/Footer'
import {outlet} from 'react-router-dom'



function First() {
  return (
    <div>
      <Header />
      <h1>First Page</h1>
      <Footer />
    </div>
  )
}

export default First;