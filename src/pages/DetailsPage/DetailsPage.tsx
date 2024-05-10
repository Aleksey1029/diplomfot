import React, { useState } from 'react'
import { Header } from '../../components/UI/Header/Header'
import { SCDetailsPage } from './DetailsPage.styled'

export const DetailsPage = () => {
	return (
		<SCDetailsPage>
			<div>
				<Header />
				<h1>Details for area with ID:</h1>
			</div>
		</SCDetailsPage>
	)
}
