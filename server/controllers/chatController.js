export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;

        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Transfer-Encoding", "chunked");

        let responseText = "Mock streaming response: " + message;

        // Simulate streaming
        const words = responseText.split(" ");
        for (const word of words) {
            res.write(word + " ");
            await new Promise(resolve => setTimeout(resolve, 100)); // Simulate delay
        }

        res.end();
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ message: "Error generating response" });
    }
};