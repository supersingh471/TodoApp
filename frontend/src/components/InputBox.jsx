
export function InputBox({label, onChange, placeholder}) {
	return <div className="flex">
		<div>{label}</div>
		<input onChange={onChange} placeholder={placeholder} className="border rounded "/>
	</div>
}