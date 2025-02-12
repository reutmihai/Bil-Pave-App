import { Box, Container, List, ListItem, Typography } from "@mui/material";

const commonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
};

const picture3 = "images/services/picture3";
const picture4 = "images/services/picture4";
const picture5 = "images/services/picture5";
const picture6 = "images/services/picture6";
const picture7 = "images/services/picture7";
const picture8 = "images/services/picture8";
const picture9 = "images/services/picture9";
const picture11 = "images/services/picture11";
const picture12 = "images/services/picture12";

export const Services: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        px: { xs: 2, sm: 4 },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          mt: { xs: 10, sm: "80px", md: "100px" },
          px: { xs: 2, sm: 4 },
          gap: 1,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Typography variant="h5">
          Our Services - The Science Behind a Perfect Pavement
        </Typography>
        <Typography variant="body1" pb={2}>
          At Bil Pave Solutions (BPS), we don't just lay pavement - we build
          durable foundations. Proper ground preparation is essential for a
          strong and visually appealing pavement. Below, we outline the
          professional process we follow to ensure our solutions remain stable,
          even in extreme weather conditions.
        </Typography>

        <Box sx={commonStyles}>
          <picture>
            <source srcSet="images/services/picture1.webp" type="image/webp" />
            <img
              src="images/services/picture1.jpg"
              alt="Descriere imagine"
              loading="lazy"
              style={{
                maxHeight: "300px",
                height: "auto",
                maxWidth: "100%",
                width: "100%",
                objectFit: "contain",
                boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                borderRadius: "5px",
              }}
            />
          </picture>
        </Box>
        <Typography variant="h5" gutterBottom>
          1. Ground Preparation - The Foundation of Durability
        </Typography>
        <Typography variant="body1">
          The durability of any pavement depends on how well the ground beneath
          it is prepared. This process includes several essential steps:
        </Typography>
        <Typography variant="body2">
          Excavation and Soil Stabilization:
        </Typography>
        <List sx={{ pl: 2, pr: 2, wordWrap: "break-word" }}>
          <ListItem>
            <Typography variant="body1">
              The first step is removing the topsoil layer, stripping, and
              regrading the ground through excavation to eliminate organic
              materials that may decompose over time, causing uneven surfaces.
            </Typography>
          </ListItem>
          <Box sx={commonStyles}>
            <picture>
              <source
                srcSet="images/services/picture2.webp"
                type="image/webp"
              />
              <img
                src="images/services/picture2.jpg"
                alt="Descriere imagine"
                loading="lazy"
                style={{
                  maxHeight: "300px",
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%",
                  objectFit: "contain",
                  boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                  borderRadius: "5px",
                }}
              />
            </picture>
          </Box>
          <ListItem>
            <Typography variant="body1">
              For residential yards and pathways, we typically excavate to a
              depth of 40-50 cm, depending on the soil type and expected load.
              For projects intended for heavy vehicle traffic, the excavation
              depth can reach 100-120 cm.{" "}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          2. Drainage Systems - Protecting Your Pavement and Property
        </Typography>
        <Typography variant="body1" pb={2}>
          At BIL Pave Solutions (BPS), we understand how crucial proper water
          management is for the durability of your pavement and the comfort of
          your property. That's why we offer professional underground drainage
          solutions, efficiently capturing and directing rainwater to prevent
          accumulations that could damage the foundation, pavement, or other
          structures in your yard.
        </Typography>
        <Typography variant="body2">Water Collection and Direction:</Typography>
        <List sx={{ pl: 2, pr: 2, wordWrap: "break-word" }}>
          <ListItem>
            <Typography variant="body1">
              We install underground drainage pipes connected to the roof
              drainage system and stormwater channels to guide water beneath the
              pavement to a designated discharge point.
            </Typography>
          </ListItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              m: { xs: 4, sm: 0 },
            }}
          >
            {[picture3, picture4, picture5].map((src, index) => (
              <Box key={index} sx={commonStyles}>
                <picture>
                  <source srcSet={`${src}.webp`} type="image/webp" />
                  <img
                    src={`${src}.jpg`}
                    alt={`Paving example ${index + 1}`}
                    loading="lazy"
                    style={{
                      maxHeight: "300px",
                      height: "auto",
                      maxWidth: "100%",
                      width: "100%",
                      objectFit: "contain",
                      boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                      borderRadius: "5px",
                    }}
                  />
                </picture>
              </Box>
            ))}
          </Box>
          <ListItem>
            <Typography variant="body1">
              We use perforated or smooth PVC pipes, depending on the needs, to
              direct water to a safe area, such as a drainage system or a
              collection basin.
            </Typography>
          </ListItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              m: { xs: 4, sm: 0 },
            }}
          >
            {[picture6, picture7].map((src, index) => (
              <Box key={index} sx={commonStyles}>
                <picture>
                  <source srcSet={`${src}.webp`} type="image/webp" />
                  <img
                    src={`${src}.jpg`}
                    alt={`Paving example ${index + 1}`}
                    loading="lazy"
                    style={{
                      maxHeight: "300px",
                      height: "auto",
                      maxWidth: "100%",
                      width: "100%",
                      objectFit: "contain",
                      boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                      borderRadius: "5px",
                    }}
                  />
                </picture>
              </Box>
            ))}
          </Box>
          <ListItem>
            <Typography variant="body1">
              We prevent water accumulation beneath the pavement by using gravel
              drainage layers, which allow for efficient water runoff.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          3. Installation of Manholes and Access to Facilities
        </Typography>
        <Typography variant="body2">
          To maintain easy access to utilities in the yard, we install manholes
          at strategic points to ensure access is not blocked to:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              Pressure tanks or other water supply installations. • Irrigation
              systems or garden faucets.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Irrigation systems or garden faucets.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Access to inspection chambers for maintenance or repair work.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1">
          Each manhole is placed in a way that seamlessly integrates with the
          pavement, without compromising aesthetics or creating an obstacle.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            m: { xs: 4, sm: 0 },
          }}
        >
          {[picture8, picture9].map((src, index) => (
            <Box key={index} sx={commonStyles}>
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img
                  src={`${src}.jpg`}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                  style={{
                    maxHeight: "300px",
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                    objectFit: "contain",
                    boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                    borderRadius: "5px",
                  }}
                />
              </picture>
            </Box>
          ))}
        </Box>
        <Typography variant="body2">
          The Benefits of Professional Drainage:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              Prevents pavement damage and keeps the surface stable over time.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Prevents water accumulation that could affect the foundation of
              the house or the garden.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Ensures easy access to utilities without compromising the design
              of the yard.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Increases the lifespan of the paving system by eliminating the
              risk of settling or deformation.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1">
          <Typography variant="body2"> Conclusion: </Typography>- A
          well-designed drainage system is an investment in the comfort and
          durability of your yard. At BIL Pave Solutions, we combine technical
          expertise with efficient solutions to ensure you have a dry,
          well-organized space without water accumulation issues.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Support Layer - Correct Stone and Granulation
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              If the soil is unstable (clayey or wet), it is necessary to
              stabilize it with a layer of crushed stone or geotextile to
              prevent uneven settling.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              After excavation, we apply a layer of crushed stone with a
              granulation of 0-63 mm, which ensures proper drainage and the
              stability of the pavement.
            </Typography>
          </ListItem>
          <Box sx={commonStyles}>
            <picture>
              <source
                srcSet="images/services/picture10.webp"
                type="image/webp"
              />
              <img
                src="images/services/picture10.jpg"
                alt="Descriere imagine"
                loading="lazy"
                style={{
                  maxHeight: "300px",
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </picture>
          </Box>
          <ListItem>
            <Typography variant="body1">
              The next layer consists of limestone, gravel with a granulation of
              4-8 mm, or sand with a granulation of 0.4, which creates an even
              support for the paving installation.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              The support layer is compacted in successive layers to prevent
              future settling.
            </Typography>
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            m: { xs: 4, sm: 0 },
          }}
        >
          {[picture11, picture12].map((src, index) => (
            <Box key={index} sx={commonStyles}>
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img
                  src={`${src}.jpg`}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                  style={{
                    maxHeight: "300px",
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                    objectFit: "contain",
                    boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                    borderRadius: "5px",
                  }}
                />
              </picture>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
