import sgMail from '@sendgrid/mail'
import axios from 'axios'
sgMail.setApiKey(process.env.SENDGRID_API)


const headers =  {'Content-Type': 'application/json'}

export default async function handler(req, res) 

{
   /*  console.log(req) */
    try {(req.method === 'POST' && req.url === '/api/contact-us'); {
        console.log(req.body);
        const newDate = new Date();
        const selectedDate = new Date(req.body.selectedDate);
        const client = {
            to: req.body.email, // Change to your recipient
            from: 'no-reply@royal-cleaning.co.uk', // Change to your verified sender
            templateId: 'd-e190aa1ea0274a139b1db3a3c4d8b673',
            dynamic_template_data: {
                name: req.body.name,
                subject: `Thank you for contacting us ${req.body.name}!`
            },
            text: 'Contact request received!',
            html: `${req.body.name} has sent a request from ${req.url}. The client email is ${req.body.email} and his reference Number is ${req.body.postcode}`,
          }
          const company = {
            to: 'deni@royal-cleaning.co.uk', // Change to your recipient
            from: 'no-reply@royal-cleaning.co.uk', // Change to your verified sender
            templateId: 'd-57c4676c39ce4262bf9b761567215148',
            dynamic_template_data: {
                subject: `Callback request from ${req.body.email} received!`,
                name: req.body.name,
                email: req.body.email,
                mobile:req.body.mobile,
                postcode:req.body.postcode,
                service:req.body.service,
                date: newDate.toLocaleString('en-GB'),
                selectedDate: selectedDate.toLocaleString('en-GB'),
                service: req.body.postcode,
                
            },
          }
       await sgMail.send(client);
       await sgMail.send(company);
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
                        "text": `Mobile: ${req.body.mobile}\n*Email:*\n${req.body.email}\n*Service Required:*\n${req.body.service}\n*Postcode:*\n${req.body.postcode}\n*Date Selected: ${req.body.selectedDate}\n*Received:*\n${new Date().toLocaleString('en-GB', { timeZone: 'UTC' })}\n`
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
      await axios.post('https://hooks.slack.com/services/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', JSON.stringify(options))
      .then((response) => {
        console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
      })
      .catch((error) => {
        console.log('FAILED: Send slack webhook', error);
        res.status(200).json({body: 'Success Bro!'})
      });
      res.status(200).end()
    }}
    catch {
        res.status(500).json({ body: 'Shit !' }).end()
        console.log('Shit')
    }
  }