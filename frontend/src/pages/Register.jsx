import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"

export const Register = () => {
	return <div className="bg-slate-300 h-screen flex justify-center">
		<div className="flex flex-col justify-center text-white">
		<div className="bg-black w-95 rounded-lg h-150 text-center p-2">
		<div className="mt-8 mb-20"><Heading label={"Register"}/></div>
		<InputBox placeholder={"Full Name"}/>
		<InputBox placeholder={"E-mail"}/>
		<InputBox placeholder={"Phone"}/>
		<InputBox placeholder={"Password"}/>
		<InputBox placeholder={"Confirm Password"}/>
		</div>
	</div>
	</div>
}