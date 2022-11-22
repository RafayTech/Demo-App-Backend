var request = require('request');
let sendMessageOptions = (req,res)=>{

    let msg = {
        'method': 'POST',
        'url': `https://graph.facebook.com/v15.0/me/messages?access_token=${process.env.FACEBOOK_PAGE_ACCESS_TOKEN}`,
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "recipient": {
            "id": req.body.recipient
          },
          "message": {
            "text": req.body.message
        }})
    }

    request(msg, async (error, response) => {
        if(error){
            console.log(error);
        }
        console.log(response);
    })
    console.log('check',msg);
    res.send('done')
}
module.exports={
    sendMessageOptions
}