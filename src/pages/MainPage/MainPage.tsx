import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/UI/Header/Header'
import { SCMainPage } from './MainPage.styled'
import { useGetallAreasByIdQuery } from '../../store/api/bigAreasApi'

const MatchCard = ({ match }) => {
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		const existingMatch = favorites.find(
			favoriteMatch => favoriteMatch.fixture.id === match.fixture.id
		)
		setIsFavorite(!!existingMatch)
	}, [match])

	const addToFavorites = match => {
		let favorites = JSON.parse(localStorage.getItem('favorites')) || []

		const existingMatch = favorites.find(
			favoriteMatch => favoriteMatch.fixture.id === match.fixture.id
		)

		if (!existingMatch) {
			favorites.push(match)
			localStorage.setItem('favorites', JSON.stringify(favorites))
			console.log('Матч добавлен в избранное:', match)
			setIsFavorite(true)
		} else {
			console.log('Матч уже находится в избранном:', match)
		}
	}

	const removeFromFavorites = match => {
		let favorites = JSON.parse(localStorage.getItem('favorites')) || []

		const filteredFavorites = favorites.filter(
			favoriteMatch => favoriteMatch.fixture.id !== match.fixture.id
		)

		localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
		console.log('Матч удален из избранного:', match)
		setIsFavorite(false)
	}

	const handleToggleFavorite = () => {
		if (isFavorite) {
			removeFromFavorites(match)
		} else {
			addToFavorites(match)
		}
	}

	const getScoreBackgroundColor = (home, away) => {
		if (home > away) {
			return 'green'
		} else if (home < away) {
			return 'red'
		} else {
			return 'grey'
		}
	}

	console.log('Match Data:', match)

	return (
		<div className='match-card'>
			<div className='team'>
				<img src={match.teams.home.logo} alt='' />
				<p>{match.teams.home.name}</p>
				<span
					style={{
						backgroundColor: getScoreBackgroundColor(
							match.goals.home,
							match.goals.away
						),
					}}
				>
					{match.goals.home}
				</span>
			</div>
			<div className='details'>
				<p>{match.league.name}</p>
				<p>{match.league.country}</p>
				<p>{match.fixture.date}</p>
				<p>{match.fixture.referee}</p>
				<p>{match.fixture.venue.city}</p>
			</div>
			<div className='team'>
				<span
					className='goals-1'
					style={{
						backgroundColor: getScoreBackgroundColor(
							match.goals.away,
							match.goals.home
						),
					}}
				>
					{match.goals.away}
				</span>
				<img src={match.teams.away.logo} alt='' />
				<p>{match.teams.away.name}</p>
				<span
					className='goals-2'
					style={{
						backgroundColor: getScoreBackgroundColor(
							match.goals.away,
							match.goals.home
						),
					}}
				>
					{match.goals.away}
				</span>
			</div>
			<button className='buton' onClick={handleToggleFavorite}>
				{isFavorite ? 'Добавлен в избранное ✓' : 'Добавить в избранное'}
			</button>
			<Link to={`/details/${match.fixture.id}`}>
				<button className='buton'>Подробнее</button>
			</Link>
		</div>
	)
}

export const MainPage = () => {
	const { data } = useGetallAreasByIdQuery('33-34')

	useEffect(() => {
		if (data && data.response) {
			localStorage.setItem('matchesData', JSON.stringify(data.response))
		}
	}, [data])

	console.log('All Matches Data:', data && data.response)

	return (
		<SCMainPage>
			<Header />
			<aside className='LeftSide'></aside>
			<main className='Main'></main>
			<div className='Matches'>
				<h1>Список матчей</h1>
				{data?.response &&
					data.response.length &&
					data?.response.map(match => (
						<div className='block-matches' key={match.fixture.id}>
							<MatchCard match={match} />
						</div>
					))}
			</div>
			<aside className='RightSide'></aside>
		</SCMainPage>
	)
}
