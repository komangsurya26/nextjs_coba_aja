import { Schema,model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "email already"],
        required: [true, 'email is required']
    },
    username: {
        type: String,
        required:[true, 'username already'],
        match: [/^[a-zA-Z0-9]+$/, 'username invalid must be unique']
    },
    image: {
        type: String
    }
});

const User = models.User || model("User", UserSchema);

export default User;