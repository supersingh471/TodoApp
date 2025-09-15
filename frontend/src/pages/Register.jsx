import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"

export const Register = () => {
	return <div className="flex justify center h-screen bg-slate-300 ">
		<div className="flex align-center"></div>
		<Heading label={"Register"}/>
		<div>
			<InputBox placeholder={"Bruce"} label={"firstname"}/>
		</div>
	</div>
}