let dataOnServer = { "count": 1 };

export async function POST(request) {
    const response = await request.json();
    dataOnServer.count = response.count;
    console.log('save', dataOnServer);

    return Response.json({ status: 'ok' });
};

export async function GET() {
    console.log('get', dataOnServer);
    return Response.json(dataOnServer);
};
console.log(dataOnServer);