let resourcesButton = document.getElementById("resources-button");

const toggleResources = () => {
    document.body.classList.toggle("resources");
    resourcesButton.addEventListener("click",toggleResources);
}