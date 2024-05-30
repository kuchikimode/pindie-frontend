const app = express();
const PORT = 3000;
app.use(
    
    express.static(path.join(__dirname, "public"))
  );
app.listen(PORT); 
