import {useEffect, useRef, useState} from "react"
import "../components/Style.css"
import chatbot from "../../assets/images/sample/chatbot.gif"
import chatbotPng from "../../assets/images/sample/chatbot.png"
import logo from "../../assets/images/logo/noText.png"
import CloseIcon from "@mui/icons-material/Close"
import ContactSupportIcon from "@mui/icons-material/ContactSupport"
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import { useNavigate } from "react-router-dom"
import { useChatStore } from "@/store/zustandStore"
import { GoogleGenerativeAI } from "@google/generative-ai"
import HTMLReactParser from "html-react-parser/lib/index"
import { AI_PROMPT } from "./data/ChatbotPrompt"
import { RESPONSE_FORMAT } from "./data/ChatbotResponseFormat"
import { TypingBubbles } from "@/components/ui/TypingBubbles"

// Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export const Chatbot_bk = () => {
    // Navigator
    const navigate = useNavigate()

    // Message Data
    const { messageData, addMessage } = useChatStore()

    // Bot name
    const BOT_NAME = "Sunny"

    // Text Welcomer
    const [visible, setVisible] = useState<boolean>(false)
    useEffect(() => {
        // Show the notification after 5 seconds
        const timerShow = setTimeout(() => {
            setVisible(true)
        }, 5000)

        // Hide the notification after another 5 seconds
        const timerHide = setTimeout(() => {
            setVisible(false)
        }, 10000);

        // Clean up timers
        return () => {
            clearTimeout(timerShow)
            clearTimeout(timerHide)
        }
    }, [])

    // Message Box Open Controller
    const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false)
    const [isIntro, setIsIntro] = useState<boolean>(true)
    const [isBotTyping, setIsBotTyping] = useState<boolean>(false)

    // Open Ask Ai
    const openAskAi = () => {
        setIsIntro(false)
        const timeoutId = setTimeout(() => {
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)

        return () => clearTimeout(timeoutId)
    }

    // For the input field
    const [inputMessage, setInputMessage] = useState<string>("")

    // To send a new message
    const sendMessage = async () => {
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
    const messageEndRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {   
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messageData, isBotTyping])

    // Gemini AI Controller
    const getResponseForGivenPrompt= async () => {
        try{
            const model = genAI.getGenerativeModel({ model: "gemini-pro" })
            const result = await model.generateContent(RESPONSE_FORMAT(AI_PROMPT, BOT_NAME, inputMessage))
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
    <div className="max-w-full">
        {/* My Chatbot */}
        <img 
            src={chatbot}
            alt="Chat bot"
            className="fixed z-[99999999] bottom-5 right-7 h-[5rem] sm:h-[7rem] cursor-pointer hover:opacity-90"
            onClick={() => {setIsMessageOpen(!isMessageOpen) ; navigate("")}}
        />

        {/* Chat with me text */
        !isMessageOpen &&
        <div
            className={`fixed hidden 421size:block z-[99999999] bottom-[7rem] sm:bottom-[8rem] right-12 sm:right-20 w-[20rem] max-w-full custom-box-shadow rounded-md p-3 bg-white transition-opacity duration-500 ${
                !isMessageOpen && visible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <p className="text-sm text-custom-gray-2">
                🌞 Hi there! I’m <span className="text-sm font-bold text-custom-gray-2">{BOT_NAME}</span>, your solar assistant! Here to help with any questions about <span className="text-sm font-bold text-custom-blue-1">{websiteName}</span>. Let’s shine a light on your inquiries!
            </p>
        </div>
        }

        {/* Message Box */
        isMessageOpen &&
        <div className="z-[99999999] bottom-[6rem] sm:bottom-[8rem] fixed left-1 right-1 sm:left-auto sm:right-10 sm:w-[24rem] max-w-full custom-box-shadow rounded-xl bg-white overflow-hidden">
            {/* Introduction Section */
            isIntro &&
            <>
                {/* Header */}
                <div className="w-full min-h-[15rem] px-8 bg-custom-blue-2">
                    {/* Close */}
                    <CloseIcon 
                        className="text-white float-right mt-3 mr-[-1rem] cursor-pointer hover:text-custom-yellow-1 custom-transition-0_3" 
                        sx={{fontSize:"2rem"}}
                        onClick={() => setIsMessageOpen(false)}
                    />

                    {/* Logo */}
                    <div className="pt-14 flex gap-x-3 items-center">
                        <img src={logo} 
                            alt="Website Logo" 
                            className="h-12"
                        /> 
                        <div className="text-white font-bold">
                            <p className="">GENESIS</p>
                            <p className="">SOLAR POWER</p>
                        </div>
                    </div>

                    {/* Hello text */}
                    <p className="text-white text-2xl font-bold mt-14">🌟 Hello there! 👋</p>
                </div>

                {/* Chat with AI section */}
                <div 
                    className="mx-8 bg-white custom-border-shadow mt-[-2rem] hover:bg-[#f5f5f5] text-custom-gray-2 hover:text-custom-blue-1
                    rounded-md p-4 flex items-center justify-between gap-x-5 cursor-pointer custom-transition-0_3 disable-highlight"
                    onClick={openAskAi}
                >
                    <div>
                        <p className="text-sm font-bold">Ask a question</p>
                        <p className="text-xs text-custom-gray-1">{BOT_NAME} our AI agent can help</p>
                    </div>
                    <ContactSupportIcon className="text-custom-blue-1"/>
                </div>

                {/* Other Helpful links */}
                <div 
                    className="mx-8 bg-white custom-border-shadow mt-3 mb-5
                    rounded-md p-4"
                >
                    <div 
                        className="flex items-center justify-between gap-x-5 cursor-pointer disable-highlight" 
                        onClick={() => {navigate("?type=1") ; setIsMessageOpen(false)}}
                    >
                        <p className="text-sm text-custom-gray-2 font-medium hover:text-custom-blue-1">Our Terms and Condition</p>
                        <ScreenShareOutlinedIcon className="text-custom-blue-1"/>
                    </div>

                    <hr className="my-3"/>

                    <div 
                        className="flex items-center justify-between gap-x-5 cursor-pointer disable-highlight" 
                        onClick={() => {navigate("?type=2") ; setIsMessageOpen(false)}}
                    >
                        <p className="text-sm text-custom-gray-2 font-medium hover:text-custom-blue-1">Our Privacy Policy</p>
                        <ScreenShareOutlinedIcon className="text-custom-blue-1"/>
                    </div>

                    <hr className="my-3"/>

                    <div 
                        className="flex items-center justify-between gap-x-5 cursor-pointer disable-highlight" 
                        onClick={() => {navigate("/ContactUs#_Home"); setIsMessageOpen(false)}}
                    >
                        <p className="text-sm text-custom-gray-2 font-medium hover:text-custom-blue-1">Contact us</p>
                        <ScreenShareOutlinedIcon className="text-custom-blue-1"/>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-sm text-center mx-8 mb-5 font-medium text-custom-gray-1 pointer-events-none disable-highlight">
                    {new Date().getFullYear()} @ {websiteName}
                </p>
            </>
            }
            
            {/* AI Chat section */
            !isIntro &&
            <>
                {/* Header */}
                <div className="px-5 py-5 flex items-center justify-between gap-x-5 bg-custom-blue-1">
                    {/* Back */}
                    <div 
                        className="w-10 h-10 flex items-center justify-center rounded-md custom-transition-0_3 hover:bg-custom-yellow-1 cursor-pointer"
                        onClick={() => setIsIntro(true)}
                    >
                        <ArrowBackIosNewOutlinedIcon className="text-white font-bold" sx={{fontSize:"1.3rem"}}/>
                    </div>
                    
                    {/* Bot Name */}
                    <div className="flex gap-x-2 items-center">
                        <div className="bg-custom-yellow-1 h-12 w-12 min-h-12 min-w-12 rounded-full flex items-center justify-center">
                            <img src={chatbotPng} alt="Chatbot" className="h-8"/>
                        </div>
                        <div>
                            <p className="text-base font-bold text-white">{BOT_NAME}</p>
                            <p className="text-sm text-[#cecece]">
                                <span className="text-xs py-[2px] px-[4px] rounded-sm bg-[#929292] text-white font-semibold">AI</span> Agent
                            </p>
                        </div>
                       
                    </div>
                        
                    {/* Close */}
                    <div 
                        className="w-10 h-10 flex items-center justify-center rounded-md custom-transition-0_3 hover:bg-custom-yellow-1 cursor-pointer"
                        onClick={() => {setIsMessageOpen(false) ; setIsIntro(true)}}
                    >
                        <CloseIcon className="text-white font-bold" sx={{fontSize:"1.5rem"}}/>
                    </div>
                    
                </div>

                {/* Body */}
                <div className="h-[35vh] px-5 py-5 custom-scroll-bar overflow-y-scroll">
                    {/* Chatbot */}
                    <div className="flex items-end gap-x-3">
                        {/* Chatbot avatar */}
                        <div className="bg-custom-yellow-1 h-10 w-10 min-h-10 min-w-10 rounded-full flex items-center justify-center">
                            <img src={chatbotPng} alt="Chatbot" className="h-7"/>
                        </div>

                        {/* Message Content Static */}
                        <div className="max-w-[78%]">
                            <div className="font-medium p-3 text-sm text-custom-gray-2 rounded-md bg-[#f1f1f1] float-left">
                                Hi There! 👋 This is a bot speaking. I’m here to answer your questions about <span className="text-sm font-bold text-custom-blue-1">{websiteName}</span>.
                            </div>
                            <div className="font-medium p-3 mt-2 text-sm text-custom-gray-2 rounded-md bg-[#f1f1f1] float-left">
                                So what brings you here today?
                            </div>
                        </div>
                    </div>

                    {/* Message Content Mapping */}
                    <div className="pb-0">
                        {messageData.map((msg, index) => (
                            <div key={index} className="mt-3">
                                {/* Conditional rendering based on Account */}
                                {msg.Account === "User" ? (
                                    <div className="font-medium p-3 mb-3 text-sm text-white rounded-md bg-custom-yellow-1 float-right clear-both max-w-[78%]">
                                        {msg.Message}
                                    </div>
                                ) : (
                                    <div className="flex items-end gap-x-3 clear-both">
                                        {/* Chatbot avatar */}
                                        <div className="bg-custom-yellow-1 h-10 w-10 min-h-10 min-w-10 rounded-full flex items-center justify-center">
                                            <img src={chatbotPng} alt="Chatbot" className="h-7"/>
                                        </div>

                                        {/* Message Content */}
                                        <div className="max-w-[78%]">
                                            <div className="font-medium p-3 text-sm text-custom-gray-2 rounded-md bg-[#f1f1f1] float-left avatarChat">
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
                    <div className="flex items-end gap-x-3 clear-both">
                        {/* Chatbot avatar */}
                        <div className="bg-custom-yellow-1 h-10 w-10 min-h-10 min-w-10 rounded-full flex items-center justify-center">
                            <img src={chatbotPng} alt="Chatbot" className="h-7"/>
                        </div>
                        
                        {/* Typing Bubble Animation */}
                        <TypingBubbles/>
                    </div>
                    }

                    {/* For scrolling to bottom whenever data change */}
                    <div ref={messageEndRef}></div>
                </div>

                {/* Input Field */}
                <form className="px-5 py-3" onSubmit={sendMessage}>
                    <textarea 
                        className="bg-transparent rounded-md border border-[#C3C3C3] outline-custom-blue-2 
                        px-3 py-2 text-sm resize-none max-h-[7rem] custom-scroll-bar overflow-y-scroll w-full mt-2"
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
                        className={`rounded-lg bg-custom-blue-1 px-5 h-[3rem] text-sm hover:opacity-90 active:scale-[.99] mt-1 mb-3
                            font-medium text-white w-full flex items-center justify-center ${(isBotTyping  && inputMessage === "") || (inputMessage.length === 0) ? "pointer-events-none opacity-70" : "pointer-events-auto opacity-100"}`}
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </>  
            }
        </div>
        }
    </div>
  )
}
