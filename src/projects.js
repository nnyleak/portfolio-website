document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("projects-container");

  // Fetch the projects.json file
  fetch("data/projects.json")
    .then((response) => response.json()) // convert response to json
    .then((projects) => {
      projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
                    <a href="${project.link}">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="card-content">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="tags">
                                ${project.tags
                                  .map(
                                    (tag) => `<span class="tag">${tag}</span>`
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </a>
                `;

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading projects:", error));
});
