"use client";

import TodoCreationForm from "@/components/todo-creation-form";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string | null;
  content: string | null;
  created_at: string | null;
  priority: string | null;
};

export default function Home() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  useEffect(() => {
    // Async function to fetch Todo items
    const fetchTodos = async () => {
      try {
        // Ensure the URL is correct and points to your Django backend
        const res = await fetch(
          "http://127.0.0.1:8000/api/todo/todos/?format=json"
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setTodoItems(data);
      } catch (error) {
        console.error("Failed to fetch Todo items:", error);
        // Handle errors or set error state here
      }
    };

    // Call the async function
    fetchTodos();
  }, []);

  return (
    <>
      <main>
        <h1>Welcome Home Friends</h1>
        {todoItems.length > 0 ? (
          todoItems.map((item: Todo) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))
        ) : (
          <p>No Todo items found.</p>
        )}
      </main>
      <section>
        <TodoCreationForm />
      </section>
    </>
  );
}
