import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/UI/Header/Header'
import { SCDetailsPage } from './DetailsPage.styled'

interface Details {
	matchData: any
}

const DetailsPage = ({ matchData }: Details) => {
	const { teams, goals, league, fixture } = matchData

	return (
		<SCDetailsPage>
			<Header />
			<div className='match-details'>
				<h1>Детали матча: {fixture.id}</h1>
				<p>Дата: {fixture.date}</p>
				<p>Лига: {league.name}</p>
				<p>Страна: {league.country}</p>
				<p>Рефери: {fixture.referee}</p>
				<p>Город: {fixture.venue.city}</p>
				<div className='teams'>
					<div className='team'>
						<img src={teams.home.logo} alt='' />
						<p>{teams.home.name}</p>
						<span>{goals.home}</span>
					</div>
					<div className='team'>
						<img src={teams.away.logo} alt='' />
						<p>{teams.away.name}</p>
						<span>{goals.away}</span>
					</div>
				</div>
				<Link to='/main' className='back-link'>
					Вернуться к списку матчей
				</Link>
			</div>
		</SCDetailsPage>
	)
}

export default DetailsPage
