import { connectMongoDb } from '@/libs/connectMongoDb';
import Paint from '@/models/paintModel';
import { ObjectId } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: ObjectId } }
) => {
  try {
    await connectMongoDb();
    const res = await Paint.findById(params.id);
    return NextResponse.json(res);
  } catch (error) {}
};
