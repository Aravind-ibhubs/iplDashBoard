// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchCard} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchCard

  return (
    <div className="latest-match-card">
      <div className="image-details-card">
        <div className="text-card">
          <h1 className="text-white">{competingTeam}</h1>
          <p className="text-white">{date}</p>
          <p className="text-white">{venue}</p>
          <p className="text-white">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`team logo ${id}`}
          className="logo-image"
        />
      </div>
      <hr className="horizontal-line" />
      <div className="last-card">
        <h1 className="text-white">First Innings</h1>
        <p className="text-white">{firstInnings}</p>
        <h1 className="text-white">Second Innings</h1>
        <p className="text-white">{secondInnings}</p>
        <h1 className="text-white">Man Of The Match</h1>
        <p className="text-white">{manOfTheMatch}</p>
        <h1 className="text-white">Umpires</h1>
        <p className="text-white">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
