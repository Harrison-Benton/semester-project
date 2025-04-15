document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const nameInput = document.getElementById("name");
    const categorySelect = document.getElementById("category");
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
  
    postForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = nameInput.value.trim();
      const category = categorySelect.value;
      const title = titleInput.value.trim();
      const content = contentInput.value.trim();
  
      if (!name || !category || !title || !content) {
        alert("Please fill out all fields.");
        return;
      }
  
      const threadId = category.toLowerCase() + "Thread";
      const threadContainer = document.getElementById(threadId);
  
      const newPost = document.createElement("div");
      newPost.className = "post";
      newPost.innerHTML = `
        <strong>${name}</strong> - <em>${category}</em><br />
        <strong>${title}</strong>
        <p>${content}</p>
      `;
  
      threadContainer.appendChild(newPost);
  
      // Reset form
      postForm.reset();
    });
  });
  