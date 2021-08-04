// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchCard

  const getClassName = () => {
    if (matchStatus === 'Won') {
      return 'sucess-card'
    }
    return 'loss-card'
  }

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing-team-${competingTeam}`}
        className="match-image"
      />
      <h1 className="match-heading">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <p className={getClassName()}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
