"use strict";

// 1. Select HTML elements
const searchInput = document.getElementById("searchInput");
const userList = document.getElementById("userList");
const status = document.getElementById("status");
const reloadButton = document.getElementById("reloadButton");

// 2. Store all users
let users = [];

// 3. Fetch users from the public REST API
async function fetchUsers() {
  status.classList.remove("error");
  status.textContent = "Loading users...";
  userList.replaceChildren();
  reloadButton.disabled = true;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Check HTTP response status
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    // Convert JSON into JavaScript data
    const data = await response.json();

    // Check the received data
    if (!Array.isArray(data)) {
      throw new Error("Unexpected API response");
    }

    users = data;

    // Display the fetched users
    displayUsers(users);

  } catch (error) {
    users = [];
    userList.replaceChildren();

    status.textContent =
      "Unable to load users. Check your internet and try again.";

    status.classList.add("error");

    console.error("Error fetching users:", error);

  } finally {
    reloadButton.disabled = false;
  }
}

// 4. Display users on the webpage
function displayUsers(userData) {
  userList.replaceChildren();
  status.classList.remove("error");

  if (userData.length === 0) {
    status.textContent = "No users found.";
    return;
  }

  status.textContent =
    "Showing " + userData.length + " user(s).";

  userData.forEach(function(user) {
    // Create user card
    const card = document.createElement("article");
    card.className = "user-card";

    // User name
    const name = document.createElement("h2");
    name.textContent = user.name;

    // User email
    const email = document.createElement("p");
    const emailLabel = document.createElement("strong");
    emailLabel.textContent = "Email: ";
    email.append(
      emailLabel,
      document.createTextNode(user.email)
    );

    // User city
    const city = document.createElement("p");
    const cityLabel = document.createElement("strong");
    cityLabel.textContent = "City: ";
    city.append(
      cityLabel,
      document.createTextNode(user.address.city)
    );

    // User company
    const company = document.createElement("p");
    const companyLabel = document.createElement("strong");
    companyLabel.textContent = "Company: ";
    company.append(
      companyLabel,
      document.createTextNode(user.company.name)
    );

    // Add details to card
    card.append(name, email, city, company);

    // Add card to webpage
    userList.appendChild(card);
  });
}

// 5. Search users by name
function searchUsers() {
  const searchText = searchInput.value
    .trim()
    .toLowerCase();

  const filteredUsers = users.filter(function(user) {
    return user.name.toLowerCase().includes(searchText);
  });

  displayUsers(filteredUsers);
}

// 6. Listen for search input
searchInput.addEventListener("input", searchUsers);

// 7. Reload users when button is clicked
reloadButton.addEventListener("click", fetchUsers);

// 8. Fetch users when the app starts
fetchUsers();
