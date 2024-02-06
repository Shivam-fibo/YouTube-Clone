import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username :{
        type: String,
        required : true,
        unique: true,
        trim: true,
        index:true,
        lowercase:true
    },
    email :{
        type: String,
        required : true,
        unique: true,
       
        lowercase:true
    },
    fullname :{
        type: String,
        required : true,
        trim:true,
        index:true
    },
    avatar :{
        type: String,
       
    },
    coverImage:{
        type:String
    },
    watchHistory :[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: true,
    },
    refreshToken :{
        type: String
    },
   
},
{
    timestamps : true
}
)

export const User = mongoose.model('User', userSchema)