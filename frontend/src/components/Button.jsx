export function Button({onClick, label}){
	return <> 
		<button onClick={onClick} className="bg-purple-800 w-full h-10 rounded-4xl">{label}</button>
	</>
}