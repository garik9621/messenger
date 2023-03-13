import { io } from "socket.io-client";

class MessengerSocketController {
    private socket: any;

    constructor() {
        // @ts-ignore
        this.socket = io('http://localhost:3001');

        this.initEventListening();
    }

    sendMessage(text: string) {
        this.socket?.emit('chat message', text)
    }

    initEventListening() {
        this.socket?.on('', () => {})
    }
}

const messengerSocketController = new MessengerSocketController();

export { messengerSocketController };