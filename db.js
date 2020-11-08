const mongoose = require('mongoose')
const url = `mongodb+srv://rlackdgns:rlackdgns@cluster0.9y9qi.mongodb.net/studentDB?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to MongoDB Atlas ')
    })
    .catch( (err) => {
        console.error(`Error connecting to MongoDB Atlas. \n${err}`);
    })

