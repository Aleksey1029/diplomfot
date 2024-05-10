import { Link, useNavigate } from 'react-router-dom'
import { AppButton } from '../../components/UI/AppButton/AppButton'
import { AppInput } from '../../components/UI/AppInput/AppInput'
import { LoginWith } from '../../components/LoginWith/LoginWith'
import { AppHeading } from '../../components/Typography/AppHeading/AppHeading'
import { SCLoginPage } from './LoginPage.styled'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { changeUser } from '../../store/slices/userSlice'
import { useLoginUserMutation } from '../../store/api/userApi'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'

interface ILoginForm {
	useremail: string
	userpassword: string
}

const loginFormSchema = yup.object({
	useremail: yup.string().required('Обязательное поле'),
	userpassword: yup
		.string()
		.required('Введите пароль')
		.min(8, 'Не менее 8 символов'),
})

const mockUser = {
	mail: 'alex@gmail.com',
	phone_number: '123456789',
	user_id: 1,
	name: 'Alex',
	reg_data: new Date().toISOString(),
	city: 'Tashkent',
}

export const LoginPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginFormSchema),
		defaultValues: { useremail: '', userpassword: '' },
	})

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((state: RootState) => state.userSlice.user)

	const onLoginFormSubmit: SubmitHandler<ILoginForm> = data => {
		if (data.useremail === mockUser.mail && data.userpassword === '123456789') {
			dispatch(changeUser(mockUser))
			localStorage.setItem('user', JSON.stringify(mockUser))
			navigate('/main')
		} else {
			alert('Ошибка, попробуй еще раз, alex@gmail.com 123456789')
		}
	}

	return (
		<SCLoginPage>
			<AppHeading headingText={'Аутентификация'} headingType={'h1'} />
			<form onSubmit={handleSubmit(onLoginFormSubmit)}>
				<Controller
					name='useremail'
					control={control}
					render={({ field }) => (
						<AppInput
							isError={errors.useremail ? true : false}
							errorMessage={errors.useremail?.message}
							type={'email'}
							placeholder={'Email или имя пользователя'}
							{...field}
						/>
					)}
				/>

				<Controller
					name='userpassword'
					control={control}
					render={({ field }) => (
						<AppInput
							isError={errors.userpassword ? true : false}
							errorMessage={errors.userpassword?.message}
							type={'password'}
							placeholder={'Пароль'}
							{...field}
						/>
					)}
				/>

				<AppButton buttonText={'Войти'} type={'submit'} />
			</form>
			<div className='RememberAdmin'>
				<label>
					<AppInput type={'checkbox'} placeholder={'Запомнить'} />
					Запомнить
				</label>
				<Link to='#'>Забыли пароль?</Link>
			</div>
			<div className='registration'>
				<span>
					У вас нет аккаунта? <Link to='/registration'>Зарегистрироваться</Link>
				</span>
				<p>Войти с помощью</p>
				<LoginWith />
			</div>
		</SCLoginPage>
	)
}
