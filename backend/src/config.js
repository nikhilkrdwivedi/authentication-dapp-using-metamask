// Export the config object 
export const config = {
    PORT: process.env.PORT || 5000,
    mongoURI: process.env.mongoURI || 'mongodb+srv://mydatabase:aryapassword@cluster0.5drnm.mongodb.net/auth-with-metamask?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/auth-with-metamask',
    mongoOptions : {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

export default config;