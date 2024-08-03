import { useState, useEffect } from 'react'
import './customers.css'
import sliders from '../../assets/images/sliders.svg'
import Commits from '../commits/Commits'
import Offerrs from '../offers/Offerrs'

const Customers = () => {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/comments?limit=3")
      .then(response => response.json())
      .then(data => setCommits(data.comments))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <section className='customers' >
      <div className="container">
        <div className="customers__wrapper">
          <div className='customers__titles' >
            <h2 className='customers__title' >
            OUR HAPPY CUSTOMERS
            </h2>
            <img src={sliders} alt="" />
          </div>
          <div className='customers__commits' >
            {
              commits.map(commit => (
                <Commits commit={commit} />
              ))
            }
          </div>
        </div>
        <Offerrs/>
      </div>
    </section>
  )
}

export default Customers
