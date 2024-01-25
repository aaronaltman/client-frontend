import { createTodo } from "@/actions/actions";
import React from "react";

export default function TodoCreationForm() {
  return (
    <div>
      <form action={createTodo}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" placeholder="Title" />
        <label htmlFor="content">Content</label>
        <input id="content" name="content" type="text" placeholder="Content" />
        <label htmlFor="priority">Priority</label>
        <input
          id="priority"
          name="priority"
          type="text"
          placeholder="Priority"
        />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}
