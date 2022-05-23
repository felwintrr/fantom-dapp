import { ArrowForwardIcon } from "@chakra-ui/icons";
import {Image, Container, Stack} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <div>
      <Stack direction='row' overflow={'hidden'} alignItems='center' justifyContent='center' width='100%'>
        <Image
        boxSize="180px"
        display='inline-block'
        objectFit={'cover'}   
        src="0.png"
        alt="Punk NFT"
        padding='5px'
        height='100%'
      />
      <Image
       boxSize="180px"
        display='inline-block'
        objectFit={'cover'}   
        src="1.png"
        alt="Punk NFT"
        padding='5px'
        height='100%'
      />
      <Image
      boxSize="180px"
      display='inline-block'
        objectFit={'cover'}   
        src="2.png"
        alt="Punk NFT"
        padding='5px'
        height='100%'
      />
      <Image
      boxSize="180px"
        display='inline-block'
        objectFit={'cover'}   
        src="3.png"
        alt="Punk NFT"
        padding='5px'
        height='100%'
      />
      <Image
      boxSize="180px"
        display='inline-block'
        objectFit={'cover'}   
        src="4.png"
        alt="Punk NFT"
        padding='5px'
        height='100%'
      />
      <Image
       boxSize="180px"
        display='inline-block'
        objectFit={'cover'}   
        src="5.png"
        alt="Punk NFT"
        padding='5px'
        height='100%'
      />
    </Stack>
    </div>
  );
};
export default Gallery;
