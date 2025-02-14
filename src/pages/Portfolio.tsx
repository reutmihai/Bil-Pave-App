import { Box, Container, Typography } from "@mui/material";

export const Portfolio: React.FC = () => {
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
            mt: { xs: 2, sm: "80px", md: "100px" },
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" marginBottom={15}>
            PPORTFOLIO BPS
          </Typography>
          <Typography variant="body1">
            We build with passion, we deliver excellence! Every project tells a
            story. A story about dedicated work, about teams united by a common
            vision, about challenges turned into opportunities. Over the years,
            we have devoted our efforts and expertise to bringing impressive
            projects to life, collaborating with industry leaders. We have had
            the honor of working alongside renowned companies such as KWS Infra,
            Thannhauser, and Blue-3, contributing to the development of
            essential infrastructures—from highways and commercial spaces to
            large-scale projects for business giants, including Microsoft. Each
            project is a testament to our professionalism, attention to detail,
            and commitment to excellence. Regardless of the location—Romania,
            Germany, or the Netherlands—our standards remain the same: quality,
            durability, and innovation. We invite you to explore our portfolio
            and become part of this success story.
          </Typography>
          <Typography variant="h5">Projects in Romania</Typography>
          <Typography variant="body1">
            In Romania, we have focused on landscaping courtyards and alleys,
            transforming spaces into durable, functional, and aesthetic areas.
            Whether it's residential properties, company headquarters, or
            commercial spaces, each project reflects our attention to detail and
            the high-quality execution that defines us.
          </Typography>

          {/* Poze proiecte Romania */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            {/* Aici vei adăuga componentele de imagine */}
          </Box>

          <Typography variant="h5">Projects in Germany</Typography>

          <Typography variant="body1">
            In Germany, we have had the honor of working with prestigious
            partners, contributing to the construction of essential
            infrastructures. Rigorous planning, precision, and adherence to the
            highest quality standards have guided us at every stage of these
            projects.
          </Typography>

          {/* Poze proiecte Germania */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            {/* Aici vei adăuga componentele de imagine */}
          </Box>

          <Typography variant="h5">
            Projects in the Netherlands
          </Typography>
            <Typography variant="body1">
              In the Netherlands, we have had the opportunity to work on
              industrial-level projects, contributing to the infrastructure of
              state-of-the-art data centers for technology giants like
              Microsoft. We were responsible for constructing roads and
              sidewalks, ensuring durability, functionality, and seamless
              integration into these advanced technological ecosystems.
            </Typography>
            {/* Poze proiecte Olanda */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                mt: 4,
              }}
            >
              {/* Aici vei adăuga componentele de imagine */}
            </Box>
            <Typography variant="body1" fontSize="20px" marginTop={15}>
              Each project is a reflection of our passion and determination. No
              matter the complexity of the work, we ensure that we deliver
              sustainable, innovative, and top-quality solutions. If you are
              interested in collaborating with us, don't hesitate to contact us.
              Together, we can build the future!{" "}
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};
