import { connectMongoDb } from '@/libs/connectMongoDb';
import Paint from '@/models/paintModel';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectMongoDb();
    const res = await Paint.find();
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
};
