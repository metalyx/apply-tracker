import { connect } from 'mongoose';
import { resolve } from 'path';
import { config } from 'dotenv';
import express, { json } from 'express';
import chalk from 'chalk';
import userController from './controllers/UserController.js';

config({
    path: resolve('.env'),
});

const app = express();
app.use(json());

app.get('/', (req, res) => {
    res.status(200).json({
        ok: 'ok',
    });
});

app.post('/registerUser', (req, res) => userController.register(req, res));

const connectToDB = async () => {
    try {
        console.log('Attempt to connect to ' + chalk.green('MongoDB'));
        console.log(
            `Credentials used: ` +
                chalk.red(
                    `${process.env.MONGO_LOGIN} ${process.env.MONGO_PASSWORD}`
                )
        );
        await connect(
            `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cluster0.yxxtym7.mongodb.net/`
        );
        console.log(chalk.bgGreen('Successfully connected to MongoDB'));
    } catch (error) {
        console.log(chalk.bgRed('Failed to connect to MongoDB'));
        console.log(error);
        process.exit(1);
    }
};

const startApp = () => {
    app.listen(5001, () => {
        console.log('Server started on port 5001');
    });
};

const start = async () => {
    await connectToDB();
    startApp();
};

console.clear();
start();

// 1. Create an application (i.e. click on certain control on frontend)
// 2. Get all application for current user for current day
// 3. Get all application for current user for current month
// 4. Get all application for current user for all time

// 5. Remove the last added application of this type
