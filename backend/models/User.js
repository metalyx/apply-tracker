import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/, // Email format validation using a regular expression
    },
    password: {
        type: String,
        required: true,
        validate: {
            // Validate password length before hashing
            validator: (value) => value.length >= 6,
            message: 'Password must be at least 6 characters long',
        },
    },
});

// A pre-save hook to hash the password before saving it to the database
User.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        user.password = hashedPassword;

        next();
    } catch (error) {
        return next(error);
    }
});

export default model('User', User);
