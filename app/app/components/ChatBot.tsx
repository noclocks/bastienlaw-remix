const ChatbotScript = () => (
    <>
        <script
            dangerouslySetInnerHTML={{
                __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "VhVykMQoMKK6p-pu3I1wP",
                domain: "www.chatbase.co"
              };
              `,
            }}
        />
        <script src="https://www.chatbase.co/embed.min.js" defer />
    </>
);

export default ChatbotScript;
