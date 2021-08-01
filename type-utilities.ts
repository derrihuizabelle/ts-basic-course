type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// readonly

const todo: Readonly<Todo> = {
  title: "Assistir Dark",
  description: "talvez eu goste",
  completed: false
};

// you cant do todo.completed = true
// so you can do
// Partial allows you to update just one propertie, and use the same type. Like everything is optional.

function updateTodo (todo: Todo, fieldsToUptade: Partial<Todo>) {
  return { ...todo, ...fieldsToUptade };
}

const todo2: Todo = updateTodo(todo, { completed: true });
console.log("todo2", todo2);


// pick: gets the propeties we want

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "mario",
  completed: true
};


// omit: gets the only ones you didnt pass

type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
  title: "mario",
  completed: true
};