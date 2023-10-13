// JavaScript code to add functionality

// Dummy chat data
const dummyChatData = [
    "Chat 1",
    "Chat 2",
    // Add more chat items as needed
];

// Function to display chat list in the left pane
function displayChatList() {
    const chatList = document.querySelector(".chat-list");
    chatList.innerHTML = "";
    dummyChatData.forEach((chat) => {
        const chatItem = document.createElement("div");
        chatItem.classList.add("chat-item");
        chatItem.textContent = chat;
        chatList.appendChild(chatItem);
    });
}

// Function to handle creating a new chat
function createNewChat() {
    const newChatName = prompt("Enter the name of the new chat:");
    if (newChatName) {
        dummyChatData.push(newChatName);
        displayChatList();
    }
}

// Function to handle sending a message
function sendMessage() {
    const messageInput = document.querySelector("input[type='text']");
    const messageText = messageInput.value;
    if (messageText) {
        const messageDisplay = document.querySelector(".message-display");
        const messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messageDisplay.appendChild(messageElement);
        messageInput.value = ""; // Clear the input field
    }
}

// Event listeners                                                                                                                      
document.querySelector(".new-chat-btn").addEventListener("click", createNewChat);
document.querySelector(".send-button").addEventListener("click", sendMessage);

// Initial chat list display
displayChatList();
// Get references to the left and right panes and the toggle button
// Get references to the left and right panes and the toggle button
const leftPane = document.getElementById('leftPane');
const rightPane = document.getElementById('rightPane');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');

// Function to toggle the sidebar
function toggleSidebar() {
    if (leftPane.style.display === 'none') {
        // If the left pane is hidden, show it and update the button text
        leftPane.style.display = 'block';
        toggleSidebarBtn.textContent = 'Hide Sidebar';
        rightPane.style.width = '75%'; // Adjust the width of the right pane if needed
    } else {
        // If the left pane is visible, hide it and update the button text
        leftPane.style.display = 'none';
        toggleSidebarBtn.textContent = 'Show Sidebar';
        rightPane.style.width = '100%'; // Expand the right pane to take up the entire width
    }
}

// Add a click event listener to the toggle button
toggleSidebarBtn.addEventListener('click', toggleSidebar);