import { Schema } from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";

export const TicketSchema = new Schema({
  eventId: { type: ObjectId, required: true, ref: 'Event'},
  accountId: { type: ObjectId, required: true, ref: 'Account'},

}, SCHEMA_OPTIONS)

TicketSchema.index({ accountId: 1, eventId: 1}, {unique: true})

TicketSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
  ref: 'Event'
})

TicketSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})