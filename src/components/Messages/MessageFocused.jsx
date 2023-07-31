import {Typography} from "@mui/material";
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import SideBarWrapper from "../Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../../utils/dashboardMenuList";

const MessageFocused = () => {
  const messages = useSelector((store) => store.data.messages);
  const {messageId} = useParams();
  const selectedHospital = messages.find((item) => item.id == messageId);
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box width="100%" minHeight="100vh" backgroundColor="background.default">
        <Typography
          sx={{
            fontSize: {
              xl: "24px",
              lg: "24px",
              md: "22px",
              sm: "20px",
              xs: "20px",
            },
            fontWeight: "500",
            color: "secondary.main",
            width: "100%",
          }}>
          Messages
        </Typography>
        <Box
          width="100%"
          minHeight="100%"
          sx={{
            boxShadow: "0px 0px 4px 0px #00000033",
            background: "white",
            border: "0px solid #1746A280",
            borderRadius: "15px",
            marginTop: {
              xl: "20px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "20px",
            },
          }}>
          <Box
            padding="2rem"
            display="flex"
            justifyContent="space-between"
            gap="2rem">
            <Box display="flex" gap="2rem">
              <Typography
                sx={{
                  fontSize: {
                    xl: "24px",
                    lg: "24px",
                    md: "24px",
                    sm: "20px",
                    xs: "20px",
                  },

                  fontWeight: "500",
                  color: "primary.main",
                }}>
                {selectedHospital.hospital}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xl: "24px",
                    lg: "24px",
                    md: "24px",
                    sm: "20px",
                    xs: "20px",
                  },
                  textAlign: "center",

                  fontWeight: "500",
                  color: "text.primary",
                }}>
                {selectedHospital.city}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "18px",
                  xs: "18px",
                },
                textAlign: "right",

                color: "text.primary",
              }}>
              {selectedHospital.date}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "20px",
                sm: "20px",
                xs: "20px",
              },
              fontWeight: "400",
              color: "text.primary",
              padding: "2rem",
            }}>
            {selectedHospital.Messages}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "right",

              fontWeight: "500",
              color: "text.primary",
              marginRight: "2rem",
            }}>
            <Typography component="span" color="secondary.main">
              Contact:
            </Typography>{" "}
            {selectedHospital.contact}
          </Typography>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};

export default MessageFocused;
