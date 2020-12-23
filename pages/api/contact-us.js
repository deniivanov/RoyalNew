import sgMail from '@sendgrid/mail'
import axios from 'axios'
sgMail.setApiKey(process.env.SENDGRID_API)


const headers =  {'Content-Type': 'application/json'}

export default async function handler(req, res) 

{
   /*  console.log(req) */
    if (req.method === 'POST' && req.url === '/api/contact-us') {
        console.log(req)
        const client = {
            to: req.body.email, // Change to your recipient
            from: 'no-reply@royal-cleaning.co.uk', // Change to your verified sender
            subject: `Contact request from ${req.body.name}`,
            text: 'Contact request received!',
            html: `${req.body.name} has sent a request from ${req.url}. The client email is ${req.body.email} and his reference Number is ${req.body.refNum}`,
          }
          const company = {
            to: 'info@royal-cleaning.co.uk', // Change to your recipient
            from: 'no-reply@royal-cleaning.co.uk', // Change to your verified sender
            subject: `Your request was received successfully!`,
            text: 'Contact request received!',
            html: `Thank you for submitting your contact information ${req.body.name}. We'll be in touch shortly!`,
          }
       sgMail.send(client);
       sgMail.send(company);
       const options = {
            "blocks": [
                {
                    "type": "actions",
                    "elements": [
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "emoji": true,
                                "text": "Create CRM File"
                            },
                            "style": "primary",
                            "value": "Create CRM File",
                            "url": 'https://localhost:3000/order',
                            "action_id": "button-action-crm"
                        },
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "emoji": true,
                                "text": "Email the Client"
                            },
                            "style": "danger",
                            "value": "email",
                            "url": `mailto:${req.body.email ? req.body.email : null}`,
                            "action_id": "button-action"
                        }
                    ]
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `*Email:*\n${req.body.email}\n*Reference Number:*\n${req.body.refNum}\n*Received:*\n${new Date().toLocaleString('en-GB', { timeZone: 'UTC' })}\n`
                    },
                    "accessory": {
                        "type": "image",
                        "image_url": "https://deniivanov.com/img/rc.png",
                        "alt_text": "Royal Cleaning"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `You have a new callback request:\n*Type : Callback Request*\n From: ${req.body.name}`
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `Client is okay to receive marketing information : ${req.body.marketing ? ':heavy_check_mark:' : ':no_entry:'}`
                    }
                }
            ]
      };
      axios.post(process.env.SLACK_WEBHOOK, JSON.stringify(options))
      .then((response) => {
        console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log('FAILED: Send slack webhook', error);
        reject(new Error('FAILED: Send slack webhook'));
      });
        /* sgMail.send(company) */
        res.status(200).json({body: 'Success Bro!'})
        .then(() => {
            console.log(res.statusCode)
        })
        .catch((error) => {
        console.error(error)
        res.status(202).json({body: 'Fail'})
        })
    }
    else {
        res.status(500).json({ body: 'Shit !' })
        console.log('Shit')
    }
  }