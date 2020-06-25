import { Response, Request } from "express";

const users = [{
    name: 'João', email: 'joaogiovannivilela@gmail.com'
}]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
}