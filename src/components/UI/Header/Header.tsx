import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
	return (
		<header className='Header'>
			<div className='Header__logo'>
				<Link to={'/main'}>
					{/* <svg
						id='tehnikum-logo'
						viewBox='0 0 143 23'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M13.1657 1.07477H0V4.08411H5.26629V21.9252H8.10198V4.08411H13.1657V1.07477Z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M24.0021 23C28.516 23 32.3852 20.0712 34.0145 15.9065H30.3634C29.0072 18.1069 26.6646 19.5607 24.0021 19.5607C20.1157 19.5607 16.9109 16.4631 16.4606 12.4673H34.8385V11.0701C34.8385 10.9925 34.8326 10.9163 34.8211 10.8422C34.4998 4.79698 29.7789 0 24.0021 0C18.0173 0 13.1657 5.14873 13.1657 11.5C13.1657 17.8513 18.0173 23 24.0021 23ZM31.4018 9.6729C30.6218 6.10121 27.6049 3.43925 24.0021 3.43925C20.3993 3.43925 17.3824 6.10121 16.6025 9.6729H31.4018Z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M36.864 21.9252V1.07477H39.6997V9.24299H51.6501V1.07477H54.4858V21.9252H51.6501V12.2523H39.6997V21.9252H36.864Z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M57.119 21.9252V1.07477H65.221L66.7808 18.9159H69.272V1.07477H72.3102V21.9252H64.0057L62.4458 4.08411H60.1572V21.9252H57.119Z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M89.2856 11.5L104.11 4.72897V0.859813L88.3116 8.07571V1.07477H85.2734V21.9252H88.3116V14.9243L104.11 22.1402V18.271L89.2856 11.5Z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M106.744 21.9252V1.07477H109.782V18.9159H116.871V1.07477H119.909V21.9252H106.744Z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M122.542 21.9252V1.07477H130.037L131.943 18.9159H133.802L135.708 1.07477H143V21.9252H139.962V3.65421H138.471L136.518 21.9252H129.227L127.274 3.65421H125.581V21.9252H122.542Z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M77.3739 18.9159V4.08411H74.5382V1.07477H82.8428V4.08411H80.2096V18.9159H82.8428V21.9252H74.5382V18.9159H77.3739Z'
						/>
					</svg> */}
					<img
						className='Logo_football'
						src='https://static.liveresult.ru/themes/adaptive/images/logo_h.svg'
						alt='logo_diplom'
					/>
				</Link>
			</div>
			<div className='text-center'>
				<span>
					Футбол онлайн — результаты и счета матчей, видео голов и трансляции
				</span>
			</div>
			<div className='input-wrapper'>
				<Link to={'/Favorite'}>
					<span>Избранное</span>
				</Link>
			</div>
			<div className='profile-wrapper'>
				<Link to={'/profile'}>
					<img
						className='_no-select'
						src='./img/users/Frame1.png'
						alt='Profile'
					/>
					<span>Кабинет</span>
				</Link>
			</div>
		</header>
	)
}
