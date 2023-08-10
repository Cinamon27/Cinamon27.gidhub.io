<script type="text/javascript">
// Initialize the LinkedIn SDK
function onLinkedInLoad() {
  IN.init({
    api_key: 'YOUR_API_KEY',
    authorize: true,
  });
}

// Handle user authentication and retrieve profile data
function onLinkedInLogin() {
  IN.User.authorize(function() {
    IN.API.Raw("/people/~").result(function(data) {
      // Handle the retrieved profile data
      console.log(data);
    });
  });
}
</script>

<script type="text/javascript" src="https://cdn.sendgrid.com/sg.js"></script>
<script type="text/javascript">
  // Send an email using SendGrid API
  function sendEmail() {
    const emailData = {
      personalizations: [
        {
          to: [{ email: 'recipient@example.com' }],
          subject: 'Hello from my website!',
        },
      ],
      from: { email: 'sender@example.com' },
      content: [{ type: 'text/plain', value: 'This is the email content.' }],
    };
    
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_SENDGRID_API_KEY',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
    .then(response => {
      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  }
</script>