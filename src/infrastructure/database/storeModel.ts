import mongoose, { Schema, Document } from 'mongoose';

interface IStore extends Document {
  name: string;
  address: string;
}

const StoreSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
});

export default mongoose.model<IStore>('Store', StoreSchema);