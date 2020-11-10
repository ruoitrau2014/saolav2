import * as mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({        
    email: {type: String, unique: true}	,
    name:	String	,
    phone:	String	,
    gender:	Number	,
    options:	Object,	
    fid:	String	,
    gid:	String	,
    ID:	String	,
    created_at:	{ type: Date,    default: function () { return new Date;} },	
    updated_at:	{ type: Date,    default: function () { return new Date;} },	
    group: 	{type:String,	index: true},
    password: String
})

const account = mongoose.model('account', accountSchema)

export default account