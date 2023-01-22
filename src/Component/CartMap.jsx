
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

function CartMap({ price, img, OS, Memory, Processor, name, RemoveItem }) {
    return (
        <>

            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={img}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>
                            Processer: {Processor}
                        </Text>
                        {/*<Text>
                            Memory: {Memory}
                        </Text>
                        <Text>
                            OS: {OS}
                        </Text>*/}
                        <Text color='blue.600' fontSize='2xl'>
                            {price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={(i) => { RemoveItem(i) }}>
                            Remove
                        </Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>

        </>
    )
}

export default CartMap