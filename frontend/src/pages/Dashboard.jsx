import { Heading } from "../components/Heading"

export default function Dashboard() {
	const todos = [
	  { task: "Complete Assignment", status: "Completed", deadline: "10/11/2023, 12:00 PM" },
	  { task: "Submit Project", status: "Completed", deadline: "10/11/2023, 5:22 PM" },
	  { task: "Practice DSA", status: "Ongoing", deadline: "10/11/2023, 7:00 PM" },
	  { task: "Fix the bug", status: "Pending", deadline: "10/11/2023, 8:30 PM" },
	  
	];
  
	return (
	  <div className="flex bg-gray-200 justify-center itmes-center h-screen p-25">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-120">
			<div className="bg-black border w-full h-full rounded-xl">
				<div className="text-white w-full text-2xl font-bold m-4">
				<h2>Todo List</h2>
				</div>
				<div className="space-y-4">
				{todos.map((todo, id) => (
					<div key={id} className="flex justify-center bg-gray-400 m-4 rounded-xl">
						<div className="flex flex-col border m-4">
							<h4 className="text-sm">{todo.task}</h4>
						<span className="text-sm">{todo.deadline}</span>
						</div>
					</div>
				))}
				</div>
			</div>

			<div className="bg-purple-500 w-full h-full">
				
			</div>
		</div>
	  </div>
	);
  }
  