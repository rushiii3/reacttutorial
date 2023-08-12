
import React, { useContext, useEffect, useState } from 'react';
import {Card, Skeleton, Button, toggle} from "@nextui-org/react";
import {AppContext} from './App'
import { useToggle } from './useToggle';
import { useData } from './useData';
export const Skeletonn = () => {
  
  const {handleCounteIncrease,handleCounterDecrease,handleCounterZero,count} = useData();
    const [isLoaded, setIsLoaded] = useState(false);
    const {Username} =  useContext(AppContext);
    const [isVisible,State] = useToggle();
    const toggleLoad = () => {
      setIsLoaded(!isLoaded);
    };
    useEffect(() => {
        setTimeout(() => setIsLoaded(!isLoaded), 3000)
      }, [""]);

      
  return (
    <div>
  <div className="flex flex-col gap-3">
    <Card className="w-[200px] space-y-5 p-4" radius="2xl">
      <Skeleton isLoaded={isVisible} className="rounded-lg">
        <div className="h-24 rounded-lg bg-secondary">
            <img src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" alt="" />
        </div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-secondary"></div>
          <p>
          {Username}
          </p>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
        </Skeleton>
      </div>
    </Card>
    <Button size="sm" variant="flat" color="secondary" onPress={toggleLoad}>
      {isLoaded ? "Show" : "Hide"} Skeleton
    </Button>
  </div>

    {
      !isVisible &&  <h1>Hrushi here</h1>
    }
  
  <Button onPress={State}></Button>
  <Button onPress={handleCounteIncrease}>Increase</Button>
  <Button onPress={handleCounterDecrease}>Decrease</Button>
  <Button onPress={handleCounterZero}>Zero</Button>
  <h1>{count}</h1>
    </div>
  )
}



