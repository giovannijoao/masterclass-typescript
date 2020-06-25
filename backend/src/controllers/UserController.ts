import { Response, Request, request } from "express";
import EmailService from "../services/EmailService";

const users = [{
    name: 'João', email: 'joaogiovannivilela@gmail.com'
}]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const { name, email } = req.body;
        users.push({ name, email });
        const emailService = new EmailService();
        await emailService.sendMail({
            to: {
                name,
                email,
            },
            message: {
                subject: `Bem vindo, ${name}`,
                body: `Confirme seu e-mail usando o código 123.`
            }
        });
        res.send({
            message: 'Cadastro realizado'
        })
    }
}