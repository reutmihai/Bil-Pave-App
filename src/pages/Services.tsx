import { Box, Container, List, ListItem, Typography } from "@mui/material";
import SelectApplicationModal from "../components/SelectAplicationModal";
import picture1 from "../assets/images/services/picture1.webp";
import picture2 from "../assets/images/services/picture2.webp";
import picture3 from "../assets/images/services/picture3.webp";
import picture4 from "../assets/images/services/picture4.webp";
import picture5 from "../assets/images/services/picture5.webp";
import picture6 from "../assets/images/services/picture6.webp";
import picture7 from "../assets/images/services/picture7.webp";
import picture8 from "../assets/images/services/picture8.webp";
import picture9 from "../assets/images/services/picture9.webp";
import picture10 from "../assets/images/services/picture10.webp";
import picture11 from "../assets/images/services/picture11.webp";
import picture12 from "../assets/images/services/picture12.webp";
import picture13 from "../assets/images/services/picture13.webp";
import picture14 from "../assets/images/services/picture14.webp";
import picture15 from "../assets/images/services/picture15.webp";
import picture16 from "../assets/images/services/picture16.webp";
import picture17 from "../assets/images/services/picture17.webp";
import picture18 from "../assets/images/services/picture18.webp";
import picture19 from "../assets/images/services/picture19.webp";
import picture20 from "../assets/images/services/picture20.webp";
import picture21 from "../assets/images/services/picture21.webp";
import picture22 from "../assets/images/services/picture22.webp";
import picture23 from "../assets/images/services/picture23.webp";
import picture24 from "../assets/images/services/picture24.webp";
import picture25 from "../assets/images/services/picture25.webp";
import picture26 from "../assets/images/services/picture26.webp";
import picture27 from "../assets/images/services/picture27.webp";
import picture28 from "../assets/images/services/picture28.webp";
import picture29 from "../assets/images/services/picture29.webp";
import picture30 from "../assets/images/services/picture30.webp";
import picture31 from "../assets/images/services/picture31.webp";
import picture32 from "../assets/images/services/picture32.webp";

const imgFlex = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  flexWrap: "wrap",
  gap: 3,
  justifyContent: "center",
  m: { xs: 4, sm: 0 },
};
const imgStyles = {
  maxHeight: "350px",
  height: "auto",
  // width: "100%",
  width: "auto",
  maxWidth: "100%",
};

const subtitleStyle = {
  margin: {xs:"10px 0px", sm:"30px 0px"}
}

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
          mt: { xs: 2, sm: "40px", md: "60px" },
          px: { xs: 2, sm: 4 },
          gap: 1,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
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
          Our Services - The Science Behind a Perfect Pavement
        </Typography>
        <Typography variant="body1" pb={5} fontSize={"22px"}>
          <b>At Bil Pave Solutions</b> (BPS), we don't just lay pavement - we
          build durable foundations. Proper ground preparation is essential for
          a strong and visually appealing pavement. Below, we outline the
          professional process we follow to ensure our solutions remain stable,
          even in extreme weather conditions.
        </Typography>

        <picture>
          <source srcSet={picture1} type="image/webp" />
          <Box
            component="img"
            src="../assets/images/services/picture1.webp"
            alt="Descriere imagine"
            loading="lazy"
            sx={{ ...imgStyles }}
          />
        </picture>

        <Typography variant="h5" sx={{...subtitleStyle}} gutterBottom>
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
        </List>

        <picture>
          <source srcSet={picture2} type="image/webp" />
          <Box
            component="img"
            src={picture2}
            alt="Descriere imagine"
            loading="lazy"
            sx={{ ...imgStyles }}
          />
        </picture>
        <List>
          <ListItem>
            <Typography variant="body1">
              For residential yards and pathways, we typically excavate to a
              depth of 40-50 cm, depending on the soil type and expected load.
              For projects intended for heavy vehicle traffic, the excavation
              depth can reach 100-120 cm.{" "}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" sx={{...subtitleStyle}} gutterBottom>
          2. Drainage Systems - Protecting Your Pavement and Property
        </Typography>
        <Typography variant="body1" pb={2}>
          At <b>BIL Pave Solutions (BPS)</b>, we understand how crucial proper
          water management is for the durability of your pavement and the
          comfort of your property. That's why we offer professional underground
          drainage solutions, efficiently capturing and directing rainwater to
          prevent accumulations that could damage the foundation, pavement, or
          other structures in your yard.
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
          <Box sx={{ ...imgFlex }}>
            {[picture3, picture4, picture5].map((src, index) => (
              <picture key={index}>
                <source srcSet={src} type="image/webp" />
                <Box
                  component="img"
                  sx={{ ...imgStyles }}
                  src={src}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Box>
          <ListItem>
            <Typography variant="body1">
              We use perforated or smooth PVC pipes, depending on the needs, to
              direct water to a safe area, such as a drainage system or a
              collection basin.
            </Typography>
          </ListItem>
          <Box sx={{ ...imgFlex }}>
            {[picture6, picture7].map((src, index) => (
              <picture key={index}>
                <source srcSet={src} type="image/webp" />
                <Box
                  component="img"
                  sx={{ ...imgStyles }}
                  src={src}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Box>
          <ListItem>
            <Typography variant="body1">
              We prevent water accumulation beneath the pavement by using gravel
              drainage layers, which allow for efficient water runoff.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" sx={{...subtitleStyle}} gutterBottom>
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
        <Box sx={{ ...imgFlex }}>
          {[picture8, picture9].map((src, index) => (
            <picture key={index}>
              <source srcSet={src} type="image/webp" />
              <Box
                component="img"
                sx={{ ...imgStyles }}
                src={src}
                alt={`Paving example ${index + 1}`}
                loading="lazy"
              />
            </picture>
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
        <Typography variant="body2">
          Conclusion: A well-designed drainage system is an investment in the
          comfort and durability of your yard. At BIL Pave Solutions, we combine
          technical expertise with efficient solutions to ensure you have a dry,
          well-organized space without water accumulation issues.
        </Typography>

        <Typography variant="h5" sx={{...subtitleStyle}} gutterBottom>
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
        </List>
        <picture>
          <source srcSet={picture10} type="image/webp" />
          <Box
            component="img"
            sx={{ ...imgStyles }}
            src={picture10}
            alt="Descriere imagine"
            loading="lazy"
          />
        </picture>
        <List>
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
        <Box sx={{ ...imgFlex }}>
          {[picture11, picture12].map((src, index) => (
            <picture key={index}>
              <source srcSet={src} type="image/webp" />
              <Box
                component="img"
                sx={{ ...imgStyles }}
                src={src}
                alt={`Paving example ${index + 1}`}
                loading="lazy"
              />
            </picture>
          ))}
        </Box>
        <Typography variant="h5" sx={{...subtitleStyle}} gutterBottom>
          5. Compaction - Long-Term Stability
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              Compaction is performed using a vibrating plate or a roller
              compactor to achieve an optimal level of density. The weight of
              the compactors determines the compaction distance.
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
            {[picture13, picture14].map((src, index) => (
              <picture key={index}>
                <source srcSet={src} type="image/webp" />
                <Box
                  component="img"
                  sx={{ ...imgStyles }}
                  src={src}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Box>
          <ListItem>
            <Typography variant="body1">
              For residential yards, the compacted layer reaches 40-45 cm, while
              in industrial areas with heavier vehicle traffic, this layer can
              extend to 90-100 cm, depending on the mechanical stress on the
              surface. These dimensions may vary depending on the climate of the
              respective country.
            </Typography>
          </ListItem>
          <Typography variant="body2">
            The Role of Climate in Pavement Durability:
          </Typography>
          <ListItem>
            <Typography variant="body1">
              Climate plays a crucial role in the long-term stability of
              pavement. In regions with harsh winters, freezing can lift the
              soil, and thawing can cause uneven settling.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Frost and thaw cycles can lead to expansions and contractions in
              the soil, gradually resulting in pavement irregularities.
            </Typography>
          </ListItem>
          <Typography variant="body2">To counteract these effects:</Typography>
          <ListItem>
            <Typography variant="body1">
              The compacted layer must be thick enough and properly compacted to
              prevent soil movements.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Using a crushed stone sub-base allows for proper drainage,
              reducing water accumulation that could lead to freezing and soil
              expansion.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" sx={{...subtitleStyle}} gutterBottom>
          6. Curb Installation - Defining and Stabilizing the Paved Area
        </Typography>
        <Typography variant="body1">
          Whether for your garden, yard, or industrial areas, curbs provide
          clear boundaries and protection against displacement caused by
          external forces and weather conditions. In road construction, they
          also play a key role in structuring traffic spaces.
        </Typography>
        <Box sx={{ ...imgFlex }}>
          {[picture15, picture16].map((src, index) => (
            <picture key={index}>
              <source srcSet={src} type="image/webp" />
              <Box
                component="img"
                sx={{ ...imgStyles }}
                src={src}
                alt={`Paving example ${index + 1}`}
                loading="lazy"
              />
            </picture>
          ))}
        </Box>
        <Typography variant="body2">
          The Role of Curbs in Pavement Structure:
        </Typography>
        <Typography variant="body1">
          Curbs are not just a decorative element; they serve essential
          functions:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              Define the paved surface, creating a clear transition between
              paved areas and grass, pathways, or roads.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Maintain pavement stability, preventing pavers from shifting over
              time, especially in high-traffic areas or under natural forces
              like rain and freeze-thaw cycles.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Set the final pavement level, ensuring a uniform height and
              preventing accidental edge sinking.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Guide water drainage, helping control runoff and preventing water
              accumulation that could damage the underlying soil.
            </Typography>
          </ListItem>
          <Typography variant="body2">
            Types of Curbs and Their Applications
          </Typography>
          <Typography variant="body1">
            Depending on the project's needs, we use different types of curbs:
          </Typography>
          <ListItem>
            <Typography variant="body1">
              <b>Garden curbs</b> - smaller in size, used to separate pedestrian
              walkways, flower beds, or lawns.
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
            {[picture17, picture18].map((src, index) => (
              <picture key={index}>
                <source srcSet={src} type="image/webp" />
                <Box
                  component="img"
                  sx={{ ...imgStyles }}
                  src={src}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Box>
          <ListItem>
            <b>Residential curbs</b> - used for yards and walkways, providing
            both aesthetic appeal and structural support for the pavement.
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
            {[picture19, picture20].map((src, index) => (
              <picture key={index}>
                <source srcSet={src} type="image/webp" />
                <Box
                  component="img"
                  sx={{ ...imgStyles }}
                  src={src}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Box>
          <ListItem>
            <Typography variant="body1">
              <b>Industrial and road curbs</b> - durable and robust, used along
              roads, in parking lots, or areas requiring high load resistance.
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
            {[picture21, picture22, picture23].map((src, index) => (
              <picture key={index}>
                <source srcSet={src} type="image/webp" />
                <Box
                  component="img"
                  sx={{ ...imgStyles }}
                  src={src}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Box>
        </List>
        <Typography variant="body2">
          The Process of Border Installation:
        </Typography>
        <List>
          <Typography variant="body1">
            <b>A. Excavation of the Trench and Foundation Preparation</b>
          </Typography>
          <ListItem>
            <Typography variant="body1">
              Before installation, we excavate a trench 20-30 cm deep (depending
              on the type of border).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              At the bottom of the trench, we apply a compacted layer of gravel
              (granulation 0-63 mm) of about 10-15 cm to prevent future
              settlement.
            </Typography>
          </ListItem>
          <Typography variant="body1">
            <b>B. Securing the Borders with Concrete</b>
          </Typography>
          <ListItem>
            <Typography variant="body1">
              The borders are fixed on a semi-dry concrete bed (B250 or B300,
              depending on the mechanical load).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              The thickness of the concrete layer should be 10-15 cm beneath the
              border and 10 cm on the sides for additional anchoring.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              For areas with heavy traffic, the borders can be secured with a
              thicker concrete layer and greater depths for increased strength.
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
            {[picture24, picture25].map((src, index) => (
              <picture key={index}>
                <source srcSet={src} type="image/webp" />
                <Box
                  component="img"
                  sx={{ ...imgStyles }}
                  src={src}
                  alt={`Paving example ${index + 1}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Box>
          <ListItem>
            <Typography variant="body1">
              The borders are carefully placed, perfectly aligned, using a
              leveling ruler or a stretched line.
            </Typography>
          </ListItem>
        </List>
        <picture>
          <source srcSet={picture26} type="image/webp" />
          <Box
            component="img"
            src="../assets/images/services/picture26"
            alt="Descriere imagine"
            loading="lazy"
            sx={{ ...imgStyles }}
          />
        </picture>

        <List>
          <ListItem>
            <Typography variant="body1">
              A small joint of about 4-6 mm is left between them every 20 meters
              to allow slight expansion.
            </Typography>
          </ListItem>
        </List>
        <Box sx={{ ...imgFlex }}>
          {[picture27, picture28].map((src, index) => (
            <picture key={index}>
              <source srcSet={src} type="image/webp" />
              <Box
                component="img"
                sx={{ ...imgStyles }}
                src={src}
                alt={`Paving example ${index + 1}`}
                loading="lazy"
              />
            </picture>
          ))}
        </Box>
        <Typography variant="body1">
          Borders are not just a design detail, but a structural element that
          affects the durability of the entire pavement. At BIL Pave Solutions,
          we ensure that each border is properly installed, durable, and
          aesthetically pleasing, providing a result that remains stable for
          years to come.
        </Typography>
        <Typography variant="h5" sx={{...subtitleStyle}} gutterBottom>
          7. Professional Pavement Installation - Precision, Durability, and
          Aesthetics
        </Typography>
        <Box sx={{ ...imgFlex }}>
          {[picture29, picture30].map((src, index) => (
            <picture key={index}>
              <source srcSet={src} type="image/webp" />
              <Box
                component="img"
                sx={{ ...imgStyles }}
                src={src}
                alt={`Paving example ${index + 1}`}
                loading="lazy"
              />
            </picture>
          ))}
        </Box>
        <Typography variant="body1">
          The installation of the pavement is a process that requires
          experience, precision, and attention to detail. At BIL Pave Solutions,
          we use materials and techniques tailored to each project, selecting
          the appropriate thickness based on the purpose of the surface:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              <b>4 cm</b> - for pedestrian walkways and low-traffic areas.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <b>6 cm</b>- ideal for residential yards and parking areas.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <b>8-10 cm</b> - for areas with heavy vehicle traffic and
              industrial zones.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1">
          We use professional cutting equipment, which allows us to make precise
          cuts and perfect finishes in areas where the pavement, curbs, and
          asphalt need to be adjusted. The details of these cuts reflect the
          quality of the installation, providing a uniform and elegant
          appearance.
        </Typography>
        <Box sx={{ ...imgFlex }}>
          {[picture31, picture32].map((src, index) => (
            <picture key={index}>
              <source srcSet={src} type="image/webp" />
              <Box
                component="img"
                sx={{ ...imgStyles }}
                src={src}
                alt={`Paving example ${index + 1}`}
                loading="lazy"
              />
            </picture>
          ))}
        </Box>
        <Typography variant="body1">
          Not only is technique important, but also visual harmony. We adapt the
          color of the pavement to the surrounding environment, seamlessly
          integrating it into the existing space. As for the installation
          pattern, regardless of the installation design, we adapt to any style
          and focus on creativity, ensuring that each project is unique.
        </Typography>
        <Typography variant="h6">
          <u>Conclusion:</u> Why choose <b>BPS</b>? <br />
          R: If you want a pavement that remains stable and flawless for many
          years, choose professionals. Choose precision, durability, and
          elegance.
          <br /> Choose <b>BIL Pave Solutions</b>!
        </Typography>
        <SelectApplicationModal
          buttonText="Apply for a Service"
          buttonStyle={{
            position: "relative",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "12px 24px",
          }}
        />
      </Box>
    </Container>
  );
};
