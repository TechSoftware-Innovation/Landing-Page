export class Toast {
    message;
    status;
    time;
    toast;

    constructor(message, status, time) {
        this.message = message;
        this.status = status;
        this.time = time;
    }

    build() {
        this.toast = document.createElement('div');
        this.addClassStatus();
        this.addMessage();
        this.addTime();
        this.addCloseButton();
    }

    addClassStatus() {
        this.toast.classList.add('toast');
        this.toast.classList.add(`toast--${this.status}`);
    }

    addMessage() {
        const messageElement = document.createElement('p');
        messageElement.textContent = this.message;
        this.toast.appendChild(messageElement);
    }

    addTime() {
        setTimeout(() => {
            this.toast.remove();
        }, this.time);
    }

    addCloseButton() {
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('toast__close');
        closeButton.addEventListener('click', () => {
            this.toast.remove();
        });
        this.toast.appendChild(closeButton);
    }

    show() {
        this.build();
        document.body.appendChild(this.toast);
    }
}