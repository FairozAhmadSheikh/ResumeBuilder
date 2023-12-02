import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import aboutus from "./aboutus.png";
import aboutline from "./aboutline.png";

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder Web App</h2>
        <span><img style={{ width: "200px", height: "50px" }} src={aboutline} alt="aboutline" /></span>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"
            }}>
            "Welcome to our advanced resume building platform, meticulously crafted by Fairoz Ahmad Sheikh. As a project commissioned by AlmaBetter, our team of seasoned professionals is dedicated to assisting job seekers in the creation of resumes and cover letters that distinctly set them apart in a competitive landscape. Our overarching mission is to furnish you with the requisite tools and resources essential for securing your ideal employment opportunity.

Navigating the complexities of a job search can be daunting, and our platform is designed to offer unwavering support throughout the entire process. Featuring an intuitive interface, our platform provides an array of customizable templates and industry-specific keywords, empowering you to construct a resume that effectively highlights your unique skills and achievements.

Here at our resume building service, we are unwavering in our commitment to delivering a high-caliber, cost-effective solution to address your job search requirements. Our team remains at the forefront of industry trends and best practices, ensuring that your resume reflects the latest standards.

We express our gratitude for choosing our resume building service, and eagerly anticipate the opportunity to contribute to the realization of your career aspirations."
          </Typography>
          <Stack>
            <img className="about-img"
              src={aboutus}
              alt="img"
            />
          </Stack>
        </Stack>
        <Box mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
            Share us
          </Typography>
          <span><img style={{ width: "200px", height: "50px" }} src={aboutline} alt="aboutline" /></span>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="dark"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
