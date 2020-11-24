const deleteButtonListener = (e) => {
  const button = e.currentTarget;
  const id = button.dataset.id;

  fetch(`./api/v1/item/${id}`, {
    method: "DELETE",
  }).then(() => fetchList());
};

const renderList = (todoList) => {
  const todoContainer = document.querySelector("#list");
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) =>
    button.removeEventListener("click", deleteButtonListener)
  );
  todoContainer.innerHTML = "";

  for (const item of todoList) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    const text = new Text(item.title);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除する";
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.id = item.id;
    deleteButton.addEventListener("click", deleteButtonListener);

    label.appendChild(checkbox);
    label.appendChild(text);
    label.appendChild(deleteButton);

    li.appendChild(label);

    todoContainer.appendChild(li);
  }
};

// GET
const fetchList = async () => {
  return fetch("./api/v1/list")
    .then((res) => res.json())
    .then((list) => {
      renderList(list);
    });
};

// POST
const postItem = async (item) => {
  const body = new FormData();
  body.append("title", item.title);

  return fetch("./api/v1/add", {
    method: "POST",
    body,
  }).then((res) => {
    res.json();
  });
};

const addTitleInput = document.querySelector("#list-title");
const addTitleButton = document.querySelector("#list-add");

addTitleButton.addEventListener("click", (e) => {
  const title = addTitleInput.value;
  if (title) {
    postItem({ title }).then((item) => fetchList());
  }
});

fetchList();
