import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectDb } from "@utils/database";
import User from '@models/user.model'
const handler =NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,

        })
    ],
    async session({session}){
        const sessionUser= await User.findOne({email:session.email})
        session.user.id= sessionUser._id.toString()
        //to which user is currently using

    },
    async sigin({profile}){
        try{
            await connectDb()
            //check user  is exists
            const userExists=await User.findOne({email:profile.email});
            //create new user and save it to database
            if(!userExists){
                const createUser=await User.create({
                    email:profile.email,
                    name: profile.name.replace(" ", "").toLowercase(),
                    image: profile.image,
                })
            }
        }catch(error){
            console.log(error)
        }
    }
})

export {handler as GET, handler as POST};