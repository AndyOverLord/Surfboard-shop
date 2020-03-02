const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    title: String,
    price: String,
    description: String,
    images: [String],
    lat: Number,
    lng: Number,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    reviews: [{type: Schema.Types.ObjectId, ref: 'reviews'}]
})

module.exports = mongoose.model('User', PostSchema)
/* Post
- title <string>
- price <float>
- description <string>
- images - an array of <string>
- location <string>
- lat - number
- Ing - number
- author - object id (ref User)
- reviews - array of object
*/