export default function Dashboard() {
	const todos = [
	  { task: "Complete Assignment", status: "Completed", deadline: "10/11/2023, 12:00 PM" },
	  { task: "Submit Project", status: "Completed", deadline: "10/11/2023, 5:22 PM" },
	  { task: "Practice DSA", status: "Ongoing", deadline: "10/11/2023, 7:00 PM" },
	  { task: "Fix the bug", status: "Pending", deadline: "10/11/2023, 8:30 PM" },
	];
  
	return (
	  <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
		  
		  {/* Todo List */}
		  <div className="bg-black text-white rounded-2xl p-6 shadow-lg">
			<h2 className="text-2xl font-bold mb-4">Todo List</h2>
			<div className="space-y-4">
			  {todos.map((todo, idx) => (
				<div key={idx} className="flex items-center justify-between bg-gray-900 rounded-xl p-4 shadow-md">
				  <div>
					<h3 className="font-semibold">{todo.task}</h3>
					<p className="text-gray-400 text-sm">{todo.deadline}</p>
				  </div>
				  <div className="flex items-center gap-3">
					<span className={`px-3 py-1 rounded-full text-xs font-bold 
					  ${todo.status === "Completed" ? "bg-green-600" : 
						todo.status === "Ongoing" ? "bg-yellow-500" : "bg-red-600"}`}>
					  {todo.status}
					</span>
					<button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">Edit</button>
					<button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg">Delete</button>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
  
		  {/* Add Task */}
		  <div className="bg-black text-white rounded-2xl p-6 shadow-lg">
			<h2 className="text-2xl font-bold mb-4">Add Task</h2>
			<form className="space-y-4">
			  <input type="text" placeholder="Task" className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-purple-500 focus:outline-none" />
			  <input type="text" placeholder="Status" className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-purple-500 focus:outline-none" />
			  <input type="datetime-local" className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-purple-500 focus:outline-none" />
			  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-2 rounded-lg font-semibold">Add Task</button>
			</form>
		  </div>
  
		</div>
	  </div>
	);
  }
  