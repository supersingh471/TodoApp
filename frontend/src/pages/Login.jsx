import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"

export const Login = () => {
	return <div className="bg-slate-300 h-screen flex justify-center">
		<div className="flex flex-col justify-center text-white">
		<div className="text-center w-100 h-100 bg-black rounded-lg">
		<Heading label={"Login"}/>
		<InputBox placeholder={"Username"}/>
		<InputBox placeholder={"Password"}/>
		<div className="px-20 m-10">
		<Button label={"Login"}/>
		</div>
		</div>
		</div>
	</div>
}