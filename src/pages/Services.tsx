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
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

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
  margin: { xs: "10px 0px", sm: "30px 0px" },
};

export const Services: React.FC = () => {
  const { t } = useTranslation();
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
          gap: 2,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Helmet>
          <title>Paving Services BPS - Construction Company</title>
          <meta
            name="description"
            content="We offer professional paving services for all types of construction projects. Contact us for more details."
          />
          <meta
            name="keywords"
            content="paving, construction services, paving for driveways, walkways, sidewalks"
          />
          <meta
            property="og:title"
            content="Paving Services - Construction Company"
          />
          <meta
            property="og:description"
            content="We offer professional paving services for all types of construction projects. Contact us for more details."
          />
          <meta property="og:image" content="paving-image-url.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Paving Services - Construction Company"
          />
          <meta
            name="twitter:description"
            content="We offer professional paving services for all types of construction projects. Contact us for more details."
          />
        </Helmet>
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{
            my: { xs: 4, sm: 3, md: 10 },
          }}
        >
          {t("services.title")}
        </Typography>
        <Typography variant="body1" pb={5} fontSize={"22px"}>
          {t("services.description")}
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

        <Typography variant="h5" sx={{ ...subtitleStyle }} gutterBottom>
          {t("services.subtitle1")}
        </Typography>
        <Typography variant="body1" id="1">
          {t("services.text1")}
        </Typography>
        <Typography variant="body2" id="2">
          {t("services.text2")}
        </Typography>
        <List sx={{ pl: 2, pr: 2, wordWrap: "break-word" }}>
          <ListItem>
            <Typography variant="body1" id="3">
              {t("services.text3")}
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
            <Typography variant="body1" id="4">
              {t("services.text4")}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ ...subtitleStyle }} gutterBottom>
          {t("services.subtitle2")}
        </Typography>
        <Typography variant="body1" id="5" pb={2}>
          {t("services.text5")}
        </Typography>
        <Typography variant="body2" id="6">
          {t("services.text6")}
        </Typography>
        <List sx={{ pl: 2, pr: 2, wordWrap: "break-word" }}>
          <ListItem>
            <Typography variant="body1" id="7">
              {t("services.text7")}
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
            <Typography variant="body1" id="8">
              {t("services.text8")}
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
            <Typography variant="body1" id="9">
              {t("services.text9")}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ ...subtitleStyle }} gutterBottom>
          {t("services.subtitle3")}
        </Typography>
        <Typography variant="body2" id="10">
          {t("services.text10")}
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1" id="11">
              {t("services.text11")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="12">
              {t("services.text12")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="13">
              {t("services.text13")}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1" id="14">
          {t("services.text14")}
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
        <Typography variant="body2" id="15">
          {t("services.text15")}
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1" id="16">
              {t("services.text16")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="17">
              {t("services.text17")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="18">
              {t("services.text18")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="19">
              {t("services.text19")}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body2" id="20">
          {t("services.text2")}
        </Typography>

        <Typography variant="h5" sx={{ ...subtitleStyle }} gutterBottom>
          {t("services.subtitle4")}
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1" id="21">
              {t("services.text21")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="22">
              {t("services.text22")}
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
            <Typography variant="body1" id="23">
              {t("services.text23")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="24">
              {t("services.text24")}
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
        <Typography variant="h5" sx={{ ...subtitleStyle }} gutterBottom>
          {t("services.subtitle5")}
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1" id="25">
              {t("services.text25")}
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
            <Typography variant="body1" id="26">
              {t("services.text26")}
            </Typography>
          </ListItem>
          <Typography variant="body2" id="27">
            {t("services.text27")}
          </Typography>
          <ListItem>
            <Typography variant="body1" id="28">
              {t("services.text28")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="29">
              {t("services.text29")}
            </Typography>
          </ListItem>
          <Typography variant="body2" id="30">
            {t("services.text30")}
          </Typography>
          <ListItem>
            <Typography variant="body1" id="31">
              {t("services.text31")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="32">
              {t("services.text32")}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ ...subtitleStyle }} gutterBottom>
          {t("services.subtitle6")}
        </Typography>
        <Typography variant="body1" id="33">
          {t("services.text33")}
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
        <Typography variant="body2" id="34">
          {t("services.text34")}
        </Typography>
        <Typography variant="body1" id="35">
          {t("services.text35")}
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1" id="36">
              {t("services.text36")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="37">
              {t("services.text37")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="38">
              {t("services.text38")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="39">
              {t("services.text39")}
            </Typography>
          </ListItem>
          <Typography variant="body2" id="40">
            {t("services.text40")}
          </Typography>
          <Typography variant="body1" id="41">
            {t("services.text41")}
          </Typography>
          <ListItem>
            <Typography variant="body1" id="42">
              {t("services.text42")}
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
            <Typography variant="body1" id="43">
              {t("services.text43")}
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
            <Typography variant="body1" id="44">
              {t("services.text44")}
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
        <Typography variant="body2" id="45">
          {t("services.text45")}
        </Typography>
        <List>
          <Typography variant="body2" id="46">
            {t("services.text46")}
          </Typography>
          <ListItem>
            <Typography variant="body1" id="47">
              {t("services.text47")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="48">
              {t("services.text48")}
            </Typography>
          </ListItem>
          <Typography variant="body2" id="49">
            {t("services.text49")}
          </Typography>
          <ListItem>
            <Typography variant="body1" id="50">
              {t("services.text50")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="51">
              {t("services.text51")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="52">
              {t("services.text52")}
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
            <Typography variant="body1" id="53">
              {t("services.text53")}
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
            <Typography variant="body1" id="54">
              {t("services.text54")}
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
        <Typography variant="body1" id="55">
          {t("services.text55")}
        </Typography>
        <Typography variant="h5" sx={{ ...subtitleStyle }} gutterBottom>
          {t("services.subtitle7")}
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
        <Typography variant="body1" id="56">
          {t("services.text56")}
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1" id="57">
              {t("services.text57")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="58">
              {t("services.text58")}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" id="59">
              {t("services.text59")}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1" id="60">
          {t("services.text60")}
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
        <Typography variant="body1" id="61">
          {t("services.text61")}
        </Typography>
        <Typography variant="body1" id="62" sx={{ ...subtitleStyle }}>
          {t("services.text62")}
        </Typography>
        <Typography variant="body1" id="63">
          {t("services.text63")}
        </Typography>
        <Typography variant="body1" id="64">
          {t("services.text64")}
        </Typography>
        <SelectApplicationModal
          buttonText={t("applyBtn")}
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
