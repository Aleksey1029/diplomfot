import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/UI/Header/Header'
import { SCMainPage } from './MainPage.styled'
import { useGetallAreasByIdQuery } from '../../store/api/bigAreasApi'

const MatchCard = ({ match }: MatchResult) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const addToFavorites = (match) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []

        const existingMatch = favorites.find(
            favoriteMatch => favoriteMatch.fixture.id === match.fixture.id
        )

        if (!existingMatch) {
            favorites.push(match)
            localStorage.setItem('favorites', JSON.stringify(favorites))
            console.log('Матч добавлен в избранное:', match)
        } else {
            console.log('Матч уже находится в избранном:', match)
        }
    }

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite)
        addToFavorites(match)
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
            <button className='button' onClick={handleToggleFavorite}>
                {isFavorite ? 'Добавлено ✔' : 'Добавить в избранное'}
            </button>
            <div>
                <Link to={`/match/${match.fixture.id}`}>
                    <button className='detail'>Подробнее</button>
                </Link>
            </div>
        </div>
    )
}

export const MainPage = () => {
    const { data } = useGetallAreasByIdQuery('33-34')

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
