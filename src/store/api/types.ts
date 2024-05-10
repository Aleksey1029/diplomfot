import { Key } from 'react'

export interface ICountries {
	name: string
	code: string
	flag: string
}

export interface IGetCountriesResponse {
	results: number
	response: ICountries[]
}

export interface MatchItem {
	id: Key | null | undefined
	fixture: {
		id: number
		referee: string
		timezone: string
		date: string
		venue: {
			id: number
			name: string
			city: string
		}
		status: {
			long: string
			short: string
		}
	}
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string
		season: number
		round: string
	}
	teams: {
		home: {
			id: number
			name: string
			winner: boolean
			logo: string
		}
		away: {
			id: number
			name: string
			winner: boolean
			logo: string
		}
	}
	goals: {
		home: number
		away: number
	}
	score: {
		fulltime: {
			home: number
			away: number
		}
	}
}

export interface IGetMatchesResponse {
	results: number
	response: MatchItem[]
}

export interface IRegisterUserPayload {
	name: string
	email: string
	phone_number: string
	password: string
	user_city: string
}

export interface IRegisterUserResponse {
	status: number
	user_id: number
}

export interface ILoginUserPayload {
	email: string
	password: string
}

export interface ILoginUserResponse extends IRegisterUserResponse {}

export interface IUserResponse {
	status: number
	message: {
		mail: string
		phone_number: string
		user_id: number
		name: string
		reg_date: string
		city: string
	}
}

export interface IUpdateUserInfoResponse extends IUpdatePostPayload {}
export interface IUpdateUserInfoPayload {
	user_id: number
	change_info: IRegisterUserPayload
	new_data: string
}

export interface IGetPostResponse {
	status: number
	message: {
		main_text: string
		user_id: number
		id: number
		reg_date: string
		user_fk: {
			email: string
			id: number
			phone_number: string
			password: string
			name: string
			user_city: string
			reg_date: string
		}
		photos: [
			{
				photo_id: number
				photo_url: string
			}
		]
		comments: string[]
	}
}

export interface IPublishPostResponse {
	status: number
	post_id: number
}

export interface IPublishPostPayload {
	user_id: number
	main_text: string
}

export interface IUpdatePostResponse {
	post_id: number
	new_text: string
}

export interface IUpdatePostPayload {
	status: number
	message: string
}

export interface IDeletePostResponse extends IPublishPostPayload {}

//?-------------------------------TYPES FOR COMMENTS API------------------------?//

export interface ICommentsGetResponse {
	status: number
	message: []
}

export interface ICommentsPostResponse extends ICommentsPostPayload {}
export interface ICommentsPostPayload {
	post_id: number
	user_id: number
	text: string
}

export interface ICommentsUpdateResponse extends ICommentsPostPayload {}
export interface ICommentsUpdatePayload {
	comment_id: number
	new_comment_text: string
}

export interface ICommentsDeleteResponse extends ICommentsPostPayload {}
