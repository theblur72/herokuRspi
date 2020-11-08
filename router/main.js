var stdInfo = require('./User');
//
const shell = require('shelljs')
const Raspistill = require('node-raspistill').Raspistill;
const camera = new Raspistill();
//
module.exports = function(app)
{
     app.get('/',function(req,res){
//
	camera.takePhoto().then((photo) => {
		console.log('photo!')
	});
//
        res.render('index.html')
     });
    app.post('/info', function (req, res) {
        console.log('데이터 입력됨.');
        stdInfo.create( {
            stdNumb: req.body.studentNumb,
            stdName: req.body.studentName,
            },);
        var Numb = req.body.studentNumb;
        var Name = req.body.studentName;
//
	shell.cd('photos')
	var code = shell.ls('*.jpg').code
	if(code === 0) {
        res.send(Numb + " " + Name);
        console.log(Numb + " " + Name);
	} else {
	res.send(Name + " " + Numb);
	console.log(Name + " " + Numb);
	}
//
    });

}
