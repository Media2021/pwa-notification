
// Define the requestPermission function here
function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
            setInterval(() => {
                showMessage("May I Interrupt you ????");
            }, 3000);
        }
    });
}

// Function to display a message
function showMessage(message) {
    const notification = new Notification("Notification", {
        body: message,
        icon: "./images/push-icon.png", // Provide the path to your notification icon
    });
}

// Call the requestPermission function
requestPermission();
