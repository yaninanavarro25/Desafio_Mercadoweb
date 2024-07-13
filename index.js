import express from 'express';
import exphbs from 'express-handlebars';
import path, { extname } from 'path';

const app = express();
const port = 3000;

const __dirname = path.resolve()

app.use(express.static("assets"));

app.use("/bootstrap", express.static("node_modules/bootstrap/dist/css"));

app.set("view engine", "hbs")

app.engine("hbs", exphbs.engine({
    layoutsDir: __dirname + "/views",
    extname: "hbs",
})
);

app.get('/', (req, res) => {
    res.render('home',{
        producto:["banana","cebollas","lechuga","papas","pimenton","tomate"]
    });
});


app.listen(port, () => {
    console.log(`Servidor MercadoWeb escuchando http://localhost:${port}`);
});
