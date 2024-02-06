import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const videoSchema = new Schema(
    {
        videoFile: {
            type: String ,
            required  : true
        },
        thumbail: {
            type: String ,
            required  : true
        },
        title: {
            type: String ,
            required  : true
        },
        description: {
            type: String ,
            required  : true
        },
        duration: {
            type: Number ,
            required  : true
        },
        views : {
            type: Number,
            default: 0
        },
        isPublished : {
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps : true
    }
)

    userSchema.pre("save", async function(next){
        if(!this.isModified("password")) return next

        this.password = bcrypt.hash(this.password, 10)
        next()
    })

    // defining custome method

export const Video = mongoose.model("Video", videoSchema)