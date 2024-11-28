import { useEffect, useRef, useState } from "react"
import HTMLReactParser from "html-react-parser/lib/index"
import { GoogleGenerativeAI } from "@google/generative-ai"
import "../components/Style.css"
import { RESPONSE_FORMAT } from "./data/ResponseFormat"
import { AI_PROMPT } from "./data/Prompt"

// Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export const Chatbot = () => {
    // Message Data
    const [messageData, setMessageData] = useState([])

    const [isMessageOpen, setIsMessageOpen] = useState(false)
    const [isBotTyping, setIsBotTyping] = useState(false)

    // For the input field
    const [inputMessage, setInputMessage] = useState()

    // Add message function
    const addMessage = (newMessage) => {
        setMessageData(prevMessageData => [
            ...prevMessageData, 
            newMessage
        ])
    }

    // To send a new message
    const sendMessage = async (e) => {
        e.preventDefault()

        // Add new message to messageData
        const newMessage = { Account: "User", Message: inputMessage }
        addMessage(newMessage)

        // Clear the input field immediately after adding the message
        setInputMessage("")

        // Show bot typing indicator with a slight delay
        setTimeout(() => {
            setIsBotTyping(true)
        }, 500)

        // Generate response
        await getResponseForGivenPrompt()
    }

    // Scroll to the bottom when messageData updates
    const messageEndRef = useRef(null)
    useEffect(() => {   
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messageData, isBotTyping])

    // Gemini AI Controller
    const getResponseForGivenPrompt= async () => {
        try{
            const model = genAI.getGenerativeModel({ model: "gemini-pro" })
            const result = await model.generateContent(RESPONSE_FORMAT(AI_PROMPT, inputMessage))
            const response = result.response
            const text = response.text()

            // Add new message to messageData
            const newMessage = { Account: "Chatbot", Message: text }
            addMessage(newMessage)

            setIsBotTyping(false) 
        }
        catch(error){
          console.log(`Something Went Wrong : ${error}`)
        }  
    }

  return (
    <div className="chatbotSection">
        {/* My Chatbot */}
        <div 
            alt="Chat bot"
            className="myChatbot"
            onClick={() => {setIsMessageOpen(!isMessageOpen)}}
        >
            Bot
        </div>

        {/* Chat Section */
        isMessageOpen &&
        <>
        <div className="chatSection">
            {/* Header */}
            <div className="chatSectionHeader">
                <div></div>

                {/* Bot Name */}
                <p className="botName">My Bot</p>
                    
                {/* Close */}
                <div 
                    className="closeButton"
                    onClick={() => {setIsMessageOpen(false)}}
                >
                    Close
                </div> 
            </div>

            {/* Body */}
            <div className="messageBody">
                {/* Chatbot */}
                <div className="conversationBotContainer">
                    {/* Chatbot avatar */}
                    <div className="botAvatar">B</div>

                    {/* Message Content Static */}
                    <div className="botMessageContent">
                        <div className="staticMessageBot1">
                            Hi There! 👋 This is a bot speaking. I’m here to answer your questions about ScholarEase.
                        </div>
                        <div className="staticMessageBot2">
                            So what brings you here today?
                        </div>
                    </div>
                </div>

                {/* Message Content Mapping */}
                <div style={{paddingBottom:"0"}}>
                    {messageData?.map((msg, index) => (
                        <div key={index} style={{marginTop:"0.75rem"}}>
                            {/* Conditional rendering based on Account */}
                            {msg.Account === "User" ? (
                                <div className="userMessage">
                                    {msg.Message}
                                </div>
                            ) : (
                                <div className="avatarMessage">
                                    {/* Chatbot avatar */}
                                    <div className="botAvatar">B</div>

                                    {/* Message Content */}
                                    <div style={{maxWidth:"78%"}}>
                                        <div className="avatarChat">
                                            {HTMLReactParser(msg.Message)}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                { // Chatbot replying animation
                isBotTyping &&
                    <div className="avatarMessage">
                        {/* Chatbot avatar */}
                        <div className="botAvatar">B</div>
                        
                        <div className="staticMessageBot2">
                            Bot is typing...
                        </div>
                    </div>
                }

                {/* For scrolling to bottom whenever data change */}
                <div ref={messageEndRef}></div>
            </div>

            {/* Input Field */}
            <form className="px-5 py-3" style={{padding: "0.75rem 1.25rem"}} onSubmit={sendMessage}>
                <textarea 
                    style={{
                        backgroundColor: 'transparent',
                        borderRadius: '0.375rem', // Corresponds to rounded-md
                        border: '1px solid #C3C3C3', 
                        outline: '2px solid rgb(243, 58, 58)', // Custom outline color
                        padding: '0.5rem 0.75rem', // px-3 py-2
                        fontSize: '0.875rem', // text-sm
                        resize: 'none',
                        height: "auto",
                        maxHeight: '7rem', // max-h-[7rem]
                        overflowY: 'scroll', // overflow-y-scroll
                        width: '100%', // w-full
                        marginTop: '0.5rem' // mt-2
                    }}
                    placeholder="Message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onInput={(e) => {
                        e.target.style.height = 'auto'; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on scroll height
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault(); // Prevent the default new line behavior
                            sendMessage(e); // Trigger the sendMessage function
                        }
                    }}
                />

                {/* Send Message */}
                <button
                    style={{
                        borderRadius: '0.5rem',
                        backgroundColor: 'rgb(243, 58, 58)', // Replace with your custom color
                        padding: '1.25rem',
                        height: '3rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: 'white',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '0.25rem',
                        marginBottom: '0.75rem',
                        opacity: (isBotTyping && inputMessage === "") || inputMessage?.length === 0 ? '0.7' : '1',
                        pointerEvents: (isBotTyping && inputMessage === "") || inputMessage?.length === 0 ? 'none' : 'auto',
                        transition: 'opacity 0.3s, transform 0.2s',
                        transform: 'scale(1)',
                    }}
                    type="submit"
                >
                    Send Message
                </button>
            </form>
        </div>
        </>
        }
    </div>
  )
}
