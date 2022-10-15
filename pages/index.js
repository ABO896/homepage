import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box, Button, chakra, Container,
  Heading, Link, List,
  ListItem, SimpleGrid, useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import thumbYouTube from '../public/images/links/youtube2.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, Im an ISU student who recently got into programming!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alvaro Balduz
          </Heading>
          <p>Student / Junior programmer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          Alvaro is a student at ISUtrecht who has many different passions from
          a young age computers have played a big role in his life. Recently, he
          decided to begin learning how to program as he would like that to be
          something he studies in the future{' '}
          <NextLink
            href="https://www.youtube.com/channel/UCFqlC2JCjIoDQp4xS4tODlA"
            passHref
          >
            <Link target="_blank">ABO896</Link>
          </NextLink>
          &quot; has more than 70 subscribers
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in Zaragoza, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Moved to Utrecht, The Netherlands and have lived there ever since, and
          joined ISUtrecht.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Began de DP programme at ISUtrecht and began to focus on programming.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Learning and practicing programming whilst going to school.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Football, Sports, Videogames, </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ABO896" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ABO896
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/AlvaroBalduz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @AlvaroBalduz (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/alvarofrfr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @alvaro.frfr
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCFqlC2JCjIoDQp4xS4tODlA"
            title="chillin"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

