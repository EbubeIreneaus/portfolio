import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { sendMail } = useNodeMailer();
    const data = await readBody(event);
    const { name, email, message } = data;

    await prisma.message.create({
      data: { name, email, message },
    });

    try {
      await sendMail({
        subject: "Ebube Ireneaus",
        text: `Dear ${name}, \n\n
        Thank you for reaching out. \n I have received your message and will get back to you as soon as possible. \n\n 
        Best regards, \n
         Ebube Ireneaus`,
         to: [email, 'alfredebube7@gmail.com'],

      });
      
    } catch (error) {
        console.log("Error sending email from createMsg ", error)
    }
    return { statusCode: 201 };
  } catch (error: any) {
    return createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
