const handler = async (event, context) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    // Example processing
    const message = "Hello from Lambda!";

    // Return a response
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: message
        })
    };
};

module.exports = { handler };
