import React, { useState } from 'react'
import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";
import {HeartIcon} from "./Components/HeartIcon";
import {PauseCircleIcon} from "./Components/PauseCircle";
import {NextIcon} from "./Components/NextIcon";
import {PreviousIcon} from "./Components/PreviousIcon";
import {RepeatOneIcon} from "./Components/RepeatOnlyOnce";
import ReactAudioPlayer from 'react-audio-player';
import {useDispatch,useSelector} from 'react-redux'
import {ShuffleIcon} from "./Components/ShuffleIcon";
export const Music = () => {
  const usename = useSelector((state) => state.user.value.username);
    const [liked, setLiked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className='bg-gradient-to-r from-pink-500 hover:to-yellow-500 h-[100vh]'>

{/* <ReactAudioPlayer
    src="https://drive.google.com/uc?id=1VR9l1UmFNXt0xRYY_EXymgZxSTfid-nO"
    controls
  /> */}

{/* 
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
 <h1>{usename} </h1>
        <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-full "
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={100}
              shadow="md"
              src="https://e0.pxfuel.com/wallpapers/51/62/desktop-wallpaper-group-poster-song-daft-punk-electronic-music-random-access-memories-single-get-lucky-for-section-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0-music-poster.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={50}
                
              />
              
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOneIcon className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
    </div>
  )
}
