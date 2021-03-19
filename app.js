const express = require('express')
const app = express()
const morgan = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')

app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    // debug: true,
    outputStyle: 'compressed'
}))
app.use(express.static('public'))

app.use(morgan(":status :method from ':url' in :response-time[1] ms"))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.render('main.pug')
})

app.listen(3000, () => console.log('Express() listen on :3000'))