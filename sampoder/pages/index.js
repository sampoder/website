import {
  Box,
  Card,
  Container,
  Image,
  Text,
  Flex,
  Heading,
  Button,
  Grid,
  Avatar,
  Badge,
  Link as A,
} from "theme-ui";
import Head from "next/head";

export default function Home() {
  return (
    <Container
      variant="narrow"
      sx={{ maxHeight: "100vh", overflowY: "hidden" }}
    >
      <Heading>
        <Heading as="h1" variant="neonMain">
          Sam Poder
          <p style={{ fontSize: "0.2em", lineHeight: '0', marginBlockStart: '0.3em' }}>Making random things on the internet</p>
        </Heading>
        <Heading as="h1" variant="neonSingapore">
          <span style={{ fontSize: "0.5em" }}>Located in</span>
          <br />
          SINGAPORE
        </Heading>
        <Heading as="h1" variant="neonAustralia">
          <span style={{ fontSize: "0.5em" }}>Made in</span>
          <br />
          AUSTRALIA
        </Heading>
      </Heading>
    </Container>
  );
}
