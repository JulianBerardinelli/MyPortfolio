
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


export default function NextCard({ header }: { header: string }) {
    const [count, setCount] = useState(0);

    const [imageIndex1, setImageIndex1] = useState(0);
    const [imageIndex2, setImageIndex2] = useState(0);
    const [imageIndex3, setImageIndex3] = useState(0);
    const [imageIndex4, setImageIndex4] = useState(0);

    const illust1 = ["projects/portfolio-1.jpg", "projects/portfolio-2.jpg"];
    const illust2 = ["projects/facu-door-insta.webp", "projects/port-inst.webp"];
    const illust3 =["projects/facu-data-insta.webp", "projects/data-inst.webp"];
    const illust4 =["projects/facu-clubs-insta.webp", "projects/percorso-inst.webp"];

    useEffect(() => {
        // Cambia la imagen del primer conjunto cada 5 segundos
        const intervalId1 = setInterval(() => {
            setImageIndex1((prevIndex) => (prevIndex + 1) % illust1.length);
        }, 3000);

        // Cambia la imagen del segundo conjunto cada 5 segundos
        const intervalId2 = setInterval(() => {
            setImageIndex2((prevIndex) => (prevIndex + 1) % illust2.length);
        }, 3000);

        const intervalId3 = setInterval(() => {
            setImageIndex3((prevIndex) => (prevIndex + 1) % illust3.length);
        }, 3000);

        const intervalId4 = setInterval(() => {
            setImageIndex4((prevIndex) => (prevIndex + 1) % illust4.length);
        }, 3000);

        // Limpia los intervalos al desmontar el componente
        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
            clearInterval(intervalId4);
        };
    }, []);

    return (
        <div className=" gap-2 grid grid-cols-12 grid-rows-1">
            <Card

                isFooterBlurred
                className="w-full col-span-12 sm:col-span-12"
            >
                <Image

                    removeWrapper
                    alt="stickers"
                    className=" z-0 w-full h-full object-cover"
                    src={illust1[imageIndex1]}
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                    removeWrapper
                    alt="Card background"
                    className=" z-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:opacity-80 group-hover:filter-blur"
                    src={illust2[imageIndex2]}
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                    removeWrapper
                    alt="Card background"
                    className=" z-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:opacity-80 group-hover:filter-blur"
                    src={illust3[imageIndex3]}
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                    removeWrapper
                    alt="Card background"
                    className=" z-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:opacity-80 group-hover:filter-blur"
                    src={illust4[imageIndex4]}
                />
            </Card>
        </div>

    )
}

