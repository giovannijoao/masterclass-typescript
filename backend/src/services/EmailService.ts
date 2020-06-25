
interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[]
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): Promise<boolean>
}

export default class EmailService implements IEmailService {
    async sendMail({ to, message }: IMessageDTO) {
        console.log(`✉ Email enviado para ${to.name}: ${message.subject}`);
        return true;
    }
}