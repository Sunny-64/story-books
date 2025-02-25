import { useState } from "react";
import { chatList, chatMessages } from "./data";
import { TextInput } from "@/components";
import { X } from "lucide-react";

const Chat: React.FC = () => {
    const [selectedChat, setSelectedChat] = useState<keyof typeof chatMessages | null>(null);

    const currentUserId = "user_1";

    return (
        <main className="grid grid-cols-3 mt-5 max-h-[75vh] border">

            <aside className="p-5 col-span-1 border-r">
                <h1 className="text-xl font-bold px-4">All Chats</h1>
                {chatList.map((chat) => (
                    <div
                        key={chat.id}
                        className={`${selectedChat === chat.id ? "bg-gray-100" : "bg-transparent"} my-3 px-4 py-2 cursor-pointer rounded-lg`}
                        onClick={() => setSelectedChat(chat.id as keyof typeof chatMessages)}
                    >
                        <h1 className="font-semibold text-md">{chat.name}</h1>
                        <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                    </div>
                ))}
            </aside>

            <div className="col-span-2 flex flex-col min-h-[75vh]">
                {selectedChat ? (
                    <div className="h-full flex flex-col">

                        <div className="relative p-3 border-b w-full flex items-center justify-between">
                            <h1 className="font-bold text-lg">
                                {chatList.find((chat) => chat.id === selectedChat)?.name}
                            </h1>
                            <X
                                className="cursor-pointer"
                                size={20}
                                onClick={() => setSelectedChat(null)}
                            />
                        </div>

                        <div className="p-4 flex flex-col space-y-3 overflow-y-auto flex-grow bg-gray-100">
                            {chatMessages[selectedChat].map((message) => (
                                <div
                                    key={message.id}
                                    className={`max-w-[60%] py-3 px-4 rounded-full ${message.senderId === currentUserId ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}
                                >
                                    <p className="text-sm">{message.message}</p>
                                </div>
                            ))}
                        </div>

                        <form className="w-full grid grid-cols-12 px-5 py-3 border-t bg-gray-100">
                            <TextInput
                                name="send message"
                                placeholder="Type your message..."
                                customStyles="py-2 px-4 rounded-full w-full"
                                containerStyles="col-span-10"
                            />
                            <button
                                type="submit"
                                className="ml-2 bg-blue-500 col-span-2 text-white px-4 py-2 rounded-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                ) : (
                    <p className="p-5 text-gray-500">No Chats Selected</p>
                )}
            </div>
        </main>
    );
};

export default Chat;