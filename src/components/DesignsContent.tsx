
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


export default function NextCard({ header }: { header: string }) {
  const [count, setCount] = useState(0);

  const [imageIndex1, setImageIndex1] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);

  const illust1 = ["designs/illustration-1.webp", "designs/illustration-2.webp", "designs/illustration-3.webp", "designs/illustration-6.webp"];
  const illust2 = ["designs/illustration-5.webp", "designs/illustration-4.webp", "designs/illustration-8.webp", "designs/illustration-7.webp"];

  useEffect(() => {
    // Cambia la imagen del primer conjunto cada 5 segundos
    const intervalId1 = setInterval(() => {
      setImageIndex1((prevIndex) => (prevIndex + 1) % illust1.length);
    }, 5000);

    // Cambia la imagen del segundo conjunto cada 5 segundos
    const intervalId2 = setInterval(() => {
      setImageIndex2((prevIndex) => (prevIndex + 1) % illust2.length);
    }, 5000);

    // Limpia los intervalos al desmontar el componente
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div className=" gap-2 grid grid-cols-12 grid-rows-2">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className=" z-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:opacity-80 group-hover:filter-blur"
          src={illust1[imageIndex1]}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]" >
        <Image
          removeWrapper
          alt="illustrations"
          className=" z-0 w-full h-full object-cover"
          src={illust2[imageIndex2]}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          isZoomed
          removeWrapper
          alt="illustrations"
          className=" z-0 w-full h-full object-cover"
          src="/designs/vinil-1.webp"
        />
      </Card>
      <Card

        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <Image
          isZoomed
          removeWrapper
          alt="stickers"
          className=" z-0 w-full h-full object-cover"
          src="/designs/vinil-2.webp"
        />
        <CardFooter
          className="absolute bg-black/40 bottom-0  z-10 border-t-1 border-default-600 dark:border-default-100"
        >
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Julian Berardinelli"
              className="rounded-full w-11 h-11 bg-black"
              src="data:image/jpeg;base64,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"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Stickers Shop</p>
              <p className="text-tiny text-white/60">
                My first entrepreneurial venture.
              </p>
            </div>
          </div>
          <a href="https://www.instagram.com/vinilos.jb/?hl=es" target="_blank"><Button radius="full" size="sm">View More</Button></a>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <Image
          removeWrapper
          alt="vinilos.jb"
          className=" z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/designs/brand.webp"
        />
        <CardFooter
          className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between"
        >
          <div>
            <p className="text-black text-tiny">@vinilos.jb</p>
            <p className="text-black text-tiny">View More.</p>
          </div>
          <a href="https://www.instagram.com/vinilos.jb/?hl=es" target="_blank">
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Follow on Instagram
            </Button></a>

        </CardFooter>
      </Card>

    </div>

  )
}

