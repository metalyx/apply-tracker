import User from '../models/User.js';

class UserController {
    async register(req, res) {
        console.log(req.body);
        const { email, password } = req.body;

        if (email.trim() === '' || password.trim() === '') {
            return res.status(400).json({
                message: `Email and password can't be empty`,
            });
        }

        try {
            await User.create({ email, password });

            res.status(201).json({ message: 'Successful registration!' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new UserController();
