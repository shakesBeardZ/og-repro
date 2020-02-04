const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const xStoneSchema = new Schema({
    hashCode: {
        type: String,
        required: true,
    },
    owner: {    
        id:Schema.Types.ObjectId,
        type: { type: String,  enum: ["User", "Team" , "Guest"]}
    },
    type: {
        type: String,
        required: true,
    },
    dynamic: {
        type: Boolean,
        default: false
    },
    // domain used to create the short url
    domain: {
        type: String,
        default: 'false'
    },
    deleted: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    target: {
        type: String,
    },
    // here we store the template used to create the qr code 
    template: {
        type: Schema.Types.Mixed,
        default: null
    },
    og: {
        type: Schema.Types.Mixed,
        default: null
    },
    folder: String,
    brand: String,
    notes: {
        type: String
    },
    tags: [String],
    fallback_link: {
        type: String,
        default: 'none'
    },
    dynamic: {
        type: Boolean,
        default: true
    },
    attributes: {
        type: Schema.Types.Mixed,
        default: null
    },
    geotarget: {
        type: Schema.Types.Mixed,
        default: null
    },
    os_target: {
            type: Schema.Types.Mixed,
            default: null
    },
    device_target: {
            type: Schema.Types.Mixed,
            default: null
    },
    visits: [Schema.Types.ObjectId],
    link_visits_count: {
        type: Number,
        min: 0,
        default: 0
    },
    qr_visits_count: {
        type: Number,
        min: 0,
        default: 0
    },
    last_visit: {
        type: Schema.Types.Date,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    expiration_date: {
        type: Date,
    },
    fallback_exp: {
        type: String
    },
    activation_date: {
        type: Date,
    },
    validity_period: {
        start:  Date,
        end: Date,
    },
    countries: {
        type: Array,
    },
 
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

xStoneSchema.index({ target: 1 });
xStoneSchema.index({ notes: "text", tags: "text" , target: "text"})

module.exports =mongoose.model('Xstone', xStoneSchema);
