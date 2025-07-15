const { handler } = require('./lambda');

test('Lambda function should return 200 with correct message', async () => {
    const event = {};
    const context = {};

    const response = await handler(event, context);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Hello from Lambda!");
});
