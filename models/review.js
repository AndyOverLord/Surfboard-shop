const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema ({
    body: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('User', ReviewSchema)

/*Review:
- body <string>
- author - object id (ref user)
*/