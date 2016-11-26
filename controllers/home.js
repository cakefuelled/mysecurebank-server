/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.xss = (req, res) => {
  res.render('xss', {
    title: 'random'
  });
};

/*
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_PASSWORD
  }
});
*/

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postXss = (req, res) => {
  req.assert('name', 'Name cannot be blank').notEmpty();
  var name = req.body.name;
  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/xss');
  }

  else {
  	return res.redirect('/thankyou?name=' + name)
  }




  

  /*
  const mailOptions = {
    to: 'your@email.com',
    from: `${req.body.name} <${req.body.email}>`,
    subject: 'Contact Form | Hackathon Starter',
    text: req.body.message
  };
  */


  /*
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      req.flash('errors', { msg: err.message });
      return res.redirect('/contact');
    }
    req.flash('success', { msg: 'Email has been sent successfully!' });
    res.redirect('/contact');
  });
  */
};

exports.thankYou = (req,res) => {
	var name = req.query.name;
	console.log(name);
	res.render('thankyou',{
		name : name
	});
}
