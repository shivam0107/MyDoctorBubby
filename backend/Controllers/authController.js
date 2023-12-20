import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import  Jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const generateToken = user => {
    return Jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_key, {
        expiresIn: "15d"
    })
}

export const register = async (req, res) => {
    try {
        const { email, password, name, role, photo, gender } = req.body;

        let user = null;
        if (role === 'patient') {
            user = await User.findOne({ email })
            
        } else if (role === 'doctor') {
            user = await Doctor.findOne({email})
        }

        //check if user exist
        if (user) {
            return res.status(400).json({
                message: "user already exist",
                
            });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password , salt)

        if (role == 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }
        if (role == "doctor") {
          user = new Doctor({
            name,
            email,
            password: hashPassword,
            photo,
            gender,
            role,
          });
        }

        await user.save()

        res.status(200).json({ success: true, message: "User successfully created" })
        

    } catch (err) { 
        res
        res.status(500).json({
            success: false,
            message: "Internal server error try again",
            "error":`${err}`
        });
        
    }
};

export const login = async (req, res) => {
        const { email, password } = req.body;

    try {
      
        let user = null 

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        //check if no user found 
        if (!user) {
            return res.status(404).json({
                message:"user not found"
            })
        }

        //check password match
        const isPasswordMatch = await bcrypt.compare(
            req.body.password,
            user.password)

        if (!isPasswordMatch) {
            return res.status(404).json({
                success:false,
                message:"password not matched"
            })
        }

        //generate jwt token
        const token = await generateToken(user);

        const { password, role, appointments, ...rest } = user._doc
        
        res.status(200).json({
            success: true,
            message: "successfully login",
            token,
            data: { ...rest },
            role
        })

    } catch (arr) {
        

  }
};