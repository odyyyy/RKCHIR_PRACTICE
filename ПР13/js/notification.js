let isNotificationDelay = false;

function add_new_notification() {
    let notifications_counter = document.querySelector(".badge").innerHTML;

    document.querySelector(".badge").innerHTML = Number(notifications_counter) + 1;

    let notification_articles_list = document.querySelector(".notification-list");

    let notification_articles_element = document.createElement("li");
    let new_article_notification = document.createElement("a");
    new_article_notification.innerHTML = `Новая статья №${parseInt(notifications_counter) + 1}`;
    let notification_close_button = document.createElement("button");
    notification_close_button.innerHTML = "❌";
    notification_close_button.className = "notif-close-button"
    

    new_article_notification.appendChild(notification_close_button);
    notification_articles_element.appendChild(new_article_notification);
    notification_articles_list.appendChild(notification_articles_element);
}

function delayDecorator(func) {
    return function() {
        if (!isNotificationDelay) {
            func.apply(this, arguments);
        }
    };
}

const delayedAddNotification = delayDecorator(add_new_notification);

document.querySelector(".notification-button").addEventListener("click", (event) => {
    if (event.target.className != "notif-close-button"){
        isNotificationDelay = true;
        setTimeout(() => {
            isNotificationDelay = false;
        }, 10000);
    }
    else{
        let notification_to_remove = event.target.parentNode;
        notification_to_remove.remove();
    }
});

setInterval(delayedAddNotification, 3000);


// Функционал для закрытия уведемлений

function closeNotification(){

}


