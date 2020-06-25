import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send({
    message: `I'm working 🚀 at ${new Date().toISOString()}`,
}));

app.use((req, res, next) => {
    next();
    console.log(`   [${req.method.toUpperCase()}] ${req.path}`)
})

app.use(routes);

const port = 3333;
app.listen(port, () => {
    console.log(`✨ Listening to ${port}.`)
});