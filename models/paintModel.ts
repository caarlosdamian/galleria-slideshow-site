import mongoose, { Schema } from 'mongoose';

const PaintSchema = new Schema({

})

const Paint = mongoose.models.Paint || mongoose.model('Paint',PaintSchema);

export default Paint;
