import nodemailer from 'nodemailer';

// Configuración para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '231204@ids.upchiapas.edu.mx', 
    pass: 'flavio312', 
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({
      from: '"Alert" <fd8242568@gmail.com>', 
      to,
      subject,
      text,
    });
    console.log('Correo electrónico enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw new Error('Error al enviar el correo electrónico');
  }
};
