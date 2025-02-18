import { Box, Container, Typography } from "@mui/material";
import AboutUsCard from "../components/AboutUsCard";

export const About: React.FC = () => {
  return (
    <Box sx={{ overflowX: "hidden", py: 5 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            mt: { xs: 2, sm: "40px", md: "60px" },
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            marginTop={5}
            marginBottom={10}
            sx={{
              mb: { xs: 4, sm: 3, md: 10 },
            }}
          >
            About BPS - The Story Behind
          </Typography>

          <Typography variant="body1">
            <b>BIL Pave Solutions </b> - Building Beauty, Shaping the Future In
            a world where fast pace and indifference seem to take over, we, the
            team at <b>BIL Pave Solutions (BPS)</b>, believe in beauty, in real
            connections, and in the future we are building together. We dedicate
            our hearts and expertise to outdoor paving and curbing, transforming
            ordinary spaces into storybook settings where aesthetics blend
            harmoniously with functionality.
            <br />
            <br />
            With over 10 years of experience, we have learned from the best in
            <b> Romania</b>, <b>Germany</b>, and the <b>Netherlands</b>, perfecting our techniques and
            bringing the finest solutions to the country where we currently
            operate. We have learned that it is not just about placing concrete
            pieces on the ground, but about creating an environment that
            inspires, offers comfort, and gives rise to precious moments. Each
            of our projects is a testament to our passion for detail and our
            desire to make the world a more beautiful place.
            <br />
            <br />
            <b>More than a Team - A Family</b>
            <br />
            <br />
            At <b>BPS</b>, we don't just see materials and tools - we see
            people, dreams, and aspirations. Every client who comes to us
            becomes part of our story, and their satisfaction is our greatest
            achievement. We love to help, to be there for those who want a
            well-thought-out, durable, and aesthetically pleasing space. In a
            society that is becoming colder, where many prefer isolation, we
            choose to be close, to listen, to collaborate, and to build
            together.
            <br />
            <br />
            We are aware that some have forgotten how to support one another,
            but we believe in a better future. We believe that every stone laid
            in its place, every perfectly aligned curb, and every renewed space
            contributes to a more beautiful world – not just visually, but also
            on a human level.
            <br />
            <br />
            Why Choose <b>BPS</b>?
            <br />
            <br />
            We don't just build walkways and terraces. We provide trust, safety,
            and durability. We work with high-quality materials, use modern
            techniques, and pay attention to every detail. But more than
            anything, we put our heart into everything we do.
            <br />
            Our motto, “Believe in the things that cannot be seen, and your
            reward will be to see the things you believed in,” is not just a set
            of beautiful words, but a philosophy that guides our every step.
            Because before a project takes shape, there must be a vision, a
            belief that what seems like just an idea today will become reality
            tomorrow.
            <br />
            <br />
            <b>Let's Build Together!</b>
            <br />
            <br />
            If you dream of an outdoor space that reflects your personality,
            where beauty meets functionality, then BIL Pave Solutions is the
            partner you need. We don’t see a project as just work; we see it as
            an opportunity to make the world a more welcoming, warmer, and
            better-organized place.
            <br />
            <br />
            <b>Choose to believe. Choose to build beauty together!</b>
          </Typography>
          <AboutUsCard />
        </Box>
      </Container>
    </Box>
  );
};
