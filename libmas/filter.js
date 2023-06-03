const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#paginated-list .item-card");
// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
       
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            console.log(card.dataset.name);
            card.classList.replace("hide", "show");
        }
        else{
        card.classList.replace("show","hide");}
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));