export async function createTodo(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const priority = formData.get("priority");

  const res = await fetch("http://127.0.0.1:8000/api/todo/todos/?format=json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      priority,
    }),
  });
  const data = await res.json();
  return data;
}
