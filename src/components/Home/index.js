// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const iplUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getCardList()
  }

  getCardList = async () => {
    const listResponse = await fetch(iplUrl)
    const data = await listResponse.json()

    const formattedData = data.teams.map(eachList => ({
      id: eachList.id,
      name: eachList.name,
      teamImageUrl: eachList.team_image_url,
    }))
    this.setState({teamList: formattedData, isLoading: false})
  }

  renderList = () => {
    const {teamList} = this.state

    return (
      <ul className="team-card-container">
        {teamList.map(eachList => (
          <TeamCard card={eachList} key={eachList.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height="70" />
    </div>
  )

  renderLogoContainer = () => (
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
        className="logo"
      />
      <h1 className="logo-heading">IPL Dashboard</h1>
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-app-container">
        {this.renderLogoContainer()}
        <div>{isLoading ? this.renderLoader() : this.renderList()}</div>
      </div>
    )
  }
}

export default Home
