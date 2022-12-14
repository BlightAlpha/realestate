import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

 const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center!important' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} alt='banner' />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl' bg="#008080" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);


export default function Home  ({ propertiesForSale, propertiesForRent })  {
  return (
  <Box>
    <Banner
      purpose='RENT A HOME'
      title1='Homes for'
      title2='Rent'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='More Renting Properties'
      linkName='/search?purpose=for-rent'
      imageUrl='https://d26tqmt1mjuqkn.cloudfront.net/cms/articles/1006/1571350009.7379_renting-a-home.jpg'
    />
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    <Banner
      purpose='BUY A HOME'
      title1='Deam Home'
      title2='for Sell'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='More Buying Properties'
      linkName='/search?purpose=for-sale'
      imageUrl='https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1590677543/photos/312890_original.jpg'
    />
      <Flex flexWrap='wrap'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
</Flex>
  </Box>
)
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
