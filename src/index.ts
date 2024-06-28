import app from './app'
import { port } from "./config";
import { connectToDB } from "./db";


async function main() {
    await connectToDB();
    app.listen(port);
    console.log("Server on port ", port);
    console.log("http://localhost:3000/");
}

main();