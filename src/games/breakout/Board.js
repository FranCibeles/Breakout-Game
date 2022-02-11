import { render } from '@testing-library/react';
import React from 'react'
import { useEffect, useRef } from 'react'
import { BallMovement } from './BallMovement';
import data from '../Data';
import WallCollision from './utils/WallCollision';
import Paddle from './Paddle';

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {
      const render = () =>  {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")

        let {ballObj, paddleProps} = data
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        //Handling the ball movement
        BallMovement(ctx, ballObj);
        
        //Handling the wall collisions
        WallCollision(ballObj, canvas);

        Paddle(ctx, canvas, paddleProps)


        requestAnimationFrame(render);
      };

    render();

    }, []);




  return (
    <canvas id="canvas" ref={canvasRef} height="500px" width="800px"></canvas>
  )
  }
