var express = require('express')
var ejs = require('ejs')
var app = express()
app.engine('html', ejs.renderFile)
app.listen(2000)
app.use(express.static('public'));
app.get('/', index)
app.get('/result', result)

function index(req, res) {
    res.render('index.html')
}

function result(req, res) {
    var number = req.query.order
    number = parseInt(number)
    var input1 = req.query.inputnumber
    var input = input1.split(",")
    var sum = 0
    for (var i = 0; i < input.length; i++) {
        input[i] = parseInt(input[i])
    }
    if (number == 1) {
        for (var i = 0; i < input.length; i++) {
            sum = sum + input[i]
        }
        sum = sum / input.length
    }
    else if (number == 2) {
        var i = 0
        var count = parseInt(input.length)
       if (count % 2 == 0) {
            i = (count / 2)
            i = Math.floor(i)
            sum = (input[i] + input[i + 1]) / 2;
        }
        else {
            i = (count / 2)
            i = Math.floor(i)
            sum = input[i]
        }


    }
    else if (number == 3) {
			for(var i = 0;i < input.length;i++){
				sum += input[i];
			}

    }
    else {
        var sum = "มีข้อผิดพลาด"
    }

    res.render('result.html', { sum: sum })
}