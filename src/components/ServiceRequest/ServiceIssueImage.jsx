import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import SideBarWrapper from "../Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../../utils/dashboardMenuList";
import {useSelector} from "react-redux";

const ServiceIssueImage = () => {
  const requests = useSelector((store) => store.data.requests);
  const {hospitalid, imageid} = useParams();
  const selectedHospital = requests.filter(
    (request) => request.id == hospitalid
  );
  const imageUrl = selectedHospital[0].image[imageid];

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box>
        <img
          src={imageUrl}
          alt=""
          key={imageid}
          style={{width: "100%", height: "40vw", marginTop: "50px"}}
        />
      </Box>
    </SideBarWrapper>
  );
};

export default ServiceIssueImage;
