export const fetchJournalTasks = async () => {
  const response = await fetch("/.netlify/functions/server/api/tasks");
  return await response.json();
};

export const addTask = async (data) => {
  const response = await fetch("/.netlify/functions/server/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: data }),
  });
  return await response.json();
};

export const removeTask = async (id) => {
  const response = await fetch("/.netlify/functions/server/api/tasks", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ taskId: id }),
  });
  return await response.json();
};

export const editTask = async (id) => {
  const response = await fetch("/.netlify/functions/server/api/tasks", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ taskId: id }),
  });

  return await response.json();
};
