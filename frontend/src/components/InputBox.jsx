
export function InputBox({onChange, placeholder}) {
	return <div className="m-4 text-white-500">
		<input onChange={onChange} placeholder={placeholder} className="border-2 border-indigo-500 rounded-lg p-1.5 w-full placeholder:text-white"/>
	</div>
}