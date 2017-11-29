var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'public')));


//ABC
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ABC', function (req, res) {
 res.send('Airway, Breathing, Circulation. This is easily the most popular acronym in the world of first aid and CPR. This helps people relate to the simplicity of CPR. CPR and ABC have been partnered for decades. Good likelihood this will be changing in the future.');
 })

 app.get('/CHAMPLEhtml', function (req, res) {
	 console.log("Working");
 res.send('');
 })

 app.get('/ABCfile', function(req, res) {
	console.log("ABC file");
    res.sendFile(path.join(__dirname + '/AED.html'));
});

//CHAMPLE
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/CHAMPLE', function (req, res) {
 res.send('this is CHAMPLE');
 })

 app.get('/CHAMPLEhtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Chief complaint, History, Allergies, Medication, Past pertinent History, Last Meal, Events Prior. This is a well used acronym used in eastern Canada for questions to ask during a secondary survey / History.<\h3>');
 })

 app.get('/CHAMPLEfile', function(req, res) {
	console.log("CHAMPLE file");
    res.sendFile(path.join(__dirname + '/CHAMPLE.html'));
});

//FBOA
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/FBOA', function (req, res) {
 res.send('');
 })

 app.get('/FBOAhtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Full Body Obstructed Airway.  Used to reference to a choking victim with a severe obstruction in the airway. Severe choking.<\h3>');
 })

 app.get('/FBOAfile', function(req, res) {
	console.log("FBOA file");
    res.sendFile(path.join(__dirname + '/FBOA.html'));
});

//LOC
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/LOCPRESS', function (req, res) {
 res.send('');
 })

 app.get('/LOCPRESShtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Level Of Consciousness, Pulse, Respiration, Eyes, Skin Color, Skin Temperature. This is a nationally known acronym used during the secondary survey. Extremely popular for both the Red Cross and Lifesaving Society.<\h3>');
 })

 app.get('/LOCPRESSfile', function(req, res) {
	console.log("LOCPRESS file");
    res.sendFile(path.join(__dirname + '/LOCPRESS.html'));
});

//pearl
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/PEARL', function (req, res) {
 res.send('');
 })

 app.get('/PEARLhtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Pupils are Equal And Reactive to Light. This is an acronym used during the secondary survey to check the pupils of the eye.<\h3>');
 })

 app.get('/PEARLfile', function(req, res) {
	console.log("PEARL file");
    res.sendFile(path.join(__dirname + '/PEARL.html'));
});


//pboa
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/PBOA', function (req, res) {
 res.send('');
 })

 app.get('/PBOAhtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Partial Body Obstructed Airway. This acronym is used to reference to a victi with a mild obstruction in the airway. Mild choking.<\h3>');
 })

 app.get('/PBOAfile', function(req, res) {
	console.log("PBOA file");
    res.sendFile(path.join(__dirname + '/PBOA.html'));
});

//red
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/RED', function (req, res) {
 res.send('');
 })

 app.get('/REDhtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Rest / Reassure, Elevate, Direct Pressure. This acronym is a will fitting acronym for the treatment of cuts and bleeding. What color is blood? RED!<\h3>');
 })

 app.get('/REDfile', function(req, res) {
	console.log("RED file");
    res.sendFile(path.join(__dirname + '/RED.html'));
});
 
 
 //rice
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/RICE', function (req, res) {
 res.send('');
 })

 app.get('/RICEhtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Rest / Reassure, Ice / Immobilize, Compression, Elevation. This acronym has many variations to it and has changed throughout the past decade. It is popular for treating bruises, sprains and strains.<\h3>');
 })

 app.get('/RICEfile', function(req, res) {
	console.log("RICE file");
    res.sendFile(path.join(__dirname + '/RICE.html'));
});

 //sample
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/SAMPLE', function (req, res) {
 res.send('');
 })

 app.get('/SAMPLEhtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Signs and Symptoms, Allergies, Medication, Past pertinent History, Last Meal, Events Prior. This is a popular acronym in western Canadian first aid courses to help candidates memorize questions to ask during a secondary survey / History.<\h3>');
 })

 app.get('/SAMPLEfile', function(req, res) {
	console.log("SAMPLE file");
    res.sendFile(path.join(__dirname + '/SAMPLE.html'));
});

 //warts
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/WARTS', function (req, res) {
 res.send('');
 })

 app.get('/WARTShtml', function (req, res) {
	 console.log("Working");
 res.send('<h3>Warmth, Airway, Rest and Reassure,  Treatment, Semi-prone.  This a popular acronym for treating Shock.  How warts and shock are related is beyond my understanding.h3>');
 })

 app.get('/WARTSfile', function(req, res) {
	console.log("WARTS file");
    res.sendFile(path.join(__dirname + '/WARTS.html'));
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/ABCfile', function (req, res) {
	console.log("post method");
	console.log(req.body.firstname);
   res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})
app.delete('/ABCfile', function (req, res) {
  res.redirect('/');
})


app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})