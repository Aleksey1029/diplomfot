import { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { changeUser } from '../../store/slices/userSlice'
import { useState, useEffect } from 'react'

export const ProfileHeader = () => {
	const user = useSelector((state: RootState) => state.userSlice.user)
	const dispatch = useDispatch()
	const [loggedOut, setLoggedOut] = useState(false)

	// При загрузке компонента проверяем наличие пользователя в localStorage
	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			dispatch(changeUser(JSON.parse(storedUser)))
		}
	}, [dispatch])

	const handleLogout = () => {
		localStorage.removeItem('user')
		dispatch(changeUser(null))
		setLoggedOut(true)
		window.location.href = '/' // Перенаправляем пользователя на главную страницу
	}

	return (
		<div className='ProfileHeader'>
			<div className='user__block'>
				<img src='./img/users/balle.jpg' alt='alex' />
				<div className='user__description'>
					<h1 className='user__name'>{user?.name}</h1>
					<div className='user__info'></div>
				</div>
				<div className='buttons-wrapper'>
					<button className='primary' onClick={handleLogout}>
						Выйти с аккаунта
					</button>
				</div>
			</div>
			<div className='profile-background'></div>
		</div>
	)
}
