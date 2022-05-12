require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT;

if (PORT == null) {
    console.error("No Port Set")
} else {
    server.listen(PORT, () => {
        console.log("Server is running on port", PORT)
        console.log("Enviroment is", process.env.NODE_ENV)
    });
}

