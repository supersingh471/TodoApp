import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"

export const Register = () => {
	return <div className="bg-slate-300 h-screen flex justify-center">
		<div className="flex flex-col justify-center text-white">
		<div className="bg-black w-102 rounded-lg h-155 text-center p-2">
		<Heading label={"Register"}/>
		<InputBox placeholder={"Full Name"}/>
		<InputBox placeholder={"E-mail"}/>
		<InputBox placeholder={"Phone"}/>
		<InputBox placeholder={"Password"}/>
		<InputBox placeholder={"Confirm Password"}/>
		<div className="mt-16 mr-4 ml-4 flex flex-col space-y-4">
		<Button label={"Register"}/>
		<Button label={"Have account? Sign In"}/>
		</div>
		</div>
	</div>
	</div>
}