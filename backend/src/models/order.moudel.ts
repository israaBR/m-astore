import {model , Schema , Types} from 'mongoose';
import { Parfum, ParfumSchema } from './parfum.model';
import { OrderStatus } from '../constants/order_status';



export interface LatLng{
    lat: string;
    lng:string;
}


export interface OrderItem{
    parfum:Parfum;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema <OrderItem>(
    {
        parfum:{type: ParfumSchema, required: true},
        price:{type: Number, required: true},
        quantity:{type: Number, required: true},
    }
);


export interface Order{
    id : string;
    items : OrderItem[];
    name :string;
    address:string;
    paymentId:string;
    totalPrice: number;
    status : OrderStatus;
    user: Types.ObjectId;
    updatedAt : Date;
    createdAt : Date; 
}


const orderSchema = new Schema<Order> ({
    name: {type: String , required: true},
    address : {type :String, required: true},
    paymentId : {type:String},
    totalPrice : {type:Number, required:true},
    items : {type: [OrderItemSchema], required:true},
    status : {type:String, default: OrderStatus.NEW},
    user : {type:Schema.Types.ObjectId, required:true},

},{
    timestamps: true,
    toJSON: {
        virtuals : true
    },
    toObject:{
        virtuals:true
    }


});


export const OrderModel = model('order', orderSchema);