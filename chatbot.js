// Simple data for major diseases
const diseaseData = {
    "help": "Hello, How can I assist you.Tell me about your disease.",
    "hello": "Hello, How can I assist you. Tell me about your disease.",
    "yes": "Tell me about your disease.!!!",
    "no": "Thank You !!!",
    "cold": "To feel better, avoid cold food or drinks. Make sure to rest in a warm environment and stay cozy under a blanket, Do you have any other Symptoms(Yes/No)?",
    "diabetes": "Diabetes is a chronic condition that affects how your body turns food into energy.",
    "hypertension": "Hypertension is another term for high blood pressure, which can lead to severe health complications.",
    "covid-19": "COVID-19 is caused by the SARS-CoV-2 virus and can lead to respiratory illness.",
    "malaria": "Malaria is a mosquito-borne disease caused by a parasite and can be life-threatening.",
    "heart disease": "Heart disease describes a range of conditions that affect your heart.",
    "asthma": "Asthma is a condition in which your airways narrow and swell, producing extra mucus.",
    "chat with doctor": "To connect with a doctor call 911 or request a submit to home page"
};

// Function to append messages to the chat log
function appendMessage(message, className) {
    const chatLog = document.getElementById("chat-log");
    const newMessage = document.createElement("div");
    newMessage.className = className;
    newMessage.innerText = message;
    chatLog.appendChild(newMessage);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the Assistant Systemtom
}

// Function to handle user input
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    appendMessage(`You: ${userInput}`, "user-message");

    // Simple disease lookup
    if (diseaseData[userInput]) {
        setTimeout(() => {
            appendMessage(`🧑🏼‍⚕️Assistant: ${diseaseData[userInput]}`, "🧑🏼‍⚕️Assistant System-response");
        }, 500);
    } else {
        setTimeout(() => {
            appendMessage("🧑🏼‍⚕️Assistant: Sorry, I don't have information on that disease.", "🧑🏼‍⚕️Assistant System-response");
        }, 500);
    }

    document.getElementById("user-input").value = ""; // Clear the input
}
