import { InputBox } from "../components/InputBox"

export default function Dashboard() {
	const todos = [
	  { task: "Complete Assignment", status: "Completed", deadline: "10/11/2023, 12:00 PM" },
	  { task: "Submit Project", status: "Completed", deadline: "10/11/2023, 5:22 PM" },
	  { task: "Practice DSA", status: "Pending", deadline: "10/11/2023, 7:00 PM" },
	  { task: "Fix the bug", status: "Pending", deadline: "10/11/2023, 8:30 PM" },
	  
	];
  
	return (
		
	  <div className="flex bg-gray-200 justify-center itmes-center h-screen p-18">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-135">
			<div className="bg-black w-full h-full rounded-xl p-3">
				<div className="text-white w-full text-4xl font-bold m-4">
				<h2>Todo List</h2>
				</div>
				<div className="space-y-4">
				{todos.map((todo, id) => (
					<div key={id} className="flex bg-gray-900 py-1.5 px-2 mr-5 ml-5 rounded-xl text-white">
						<div className="flex flex-col w-full p-2 h-20 font-semibold text-lg">
							<h4>{todo.task}</h4>
						<span className="text-gray-500">{todo.deadline}</span>
						</div>
						<div className="flex items-center mr-4 gap-5">
							<span className={`py-1 px-3 rounded-full text-md font-bold
								${todo.status === "Completed" ? "bg-green-600" : "bg-red-600"}`}>
								{todo.status}
							</span>	
							<button className="bg-blue-600 py-2 px-5 rounded-xl text-lg">Edit</button>
							<button className="bg-red-600 py-2 px-5 rounded-xl text-lg">Delete</button>
						</div>
					</div> 
				))}
				</div>
			</div>

				
			<div className="flex flex-col rounded-xl bg-black">
				<div className="m-4 text-4xl font-bold text-white"><h2>Add Task</h2></div>
				<div className="mr-2 ml-2 ">
					<InputBox placeholder={"Task"}/>
				</div>
			</div>
		</div>
	  </div>
	);
  }
  