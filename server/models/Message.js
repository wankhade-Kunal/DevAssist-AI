import mongoose from "mongoose"

const messagesSchema = new mongoose.Schema( 
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

export default mongoose.model("Message", messagesSchema)