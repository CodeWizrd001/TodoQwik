import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { useStore } from "@builder.io/qwik";

// Import Models
import Todo from "~/models/Todo";

// Import Components
import { Card } from "~/components/card/card";


export default component$(() => {
  const cardData : Todo = useStore<Todo>({
    title : "temp",
    description : "Temporary Todo",
    createdBy : "Admin",
    completed : false
  });

  const completedCard : Todo = useStore<Todo>({
    title : "test",
    description : "Test Todo",
    createdBy : "Admin",
    completed : true
  });

  return (
    <div>
      <h1>
        Todo App <span class="lightning">⚡️</span>
      </h1>
      <Card todo={cardData} />
      <Card todo={completedCard} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
