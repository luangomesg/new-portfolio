import nodemailer from "nodemailer";


export async function POST(req: Request) {
    const {name, email, message} = await req.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // senha do app
        },
    })

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Novo contato de ${name}`,
            text: message,
        })
        return Response.json({success: true, message: 'Email enviado com sucesso!'})
    }catch(err) {
        return Response.json({success: false, message: 'Erro ao enviar email', error: err})
    }
}