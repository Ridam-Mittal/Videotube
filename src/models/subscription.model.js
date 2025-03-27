import mongoose from "mongoose";

const subscriptionSchema = new Schema({

    subscriber: {
        type: Schema.Types.ObjectId,     // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,     // one whose channel is being subscribed, the owner of that channel
        ref: "User"
    }
},{
    timestamps: true
})


export const Subscription = mongoose.model("Subscription", subscriptionSchema)