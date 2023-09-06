import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log("no / :")
    console.log("params: ", req.params);
    console.log("query: ", req.query);
    console.log("body: ", req.body);
    res.send('Hello from / !');
});

app.post('/sessions', (req, res) => {
    console.log("no /sessions :")
    console.log("params: ", req.params);
    console.log("query: ", req.query);
    console.log("body: ", req.body);

    const { email, password } = req.body;
    const { authorization } = req.headers;
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("authorization: ", authorization);

    const token = 'token';
    const refreshToken = 'refreshToken';
    const permissions = ['metrics.list', 'nadamais'];
    const roles = ['administrator','zebobao'];

    const retorno = { 
        token, 
        refreshToken, 
        permissions, 
        roles 
    }
    res.status(200).json(retorno).end();
});

app.get('/me', (req, res) => {
    console.log("no /me :")
    console.log("params: ", req.params);
    console.log("query: ", req.query);
    console.log("body: ", req.body);
    
    const { authorization } = req.headers;
    console.log("authorization: ", authorization);

    res.status(200).json({ 
        // user: { 
            name: 'fernando', 
            email: 'f@f.com',
            permissions: ['metrics.list', 'nadamais'],
            roles: ['administrator','zebobao']
        // }
    }).end();
});

app.post('/refresh', (req, res) => {
    console.log("no /refresh :")
    console.log("params: ", req.params);
    console.log("query: ", req.query);
    console.log("body: ", req.body);

    const { email, password } = req.body;
    const { authorization } = req.headers;
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("authorization: ", authorization);

    const token = 'token';
    const refreshToken = 'refreshToken';
    const permissions = ['metrics.list', 'nadamais'];
    const roles = ['administrator','zebobao'];

    const retorno = { 
        token, 
        refreshToken, 
        permissions, 
        roles 
    }
    res.status(200).json(retorno).end();
});

app.listen(3333, () => {
    console.log('Server started on port 3333!');
});




