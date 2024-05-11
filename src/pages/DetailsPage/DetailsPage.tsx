import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/UI/Header/Header'
import { SCDetailsPage } from './DetailsPage.styled'

const DetailsPage = () => {
	const { id } = useParams()
	const [matchData, setMatchData] = useState(null)

	const getScoreBackgroundColor = (home, away) => {
		if (home > away) {
			return 'green'
		} else if (home < away) {
			return 'red'
		} else {
			return 'grey'
		}
	}

	useEffect(() => {
		const matchesData = JSON.parse(localStorage.getItem('matchesData')) || []

		const match = matchesData.find(match => match.fixture.id === parseInt(id))

		if (match) {
			setMatchData(match)
		}
	}, [id])

	if (!matchData) {
		return <div>Loading...</div>
	}

	return (
		<SCDetailsPage>
			<div>
				<Header />
				<div className='Matches'>
					<h1>Результат матча</h1>
					<div className='match-card'>
						<div className='team'>
							<img src={matchData.teams.home.logo} alt='' />
							<p>{matchData.teams.home.name}</p>
							<span
								style={{
									backgroundColor: getScoreBackgroundColor(
										matchData.goals.home,
										matchData.goals.away
									),
								}}
							>
								{matchData.goals.home}
							</span>
						</div>
						<div className='details'>
							<p>
								<span>Лига:</span> {matchData.league.name}
							</p>
							<p>
								<span>Страна:</span> {matchData.league.country}
							</p>
							<p>
								<span>Дата:</span> {matchData.fixture.date}
							</p>
							<p>
								<span>Рефери:</span> {matchData.fixture.referee}
							</p>
							<p>
								<span>Город:</span> {matchData.fixture.venue.city}
							</p>
						</div>
						<div className='team'>
							<span
								className='goals-1'
								style={{
									backgroundColor: getScoreBackgroundColor(
										matchData.goals.away,
										matchData.goals.home
									),
								}}
							>
								{matchData.goals.away}
							</span>
							<img src={matchData.teams.away.logo} alt='' />
							<p>{matchData.teams.away.name}</p>
							<span
								className='goals-2'
								style={{
									backgroundColor: getScoreBackgroundColor(
										matchData.goals.away,
										matchData.goals.home
									),
								}}
							>
								{matchData.goals.away}
							</span>
						</div>
					</div>
				</div>
			</div>
		</SCDetailsPage>
	)
}

export default DetailsPage
