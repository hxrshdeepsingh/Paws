import Layout from '../../components/layout'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'

export default function Signin() {
	return (
		<Layout title="Sign-in">
			<div className="mx-auto w-80 text-center py-6">
				<form>
					<Input
						type="username"
						label="Username"
						placeholder="Enter your username"
					/>
					<Input type="email" label="Email" placeholder="Enter your email" />
					<Input
						type="password"
						label="Passsword"
						placeholder="Enter your password"
					/>
					<Button type="submit">Submit</Button>
				</form>
			</div>
		</Layout>
	)
}
