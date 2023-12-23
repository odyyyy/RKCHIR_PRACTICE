function showNotification(option) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = option;

    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 1500);
}

const option = "уведомление!";

showNotification(option);