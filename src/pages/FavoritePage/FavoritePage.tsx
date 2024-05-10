import React, { useState } from 'react'
import { Header } from '../../components/UI/Header/Header'
import { SCFavoritePage } from './FavoritePage.styled'

export const FavoritePage = () => {
	const [favoriteMatches, setFavoriteMatches] = useState(
		JSON.parse(localStorage.getItem('favorites')) || []
	)

	const getScoreBackgroundColor = (home, away) => {
		if (home > away) {
			return 'green'
		} else if (home < away) {
			return 'red'
		} else {
			return 'grey'
		}
	}

	const removeFromFavorites = matchId => {
		const updatedFavorites = favoriteMatches.filter(
			match => match.fixture.id !== matchId
		)
		setFavoriteMatches(updatedFavorites)
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
	}

	return (
		<SCFavoritePage>
			<div className='Matches'>
				<Header />
				<h1>Избранные матчи</h1>
				{favoriteMatches.length > 0 ? (
					<div className='favorite-match'>
						{favoriteMatches.map((match, index) => (
							<div key={index} className='match-card'>
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
								<button onClick={() => removeFromFavorites(match.fixture.id)}>
									Удалить из избранного
								</button>
							</div>
						))}
					</div>
				) : (
					<p>Нет избранных матчей</p>
				)}
			</div>
		</SCFavoritePage>
	)
}
