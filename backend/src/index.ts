import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (req, res) => res.send({
    message: `I'm working 🚀 at ${new Date().toISOString()}`,
}));

app.use((req, res, next) => {
    next();
    console.log(`   [${req.method.toUpperCase()}] ${req.path}`)
})

app.use(routes);


app.listen(2323, () => {
    console.log(`✨ Listening to 2323.`)
});