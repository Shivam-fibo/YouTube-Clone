import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/ApiError.js'
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
    const { fullName, username, email, password } = req.body

    if (fullName === "") {
        throw new ApiError(400, "Full Name is required")
    }
    if (username === "") {
        throw new ApiError(400, "username is required")
    }
    if (email === "") {
        throw new ApiError(400, "emailis required")
    }
    if (password === "") {
        throw new ApiError(400, "password is required")
    }
    const existedUser = User.findOne({
        $or :[{username}, {email}]
    })
    if(existedUser){
        throw new ApiError(409, "username or email is alredy exist")
    }

    const avatarLocalPath = req.file?.avatar[0]?.path;
    const coverImageLocalPath = req.file?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }
  
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar file is required")
    }
    User.create({
        fullName,
        avatar:avatar.url,
        converImage:coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })
    
    const createdUser = await User.findById(user_.id).select(
        "-password, -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500, "Something went wrong")
    }
    return res.status(201).json(
        new ApiResponse(200, "User registered Successfully")
    )
})

export { registerUser }