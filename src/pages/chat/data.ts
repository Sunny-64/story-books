export const chatList = [
    { id: "chat_1", name: "Alice Johnson", lastMessage: "Not yet, but I'm almost done.", timestamp: "10:10 AM" },
    { id: "chat_2", name: "Bob Williams", lastMessage: "See you tomorrow!", timestamp: "9:30 AM" },
    { id: "chat_3", name: "Charlie Brown", lastMessage: "Let’s meet at 5 PM.", timestamp: "8:15 AM" },
];

export const chatMessages = {
    chat_1: [
        { id: 1, sender: "John Doe", message: "Hey, how are you?", timestamp: "10:00 AM", senderId: "user_1" },
        { id: 2, sender: "Alice Johnson", message: "I'm good! What about you?", timestamp: "10:02 AM", senderId: "user_2" },
        { id: 3, sender: "John Doe", message: "Have you completed the project?", timestamp: "10:05 AM", senderId: "user_1" },
        { id: 4, sender: "Alice Johnson", message: "Not yet, but I'm almost done.", timestamp: "10:10 AM", senderId: "user_2" },
    ],
    chat_2: [
        { id: 1, sender: "John Doe", message: "Hey Bob, what's up?", timestamp: "9:00 AM", senderId: "user_1" },
        { id: 2, sender: "Bob Williams", message: "Not much, just working.", timestamp: "9:10 AM", senderId: "user_3" },
        { id: 3, sender: "John Doe", message: "Wanna catch up later?", timestamp: "9:20 AM", senderId: "user_1" },
        { id: 4, sender: "Bob Williams", message: "Sure! See you tomorrow!", timestamp: "9:30 AM", senderId: "user_3" },
    ],
    chat_3: [
        { id: 1, sender: "John Doe", message: "Hey Charlie, any plans today?", timestamp: "8:00 AM", senderId: "user_1" },
        { id: 2, sender: "Charlie Brown", message: "Not really, what’s up?", timestamp: "8:05 AM", senderId: "user_4" },
        { id: 3, sender: "John Doe", message: "Let’s meet at 5 PM.", timestamp: "8:15 AM", senderId: "user_1" },
    ],
};