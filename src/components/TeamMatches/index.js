// Write your code her
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {cardDetailsList: [], isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const detailsResponse = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const detailsList = await detailsResponse.json()
    const updatedData = {
      teamBannerUrl: detailsList.team_banner_url,
      latestMatchDetails: {
        umpires: detailsList.latest_match_details.umpires,
        result: detailsList.latest_match_details.result,
        manOfTheMatch: detailsList.latest_match_details.man_of_the_match,
        id: detailsList.latest_match_details.id,
        date: detailsList.latest_match_details.date,
        venue: detailsList.latest_match_details.venue,
        competingTeam: detailsList.latest_match_details.competing_team,
        competingTeamLogo: detailsList.latest_match_details.competing_team_logo,
        firstInnings: detailsList.latest_match_details.first_innings,
        secondInnings: detailsList.latest_match_details.second_innings,
        matchStatus: detailsList.latest_match_details.match_status,
      },
      recentMatches: detailsList.recent_matches.map(eachCard => ({
        umpires: eachCard.umpires,
        result: eachCard.result,
        manOfTheMatch: eachCard.man_of_the_match,
        id: eachCard.id,
        date: eachCard.date,
        venue: eachCard.venue,
        competingTeam: eachCard.competing_team,
        competingTeamLogo: eachCard.competing_team_logo,
        firstInnings: eachCard.first_innings,
        secondInnings: eachCard.second_innings,
        matchStatus: eachCard.match_status,
      })),
    }
    this.setState({cardDetailsList: updatedData, isLoading: false})
  }

  renderResult = () => {
    const {cardDetailsList} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = cardDetailsList

    return (
      <div className="team-details-card">
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <h1 className="top-heading">Latest Matches</h1>
        <LatestMatch latestMatchCard={latestMatchDetails} />
        <ul className="team-details-list">
          {recentMatches.map(eachList => (
            <MatchCard matchCard={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-details-app">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height="80" width="80" />
          </div>
        ) : (
          this.renderResult()
        )}
      </div>
    )
  }
}

export default TeamMatches
