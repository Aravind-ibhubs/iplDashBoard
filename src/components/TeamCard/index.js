// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {card} = props
  const {name, teamImageUrl, id} = card

  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="list-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
