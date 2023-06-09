import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json([
    {
      name: 'Filaberta',
      id: 1,
      image: 'http://placekitten.com/g/200/300',
      image2: 'http://placekitten.com/g/800/450',
    },
    {
      name: 'Garfield',
      id: 2,
      image: 'http://placekitten.com/g/200/300',
      image2: 'http://placekitten.com/g/800/450',
    },
    {
      name: 'Pancake',
      id: 3,
      image: 'http://placekitten.com/g/200/300',
      image2: 'http://placekitten.com/g/800/450',
    },
    {
      name: 'Rocket',
      id: 4,
      image: 'http://placekitten.com/g/200/300',
      image2: 'http://placekitten.com/g/800/450',
    },
  ]);
}
