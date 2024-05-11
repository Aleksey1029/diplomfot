import styled from 'styled-components'

export const SCFavoritePage = styled.div`
	// Общие стили для главной страницы
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: #f0f0f0;
	color: #333;
	font-family: 'Arial', sans-serif;

	// Стили для блока с матчами
	.Matches {
		width: 100%;
		max-width: 1200px;
		margin-top: 20px;

		h1 {
			padding: 10px;
			font-size: 28px;
			margin-bottom: 20px;
			color: #2e6bff;
			text-align: center;
			font-family: 'Arial', sans-serif;
		}

		.favorite-match {
			background-color: #fff;
			border-radius: 12px;
			padding: 20px;
			margin-bottom: 20px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			transition: all 0.3s ease;
			/* cursor: pointer; */

			&:hover {
				transform: translateY(-3px);
				box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
			}

			.buton {
				border-radius: 5px;
				font-size: 15px;
			}

			.team {
				display: flex;
				align-items: center;
				gap: 20px;
				padding: 10px;
				border-radius: 8px;
				cursor: pointer;
				transition: background-color 0.3s ease;

				img {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					transition: transform 0.3s ease;
				}

				p {
					font-size: 18px;
					font-weight: bold;
					color: #000;
					padding: 8px 12px;
					border-radius: 20px;
					border: 1px solid gray;
					font-family: 'Arial', sans-serif;
					transition: all 0.3s ease; /* Добавляем transition */
				}

				span {
					font-size: 18px;
					font-weight: bold;
					color: white;
					padding: 8px 12px;
					border-radius: 20px;
					border: 1px solid gray;
					font-family: 'Arial', sans-serif;
					transition: all 0.3s ease; /* Добавляем transition */
				}

				p:hover {
					color: white;
					background-color: #2e6bff;
					border: none;
				}

				span:hover {
					color: white;
				}

				&:hover {
					background-color: #f5f5f5;
				}
			}

			.details {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 5px;
				padding: 10px;
				border-radius: 8px;

				p {
					font-size: 16px;
					color: #666;
					font-family: 'Arial', sans-serif;
				}
			}
		}
	}

	.under_text {
		color: black;
		font-size: 26px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 30px 0px;
	}
	
	
	
	
	.match-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	// Медиа-запросы для адаптивности
	@media (max-width: 768px) {
		padding: 10px;

		.Matches {
			.match-card {
				flex-direction: column;
				align-items: flex-start;

				.team {
					margin-bottom: 10px;

					img {
						width: 40px;
						height: 40px;
					}

					p,
					span {
						font-size: 16px;
					}
				}
			}
		}
	}

	@media (max-width: 1084px) {
		.goals-1 {
			display: none;
		}
	}

	@media (min-width: 1085px) {
		.goals-2 {
			display: none;
		}
	}
`
