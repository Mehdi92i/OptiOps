import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Champs requis manquants.' }), {
            status: 400,
        });
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // ⚠️ TEMPORAIRE jusqu'à vérif domaine
            to: 'mehdi.tassi.pro@gmail.com',
            subject: `📬 Nouveau message de ${name}`,
            html: `
        <h2>📨 Nouveau message reçu via le formulaire</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p> 
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Erreur Resend:', error);
        return new Response(JSON.stringify({ success: false, error: 'Erreur serveur' }), {
            status: 500,
        });
    }
}
