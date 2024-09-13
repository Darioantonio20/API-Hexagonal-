import mongoose, { Schema, Document } from 'mongoose';

interface IEmployee extends Document {
  name: string;
  storeId: string;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true },
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);