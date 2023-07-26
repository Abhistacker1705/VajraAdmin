import {Button, Typography, Box} from "@mui/material";
import {useParams} from "react-router-dom";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
const IncidentClearedDetails = () => {
  const incidentDetails = [
    {
      id: 1,
      Head: "Defibrilators",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ICU",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Dhanush",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [
        "https://advinhealthcare.com/wp-content/uploads/2022/10/Intensive-Care-Unit-ICU-1.jpg",
        "https://media.istockphoto.com/id/1130114408/photo/monitoring-patients-vital-sign-in-operating-room-doctor-cheking-at-patients-vital-signs.jpg?s=612x612&w=0&k=20&c=jzr8qsFdkhjSIcHWYeivsd8vxSPoyJyRI6ditCfcpgM=",
        "https://thumbs.dreamstime.com/b/equipment-medical-devices-modern-intensive-care-unit-icu-106014983.jpg",
      ],
    },
    {
      id: 2,
      Head: "ECG Monitor",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ECG",
      IssueDate: "05/04/2023",
      ClearDate: "07/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Rakesh",
      Email: "designer@medpick.com",
      Mobile: 8562354692,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [],
      IncidentImages: [],
    },
    {
      id: 3,
      Head: "Defibrilators",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "Radiology",
      IssueDate: "04/04/2023",
      ClearDate: "06/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Dhananjay",
      Email: "designer@medpick.com",
      Mobile: 8882764014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 4,
      Head: "ECG Mnitor",
      Asset: "Smart PFT Spirometer  - PFT USB",
      Status: "Cleared",
      Dept: "ICU",
      IssueDate: "02/04/2023",
      ClearDate: "04/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Raghavendra",
      Email: "designer@medpick.com",
      Mobile: 8838330620,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 5,
      Head: "Defibrilators",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ICU",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Chandan",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 6,
      Head: "Radiology Monitor",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ECG",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Praveen",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 7,
      Head: "Defibrilators",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "Radiology",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Jagadeesh",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 8,
      Head: "ECG Monitor",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ICU",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Goutham",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 9,
      Head: "ECG Monitor",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ECG",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Koushik",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 10,
      Head: "Defibrilators",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "Radiology",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Prathap",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 11,
      Head: "ICU Monitor",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ICU",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Manikanta",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
    {
      id: 12,
      Head: "Defibrilators",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Cleared",
      Dept: "ICU",
      IssueDate: "03/04/2023",
      ClearDate: "05/04/2023",
      TotalDown: "2Days 14Min 12Sec",
      Name: "Uday",
      Email: "designer@medpick.com",
      Mobile: 8880763014,
      Issue: "Display Broken",
      Action: "Service",
      Feedback: "Good Service",
      ClearedImages: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
      IncidentImages: [],
    },
  ];

  const {id} = useParams();
  const selectedHospital = incidentDetails.find((item) => item.Head === id);
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box minWidth="100%" minHeight="100%" sx={{background: "#FAF5EE"}}>
        <Box paddingY="30px">
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
              color: "#FF731D",
              marginLeft: "20px",
              marginBottom: "2rem",
              width: "220px",
            }}>
            Incidents Details
          </Typography>
          <Box
            maxWidth={{
              xl: "1030px",
              lg: "1030px",
              md: "900px",
              sm: "600px",
              xs: "480px",
            }}
            minHeight="100%"
            sx={{
              boxShadow: "0px 0px 4px 0px #00000033",
              border: "0px solid #1746A280",
              borderRadius: "15px",
              background: "white",
              marginLeft: {xl: "0px", lg: "0px", md: "0px"},
            }}>
            <Box padding="25px">
              <Box display="flex">
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "26px",
                        lg: "26px",
                        md: "26px",
                        sm: "24px",
                        xs: "20px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                    }}>
                    Asset Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "26px",
                        lg: "26px",
                        md: "26px",
                        sm: "24px",
                        xs: "20px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      marginLeft: {
                        xl: "100px",
                        lg: "100px",
                        md: "100px",
                        sm: "130px",
                      },
                    }}>
                    :
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "26px",
                        lg: "26px",
                        md: "26px",
                        sm: "24px",
                        xs: "20px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      marginLeft: "30px",
                    }}>
                    {selectedHospital.Asset}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #00A884",
                    borderRadius: "18px",
                    width: "115px",
                    height: "36px",
                    marginLeft: {
                      xl: "150px",
                      lg: "150px",
                      md: "35px",
                      sm: "2px",
                    },
                  }}>
                  <Typography
                    align="center"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#00A884",
                      height: "36px",
                      width: "110px",
                      padding: "3px",
                    }}>
                    {selectedHospital.Status}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Department
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "98px",
                      lg: "98px",
                      md: "98px",
                      sm: "58px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.Dept}
                </Typography>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Issue Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "120px",
                      lg: "120px",
                      md: "120px",
                      sm: "78px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.IssueDate}
                </Typography>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Clear Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "116px",
                      lg: "116px",
                      md: "116px",
                      sm: "73px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.ClearDate}
                </Typography>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Total Downtime
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "50px",
                      lg: "50px",
                      md: "50px",
                      sm: "13px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.TotalDown}
                </Typography>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Name
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "172px",
                      lg: "172px",
                      md: "172px",
                      sm: "127px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.Name}
                </Typography>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "179px",
                      lg: "179px",
                      md: "179px",
                      sm: "133px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.Email}
                </Typography>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Mobile Number
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "51px",
                      lg: "51px",
                      md: "51px",
                      sm: "14px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.Mobile}
                </Typography>
              </Box>

              <Box paddingY="10px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Issue
                </Typography>
                <Box
                  sx={{
                    boxShadow: "0px 0px 8px 0px #0000001F",
                    padding: "20px",
                    borderRadius: "10px",
                    minwidth: "892px",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "18px",
                        xs: "18px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      minWidth: "100%",
                    }}>
                    {selectedHospital.Issue}
                  </Typography>
                </Box>
              </Box>

              <Box paddingY="10px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Action Taken
                </Typography>
                <Box
                  sx={{
                    boxShadow: "0px 0px 8px 0px #0000001F",
                    padding: "20px",
                    borderRadius: "10px",
                    minwidth: "892px",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "18px",
                        xs: "18px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      minWidth: "100%",
                    }}>
                    {selectedHospital.Action}
                  </Typography>
                </Box>
              </Box>

              <Box paddingY="10px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Feedback
                </Typography>
                <Box
                  sx={{
                    boxShadow: "0px 0px 8px 0px #0000001F",
                    padding: "20px",
                    borderRadius: "10px",
                    minwidth: "892px",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "18px",
                        xs: "18px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      minWidth: "100%",
                    }}>
                    {selectedHospital.Feedback}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" paddingY="10px">
                {selectedHospital.ClearedImages &&
                  selectedHospital.ClearedImages.length > 0 && (
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xl: "26px",
                            lg: "26px",
                            md: "26px",
                            sm: "24px",
                            xs: "20px",
                          },
                          fontWeight: "400",
                          color: "#212427",
                        }}>
                        Cleared Images
                      </Typography>
                      <Box
                        sx={{
                          border: "2px solid #00A88480",
                          minWidth: "30vw",
                          minHeight: "12vw",
                          borderRadius: "10px",
                        }}>
                        {selectedHospital.ClearedImages.map((image, index) => (
                          <img
                            src={image}
                            alt=""
                            key={index}
                            style={{
                              maxWidth: "8vw",
                              maxHeight: "30vw",
                              border: "none",
                              padding: "15px",
                              marginTop: "35px",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                {selectedHospital.IncidentImages &&
                  selectedHospital.IncidentImages.length > 0 && (
                    <Box marginLeft="50px">
                      <Typography
                        sx={{
                          fontSize: {
                            xl: "26px",
                            lg: "26px",
                            md: "26px",
                            sm: "24px",
                            xs: "20px",
                          },
                          fontWeight: "400",
                          color: "#212427",
                        }}>
                        Incident Images
                      </Typography>
                      <Box
                        sx={{
                          border: "2px solid #FF4B4B",
                          minWidth: "30vw",
                          minHeight: "12vw",
                          borderRadius: "10px",
                        }}>
                        {selectedHospital.IncidentImages.map((image, index) => (
                          <img
                            src={image}
                            alt=""
                            key={index}
                            style={{
                              maxWidth: "8vw",
                              maxHeight: "30vw",
                              border: "none",
                              padding: "15px",
                              marginTop: "30px",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            variant="outlined"
            download="Download"
            type="button"
            sx={{
              borderRadius: "35px",
              color: "#FF731D",
              borderColor: "#FF731D",
              fontSize: "18px",
              marginLeft: {
                xl: "645px",
                lg: "480px",
                md: "313px",
                sm: "175px",
                xs: "120px",
              },
              marginTop: "20px",
              marginBottom: "20px",
              width: "224px",
              height: "55px",
              ":hover": {borderColor: "#FF731D"},
              textTransform: "none",
            }}>
            Download PDF
            <FileDownloadOutlinedIcon
              style={{marginLeft: "10px"}}></FileDownloadOutlinedIcon>
          </Button>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};
export default IncidentClearedDetails;
