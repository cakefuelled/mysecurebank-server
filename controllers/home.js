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
};

exports.thankYou = (req,res) => {
	var name = req.query.name;
	console.log(name);
    res.set('X-XSS-Protection', 0);
	res.render('thankyou',{
		message: 'Thank you for submitting data '+name
	});
}

exports.transferGet = (req, res) => {
    res.render('transfer', {
        title: 'Transfer'
    });
}

exports.transferPost = (req, res) => {
    var recipient = req.body.recipient;
    var amount = req.body.amount;

    res.render('thankyou', {
        message: 'Thank you for transferring '+amount+' to '+recipient
    })
}